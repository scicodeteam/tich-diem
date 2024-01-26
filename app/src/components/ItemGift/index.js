import { useQuery } from '@tanstack/react-query';
import { getUserFn } from '../../apis/auth';
import './ItemGift.scss';
import ModalGift from '../ModalGift';
import { useState } from 'react';
import ModalChange from '../ModalChange';

const ItemGift = ({ data }) => {
  const [isShow, setIsShow] = useState(false);
  const [isShowChange, setIsShowChange] = useState(false);
  const token = JSON.parse(localStorage.getItem('token-tich-diem'));
  const queryUser = useQuery({
    queryKey: ['user', token],
    queryFn: () => getUserFn(token),
  });
  const handleSubmit = () => {
    if (queryUser.data.data.success.tong_so_diem < data.point) {
      alert('Không đủ điểm đổi quà');
    } else {
      setIsShow(true);
    }
  };
  const close = () => {
    setIsShow(false);
    setIsShowChange(false);
  };
  const handleChangeForm = () => {
    setIsShow(false);
    setIsShowChange(true);
  };
  const handleBackForm = () => {
    setIsShow(true);
    setIsShowChange(false);
  };
  return (
    <>
      <div className="gifts_dh_1_0_0__item">
        <div className="gifts_dh_1_0_0__pic">
          <img width="499" height="500" src={`${process.env.PUBLIC_URL}/images/${data.thumbProduct}`} alt="" />
        </div>
        <div className="gifts_dh_1_0_0__text">{data.name}</div>
        <div className="gifts_dh_1_0_0__points">
          {queryUser.isSuccess && queryUser.data.data.success.tong_so_diem}/<span>{data.point}</span>
        </div>
        <div className="gifts_dh_1_0_0__line"></div>
        <div className="gifts_dh_1_0_0__btn" onClick={handleSubmit}>
          Đổi quà
        </div>
      </div>
      {isShow && <ModalGift data={data} close={close} showForm={handleChangeForm} />}
      {isShowChange && <ModalChange backForm={handleBackForm} user={queryUser.data} close={close} />}
    </>
  );
};

export default ItemGift;
