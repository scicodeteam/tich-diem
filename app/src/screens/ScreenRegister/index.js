import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import Register from '../../components/Register';

const ScreenRegister = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token-tich-diem');
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  });
  return (
    <DefaultLayout>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Đăng ký</h1>
        <Register
          close={() => {
            console.log('1');
          }}
        />
      </div>
    </DefaultLayout>
  );
};

export default ScreenRegister;
