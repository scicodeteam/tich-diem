import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import './ModalGift.scss';
import { getUserFn, updateUserFn } from '../../apis/auth';
import { useEffect, useState } from 'react';
import { createGiftFn } from '../../apis/gift';

const ModalGift = ({ data, close, showForm }) => {
  const queryClient = useQueryClient();
  const token = JSON.parse(localStorage.getItem('token-tich-diem'));
  const queryUser = useQuery({
    queryKey: ['user', token],
    queryFn: () => getUserFn(token),
  });
  const initial = {
    token: token,
    ma_khach_hang: queryUser.isSuccess ? queryUser.data.data.success.ma_khach_hang : '',
    ten_phan_qua: data.name,
    dia_chi_nhan_qua: queryUser.isSuccess ? queryUser.data.data.success.address : '',
    so_diem_tru: data.point,
    trang_thai: 'đang xử lý',
  };
  const [body, setBody] = useState(initial);
  const [initPoint, setInitPoint] = useState(0);
  const mutationGift = useMutation({
    mutationFn: (data) => createGiftFn(data),
    onError: (error) => console.log(error),
    onSuccess: () => {
      alert('Đổi quà thành công');
      close();
      queryClient.invalidateQueries({ queryKey: ['user', token] });
    },
    retry: false,
  });
  const mutationPointUser = useMutation({
    mutationFn: (data) => updateUserFn(data),
    onError: (error) => console.log(error),
    onSuccess: (data) => {
      console.log('data: ', data);
    },
    retry: false,
  });
  useEffect(() => {
    if (queryUser.isSuccess) {
      setBody((prev) => ({
        ...prev,
        ma_khach_hang: queryUser.data.data.success.ma_khach_hang,
        dia_chi_nhan_qua: queryUser.data.data.success.address,
      }));
      setInitPoint(queryUser.data.data.success.tong_so_diem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryUser.isSuccess]);
  const handleSubmit = () => {
    const bodyPoint = {
      token: token,
      code: body.ma_khach_hang,
      tong_so_diem: Number(initPoint) - Number(body.so_diem_tru),
    };
    mutationGift.mutate(body);
    mutationPointUser.mutate(bodyPoint);
  };

  return (
    <>
      <div className="gifts_dh_1_0_0__overlay" id="gifts_dh_1_0_0__overlay" onClick={close}></div>
      <section className="gifts_dh_1_0_0__popup">
        <b id="close-form" onClick={close}>
          ╳
        </b>
        <div className="gifts_dh_1_0_0__popupTitle">Bạn muốn đổi phần quà này?</div>
        <div className="gifts_dh_1_0_0__popupName">{data.name}</div>
        <div className="gifts_dh_1_0_0__popupPoints">{data.point} điểm</div>
        <div className="gifts_dh_1_0_0__popupPic">
          <img width="499" height="500" src={`${process.env.PUBLIC_URL}/images/${data.thumbProduct}`} alt="" />
        </div>
        <div className="gifts_dh_1_0_0__popupNote">Vui lòng kiểm tra lại thông tin trước khi đổi quà</div>
        <div className="gifts_dh_1_0_0__popupBtn">
          <div className="gifts_dh_1_0_0__btn1 kttt" onClick={showForm}>
            Kiểm tra thông tin
          </div>
          <div className="gifts_dh_1_0_0__btn2" onClick={handleSubmit}>
            Đổi quà
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalGift;
