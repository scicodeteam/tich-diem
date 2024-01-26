import './Intro.scss';

const Intro = () => {
  return (
    <section className="intro_dh_1_0_0">
      <div className="container">
        <div className="intro_dh_1_0_0__box">
          <h1 className="intro_dh_1_0_0__title">GIỚI THIỆU CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT</h1>
          <p className="intro_dh_1_0_0__desc">
            Cùng tham gia chương trình Khách hàng thân thiết cùng Doppelherz. để tận hưởng những đặc quyền cho riêng
            mình. Tích điểm tại bất cứ nơi đâu để nhận những phần quà hấp dẫn từ thương hiệu số 1 tại Đức. Hơn thế nữa,
            Doppelherz ra mắt “Tem tích điểm“ trên mỗi hộp sản phẩm giúp khách hàng tích điểm dễ dàng hơn chỉ với 01 lần
            quét mã.
          </p>
          <div className="intro_dh_1_0_0__itemBox">
            <div className="intro_dh_1_0_0__itemBoxLeft">
              <p className="intro_dh_1_0_0__text">
                <span>1. Tên chương trình:</span>
                Khách hàng thân thiết cùng Doppelherz.
              </p>
              <p className="intro_dh_1_0_0__text">
                <span>2. Thời gian áp dụng:</span>
                Từ ngày 11/10/2022 đến khi có thông báo mới nhất.
              </p>
              <p className="intro_dh_1_0_0__text">
                <span>3. Đối tượng áp dụng:</span>
                Tất cả các khách hàng mua sản phẩm Doppelherz tại các hiệu thuốc, nhà thuốc, chuỗi cửa hàng, sàn thương
                mại điện tử, website, kênh online.. là đại lý bán hàng, nhà phân phối chính thức của Doppelherz.
              </p>
              <p className="intro_dh_1_0_0__text">
                <span>Lưu ý:</span>
                Chương trình dành riêng cho người tiêu dùng cuối và không áp dụng cho khách hàng là đại lý/nhà phân phối
                chính thức của Doppelherz. Mỗi mã QR chỉ được quét và tích điểm 01 lần duy nhất cho người tiêu dùng
                cuối. Công ty sẽ truy cứu trách nhiệm đối với đại lý/nhà phân phối tham gia chương trình này.
              </p>
              <div className="intro_dh_1_0_0__text">
                <span>4. Nội dung chương trình:</span>
                <ul>
                  <li>
                    Mặt trong mỗi vỏ hộp sản phẩm Doppelherz sẽ có in 01 “Tem tích điểm”. Khách hàng quét mã QR của tem,
                    đăng nhập hệ thống tích điểm tichdiem.doppelherz.vn, tích lũy điểm số sau mỗi lần mua sản phẩm, quy
                    đổi quà tương ứng khi đủ điều kiện.
                  </li>
                  <li>
                    Chương trình bắt đầu áp dụng với sản phẩm Aktiv-Meno, các sản phẩm khác sẽ liên tục được cập nhật
                    trong thời gian sớm nhất.
                  </li>
                  <li>
                    Khách hàng là người tiêu dùng mới khi đăng ký tài khoản trên website tichdiem.doppelherz.vn sẽ được
                    cộng 5 điểm vào tài khoản.
                  </li>
                </ul>
              </div>
            </div>
            <div className="intro_dh_1_0_0__itemBoxRight">
              <img width="181" height="181" src={`${process.env.PUBLIC_URL}/images/banner-intro.png`} alt="" />
            </div>
          </div>
        </div>
        <div className="intro_dh_1_0_0__box2">
          <div className="intro_dh_1_0_0__itemBottom">
            <div className="intro_dh_1_0_0__pic">
              <img src={`${process.env.PUBLIC_URL}/images/logo-nhap-khau.png`} alt="" />
            </div>
            <div className="intro_dh_1_0_0__textBottom">
              Sản phẩm <br /> Chính hãng 100%
            </div>
          </div>
          <div className="intro_dh_1_0_0__itemBottom">
            <div className="intro_dh_1_0_0__pic">
              <img src={`${process.env.PUBLIC_URL}/images/logo-no1.png`} alt="" />
            </div>
            <div className="intro_dh_1_0_0__textBottom">
              Thương hiệu <br /> Số 1 tại Đức
            </div>
          </div>
          <div className="intro_dh_1_0_0__itemBottom">
            <div className="intro_dh_1_0_0__pic">
              <img src={`${process.env.PUBLIC_URL}/images/logo-giao-hang.png`} alt="" />
            </div>
            <div className="intro_dh_1_0_0__textBottom">
              Giao hàng <br /> Toàn quốc
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
