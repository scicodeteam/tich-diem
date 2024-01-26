import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { registerFn } from '../../apis/auth';

const Register = ({ close }) => {
  // render 1 id bất kì
  const unique_id = uuid();

  const initial = {
    ma_khach_hang: unique_id.slice(0, 8),
    name: '',
    phone: '',
    email: '',
    password: '',
    c_password: '',
    address: 'Địa chỉ',
    tong_so_diem: 0,
    terms: true,
  };

  const [body, setBody] = useState(initial);
  const [message, setMessage] = useState([]);

  // useMutation thư viện tanstack query xử lý post api
  const mutationLogin = useMutation({
    mutationFn: () => registerFn(body),
    onError: (error) => {
      const err = error.response.data.error;
      if (err.email) {
        alert('Email không đúng định dạng');
      }
      if (err.c_password) {
        alert('Password không trùng khớp');
      }
    },
    onSuccess: () => {
      alert('Đăng ký tài khoản thành công');
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
    const validate = required(['name', 'phone', 'email', 'password', 'c_password', 'terms']);
    if (validate.length <= 0) {
      mutationLogin.mutate();
    }
  };

  return (
    <div className="tab-content current">
      <div className="login_dh_1_0_0__boxForm">
        <div className="login_dh_1_0_0__pic">
          <img width="1000" height="1000" src={`${process.env.PUBLIC_URL}/images/banner3.png`} alt="" />
        </div>
        <div className="login_dh_1_0_0__form">
          <div className="login_dh_1_0_0__boxItem">
            <div className="login_dh_1_0_0__item login_dh_1_0_0__item--1">
              <input
                className={`login_dh_1_0_0__input ${message.includes('name') ? 'err' : ''}`}
                type="text"
                placeholder="Họ và tên"
                value={body.name}
                onChange={(e) => handleChange('name', e)}
                onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
              />
              {message.includes('name') && <p className="login_dh_1_0_0__message">Không được để trống</p>}
            </div>
            <div className="login_dh_1_0_0__item login_dh_1_0_0__item--1">
              <input
                className={`login_dh_1_0_0__input ${message.includes('phone') ? 'err' : ''}`}
                type="text"
                placeholder="Số điện thoại"
                value={body.phone}
                onChange={(e) => handleChange('phone', e)}
                onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
              />
              {message.includes('phone') && <p className="login_dh_1_0_0__message">Không được để trống</p>}
            </div>
          </div>
          <div className="login_dh_1_0_0__item">
            <input
              className={`login_dh_1_0_0__input ${message.includes('email') ? 'err' : ''}`}
              type="email"
              placeholder="Email"
              value={body.email}
              onChange={(e) => handleChange('email', e)}
              onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
            />
            {message.includes('email') && <p className="login_dh_1_0_0__message">Không được để trống</p>}
          </div>
          <div className="login_dh_1_0_0__boxItem">
            <div className="login_dh_1_0_0__item login_dh_1_0_0__item--1">
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
            <div className="login_dh_1_0_0__item login_dh_1_0_0__item--1">
              <input
                className={`login_dh_1_0_0__input ${message.includes('c_password') ? 'err' : ''}`}
                type="password"
                placeholder="Xác nhận mật khẩu"
                value={body.c_password}
                onChange={(e) => handleChange('c_password', e)}
                onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
              />
              {message.includes('c_password') && <p className="login_dh_1_0_0__message">Không được để trống</p>}
            </div>
          </div>
          <div className="login_dh_1_0_0__boxNote">
            <input
              className={`login_dh_1_0_0__input ${message.includes('terms') ? 'err' : ''}`}
              type="checkbox"
              checked={body.terms}
              onChange={(e) => setBody({ ...body, terms: e.target.checked })}
              onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
            />
            <div className="login_dh_1_0_0__note">
              Tôi đồng ý với <Link to="/dieu-khoan-su-dung">Điều khoản</Link> &{' '}
              <Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
              {message.includes('terms') && <p className="login_dh_1_0_0__message">Bạn chưa đồng ý</p>}
            </div>
          </div>
          <div className="login_dh_1_0_0__item">
            <input type="submit" value="ĐĂNG KÝ" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
