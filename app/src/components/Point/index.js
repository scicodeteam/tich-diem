import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { v4 as uuid } from 'uuid';
import { getUserFn, updateUserFn } from '../../apis/auth';
import { createPointFn } from '../../apis/point';
import { useNavigate } from 'react-router-dom';

const Point = ({ productName, point }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const token = JSON.parse(localStorage.getItem('token-tich-diem'));
  const queryUser = useQuery({
    queryKey: ['user', token],
    queryFn: () => getUserFn(token),
  });
  const unique_id = uuid();
  const initial = {
    token: token,
    ma_khach_hang: queryUser.isSuccess ? queryUser.data.data.success.ma_khach_hang : '',
    ten_san_pham: productName,
    ma_tich_diem: unique_id.slice(0, 8),
    so_diem_cong: point,
  };
  const [body, setBody] = useState(initial);
  const [initPoint, setInitPoint] = useState(0);
  const mutationPoint = useMutation({
    mutationFn: (data) => createPointFn(data),
    onError: (error) => console.log(error),
    onSuccess: (data) => {
      console.log('data: ', data);
    },
    retry: false,
  });
  const mutationPointUser = useMutation({
    mutationFn: (data) => updateUserFn(data),
    onError: (error) => console.log(error),
    onSuccess: () => {
      navigate('/lich-su-doi-qua');
      queryClient.invalidateQueries({ queryKey: ['user', token] });
    },

    retry: false,
  });
  useEffect(() => {
    if (queryUser.isSuccess) {
      setBody((prev) => ({
        ...prev,
        ma_khach_hang: queryUser.data.data.success.ma_khach_hang,
      }));
      setInitPoint(queryUser.data.data.success.tong_so_diem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryUser.isSuccess]);
  useEffect(() => {
    if (queryUser.isSuccess) {
      const bodyPoint = {
        token: token,
        code: body.ma_khach_hang,
        tong_so_diem: Number(initPoint) + Number(body.so_diem_cong),
      };
      mutationPoint.mutate(body);
      mutationPointUser.mutate(bodyPoint);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [body]);
  return <h1>Thanh công</h1>;
};

export default Point;
