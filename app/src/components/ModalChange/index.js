import { useState } from 'react';
import './ModalChange.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserFn } from '../../apis/auth';

const ModalChange = ({ backForm, user, close }) => {
  const queryClient = useQueryClient();
  const token = JSON.parse(localStorage.getItem('token-tich-diem'));
  const [body, setBody] = useState({
    token: token,
    code: user.data.success.ma_khach_hang,
    name: user.data.success.name,
    email: user.data.success.email,
    address: user.data.success.address,
  });
  const mutationUpdateUser = useMutation({
    mutationFn: (data) => updateUserFn(data),
    onError: (error) => console.log(error),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', token] });
      alert('Xác nhận đổi thành công');
      close();
    },
    retry: false,
  });
  const handleChange = (key, value) => {
    setBody({ ...body, [key]: value.target.value });
  };
  const handleSubmit = () => {
    mutationUpdateUser.mutate(body);
  };

  return (
    <>
      <div className="gifts_dh_1_0_0__overlay" id="gifts_dh_1_0_0__overlay" onClick={close}></div>
      <section className="gifts_dh_1_0_0__popupForm">
        <b id="close-form" onClick={close}>
          ╳
        </b>
        <div className="gifts_dh_1_0_0__btnBack" onClick={backForm}>
          ← Quay lại
        </div>
        <div className="gifts_dh_1_0_0__popupTitle">Kiểm tra thông tin</div>
        <div className="gifts_dh_1_0_0__itemInput">
          <input
            type="text"
            placeholder="Họ và tên"
            defaultValue={user.data.success.name}
            onChange={(e) => handleChange('name', e)}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
          />
        </div>
        <div className="gifts_dh_1_0_0__itemInput">
          <input
            type="text"
            placeholder="Email"
            defaultValue={user.data.success.email}
            onChange={(e) => handleChange('email', e)}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
          />
        </div>
        <div className="gifts_dh_1_0_0__itemInput">
          <input type="text" placeholder="Số điện thoại" disabled defaultValue={user.data.success.phone} />
        </div>
        <div className="gifts_dh_1_0_0__itemInput">
          <input
            type="text"
            placeholder="Địa chỉ"
            defaultValue={user.data.success.address}
            onChange={(e) => handleChange('address', e)}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
          />
        </div>
        <div className="gifts_dh_1_0_0__popupBtnForm" onClick={handleSubmit}>
          Xác nhận đổi thông tin
        </div>
      </section>
    </>
  );
};

export default ModalChange;
