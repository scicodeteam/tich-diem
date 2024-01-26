import { useEffect } from 'react';
import History from '../../components/History';
import DefaultLayout from '../../layouts/DefaultLayout';
import { useNavigate } from 'react-router-dom';

const ScreenHistory = () => {
  const token = localStorage.getItem('token-tich-diem');
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/dang-nhap', { state: { key: '/lich-su-doi-qua' } });
    }
  });
  return (
    <DefaultLayout>
      <History />
    </DefaultLayout>
  );
};

export default ScreenHistory;
