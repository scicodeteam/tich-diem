import { useNavigate, useLocation } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import Login from '../../components/Login';
import { useEffect } from 'react';

const ScreenLogin = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const token = localStorage.getItem('token-tich-diem');
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  });
  console.log('location: ', location.state);
  return (
    <DefaultLayout>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Đăng nhập</h1>
        <Login close={() => (location.state ? navigate(location.state.key) : navigate(-1))} />
      </div>
    </DefaultLayout>
  );
};

export default ScreenLogin;
