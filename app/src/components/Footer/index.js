import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer_dh_1_0_0">
      <div className="container">
        <div className="footer_dh_1_0_0__box">
          <div className="footer_dh_1_0_0__boxLeft">
            <h2 className="footer_dh_1_0_0__title">Liên hệ</h2>
            <div className="footer_dh_1_0_0__item">
              <div className="footer_dh_1_0_0__pic">
                <img width="100" height="100" src={`${process.env.PUBLIC_URL}/images/icon-location.png`} alt="" />
              </div>
              <p className="footer_dh_1_0_0__text">SCI Building số 93 - 95 Bạch Mai, Q.Hai Bà Trưng, Hà Nội</p>
            </div>
            <div className="footer_dh_1_0_0__item">
              <div className="footer_dh_1_0_0__pic">
                <img width="100" height="100" src={`${process.env.PUBLIC_URL}/images/telephone.png`} alt="" />
              </div>
              <p className="footer_dh_1_0_0__text">Hotline: 02473005779</p>
            </div>
            <div className="footer_dh_1_0_0__item">
              <div className="footer_dh_1_0_0__pic">
                <img width="100" height="100" src={`${process.env.PUBLIC_URL}/images/email.png`} alt="" />
              </div>
              <p className="footer_dh_1_0_0__text">Email: scigroup@gmail.com</p>
            </div>
            <div className="footer_dh_1_0_0__item">
              <div className="footer_dh_1_0_0__pic">
                <img width="100" height="100" src={`${process.env.PUBLIC_URL}/images/earth.png`} alt="" />
              </div>
              <p className="footer_dh_1_0_0__text">Website: https://scigroup.com.vn/</p>
            </div>
          </div>
          <div className="footer_dh_1_0_0__boxRight">
            <img width="240" height="78" src={`${process.env.PUBLIC_URL}/images/header-logo.svg`} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
