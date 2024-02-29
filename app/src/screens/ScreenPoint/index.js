import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import Point from '../../components/Point';

const ScreenPoint = () => {
  const token = localStorage.getItem('token-tich-diem');
  const navigate = useNavigate();
  const { productName, point } = useParams();
  useEffect(() => {
    if (!token) {
      navigate('/dang-nhap', { state: { key: `/doi-diem/${productName}/${point}` } });
    }
  });
  return (
    <DefaultLayout>
      <Point productName={productName} point={point} />
    </DefaultLayout>
  );
};

export default ScreenPoint;
