import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import './Header.scss';
import { useQuery } from '@tanstack/react-query';
import { getUserFn } from '../../apis/auth';

const Header = () => {
  const [isModal, setIsModal] = useState(false);

  const token = JSON.parse(localStorage.getItem('token-tich-diem'));
  const navigate = useNavigate();
  const queryUser = useQuery({
    queryKey: ['user', token],
    queryFn: () => getUserFn(token),
    retry: false,
  });

  return (
    <>
      <header className="header_dh_1_0_0">
        <div className="container">
          <div className="header_dh_1_0_0__box">
            <div className="header_dh_1_0_0__nav" id="headerMenuBtn">
              <img width="30" height="25" src={`${process.env.PUBLIC_URL}/images/icon-menu.svg`} alt="" />
            </div>
            <div className="header_dh_1_0_0__logo">
              <a href="/">
                <img width="240" height="78" src={`${process.env.PUBLIC_URL}/images/header-logo.svg`} alt="" />
              </a>
            </div>
            <div className="header_dh_1_0_0__menu">
              <ul className="header_dh_1_0_0__menuMain" id="headerSideBar">
                <li className="header_dh_1_0_0__menuItem">
                  <Link to="/" className="header_dh_1_0_0__link">
                    Trang chủ
                  </Link>
                </li>
                <li className="header_dh_1_0_0__menuItem">
                  <Link to="/the-le" className="header_dh_1_0_0__link">
                    Thể lệ
                  </Link>
                </li>
                <li className="header_dh_1_0_0__menuItem">
                  <div className="header_dh_1_0_0__link">
                    Điều khoản & Chính sách
                    <i
                      className="header_dh_1_0_0__iconDown"
                      style={{ backgroundImage: `${process.env.PUBLIC_URL}/images/icon-down.svg` }}
                    ></i>
                  </div>
                  <div className="header_dh_1_0_0__dropdown">
                    <ul>
                      <li>
                        <Link to="/dieu-khoan-su-dung">Điều khoản sử dụng</Link>
                      </li>
                      <li>
                        <Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {queryUser.isSuccess && queryUser.data ? (
                  <li className="header_dh_1_0_0__menuItem">
                    <div className="header_dh_1_0_0__link">
                      Tài khoản
                      <i
                        className="header_dh_1_0_0__iconDown"
                        style={{ backgroundImage: `${process.env.PUBLIC_URL}/images/icon-down.svg` }}
                      ></i>
                    </div>
                    <div className="header_dh_1_0_0__dropdown">
                      <ul>
                        <li>
                          <Link to="/lich-su-doi-qua">Lịch sử tích điểm</Link>
                        </li>
                        <li>
                          <Link to="/doi-qua">Đổi quà</Link>
                        </li>
                        <li
                          onClick={() => {
                            localStorage.clear();
                            queryUser.refetch();
                            navigate('/');
                          }}
                        >
                          Đăng xuất
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li className="header_dh_1_0_0__menuItem">
                    <div className="header_dh_1_0_0__link" onClick={() => setIsModal(!isModal)}>
                      Đăng nhập / Đăng ký
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="header_dh_1_0_0__bg" id="headerBg"></div>
      </header>
      {isModal && <Modal close={() => setIsModal(false)} />}
    </>
  );
};

export default Header;
