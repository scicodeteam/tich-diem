import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import Gift from '../../components/Gift';

const ScreenGift = () => {
  const token = localStorage.getItem('token-tich-diem');
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/dang-nhap', { state: { key: '/doi-qua' } });
    }
  });
  return (
    <DefaultLayout>
      <Gift />
    </DefaultLayout>
  );
};

export default ScreenGift;
