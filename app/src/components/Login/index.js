import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getTokenFn } from '../../apis/auth';
import { Link } from 'react-router-dom';

const Login = ({ close }) => {
  const initial = {
    email: '',
    password: '',
  };

  const [body, setBody] = useState(initial);
  const [message, setMessage] = useState([]);

  // useMutation thư viện tanstack query xử lý post api
  const mutationLogin = useMutation({
    mutationFn: () => getTokenFn(body),
    onError: () => alert('Tài khoản hoặc mật khẩu không chính xác'),
    onSuccess: (data) => {
      localStorage.setItem('token-tich-diem', JSON.stringify(data.data.success.token));
      alert('Đăng nhập thành công');
      close();
    },
  });

  // validate bắt buộc nhập form
  const required = (types) => {
    let validate = types;
    types.map((type) => {
      if (!body[type]) {
        setMessage((prev) => [...prev, type]);
      } else {
        setMessage((prev) => {
          return prev.filter((item) => item !== type);
        });
        validate = validate.filter((item) => item !== type);
      }
      return true;
    });
    return validate;
  };

  // onchange lấy value input
  const handleChange = (key, value) => {
    setBody({ ...body, [key]: value.target.value });
  };

  // function submit
  const handleSubmit = () => {
    const validate = required(['email', 'password']);
    if (validate.length <= 0) {
      mutationLogin.mutate();
    }
  };

  return (
    <div className="tab-content current" id="login">
      <div className="login_dh_1_0_0__boxForm">
        <div className="login_dh_1_0_0__pic">
          <img width="1000" height="1000" src={`${process.env.PUBLIC_URL}/images/banner-intro.jpg`} alt="" />
        </div>
        <div className="login_dh_1_0_0__form">
          <div className="login_dh_1_0_0__item">
            <input
              className={`login_dh_1_0_0__input ${message.includes('email') ? 'err' : ''}`}
              type="text"
              placeholder="Email"
              value={body.email}
              onChange={(e) => handleChange('email', e)}
              onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
            />
            {message.includes('email') && <p className="login_dh_1_0_0__message">Không được để trống</p>}
          </div>
          <div className="login_dh_1_0_0__item">
            <input
              className={`login_dh_1_0_0__input ${message.includes('password') ? 'err' : ''}`}
              type="password"
              placeholder="Mật khẩu"
              value={body.password}
              onChange={(e) => handleChange('password', e)}
              onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
            />
            {message.includes('password') && <p className="login_dh_1_0_0__message">Không được để trống</p>}
          </div>
          <Link to="/dang-ky">Bạn chưa có tài khoản</Link>
          <a href="/" className="login_dh_1_0_0__forgot">
            Quên mật khẩu
          </a>
          <div className="login_dh_1_0_0__item">
            <input type="submit" value="ĐĂNG NHẬP" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
