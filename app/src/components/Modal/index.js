import { useState } from 'react';
import Login from '../Login';
import Register from '../Register';
import './Modal.scss';

const Modal = ({ close }) => {
  const [isType, setIsType] = useState('login');
  return (
    <div className="login_dh_1_0_0">
      <div className="login_dh_1_0_0__overlay" id="login_dh_1_0_0__overlay" onClick={close}></div>
      <section id="login_dh_1_0_0">
        <div className="container">
          <div className="login_dh_1_0_0__box">
            <b id="close-form" onClick={close}>
              ╳
            </b>
            <div className="login_dh_1_0_0__head tabs">
              <p
                className={`login_dh_1_0_0__text tab-link ${isType === 'login' ? 'current' : ''} `}
                onClick={() => setIsType('login')}
              >
                Đăng nhập
              </p>
              <p
                className={`login_dh_1_0_0__text tab-link ${isType === 'regis' ? 'current' : ''}`}
                onClick={() => setIsType('regis')}
              >
                Đăng ký
              </p>
            </div>
            {isType === 'login' && <Login close={close} />}
            {isType === 'regis' && <Register close={close} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
