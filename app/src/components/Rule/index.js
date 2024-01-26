import { useState } from 'react';
import './Rule.scss';

const Rule = () => {
  const [isShow, setIsShow] = useState({
    type: '',
    show: false,
  });

  const toggle = (type) => {
    setIsShow({ type: type, show: type === isShow.type ? !isShow.show : true });
  };

  return (
    <section className="rules_dh_1_0_0">
      <div className="container">
        <div className="rules_dh_1_0_0__box">
          <div className="rules_dh_1_0_0__title">THỂ LỆ CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT</div>
          <div className="rules_dh_1_0_0__item">
            <button
              className={`accordion rules_dh_1_0_0__accor ${isShow.type === '1' && isShow.show ? 'active' : ''}`}
              onClick={() => toggle('1')}
            >
              1. GIỚI THIỆU CHUNG
            </button>
            <div className={`rules_dh_1_0_0__content ${isShow.type === '1' && isShow.show ? 'show' : ''} `}>
              <p>
                Với sứ mệnh “Vì một nền y dược tiên tiến và giàu nhân văn”, Công ty Cổ phần Mastertran mang đến các sản
                phẩm Doppelherz chất lượng Số 1 tại Đức, cùng chính sách chăm sóc khách hàng tận tâm. Doppelherz còn có
                đội ngũ chuyên gia và nhân viên chăm sóc khách hàng luôn sẵn sàng giải đáp mọi thắc mắc của khách hàng
                về các vấn đề sức khỏe và bệnh lý thường gặp.
                <br />
                Để khách hàng trải nghiệm những giải pháp chăm sóc sức khỏe hiệu quả là các sản phẩm Doppelherz, Công ty
                Cổ phần Mastertran ra mắt chương trình “Khách hàng thân thiết cùng Doppelherz” như một lời tri ân đặc
                biệt gửi đến các khách hàng là người tiêu dùng luôn đồng hành cùng các sản phẩm của Doppelherz.
                <br />
                Chương trình “Khách hàng thân thiết cùng Doppelherz” được triển khai trên toàn lãnh thổ Việt Nam, dành
                cho người tiêu dùng mua sản phẩm Doppelherz bao gồm tất cả các sản phẩm của thương hiệu Doppelherz do
                Công ty Cổ phần Mastertran (sau đây gọi tắt là “Công ty”) nhập khẩu chính hãng từ Đức và phân phối tại
                Việt Nam.
                <br />
                Chương trình chỉ dành cho người tiêu dùng; các khách hàng là đại lý phân phối sản phẩm Doppelherz không
                được tham gia chương trình này
              </p>
            </div>
          </div>
          <div className="rules_dh_1_0_0__item">
            <button
              className={`accordion rules_dh_1_0_0__accor ${isShow.type === '2' && isShow.show ? 'active' : ''}`}
              onClick={() => toggle('2')}
            >
              2. CÁCH THỨC THAM GIA CHƯƠNG TRÌNH
            </button>
            <div className={`rules_dh_1_0_0__content ${isShow.type === '2' && isShow.show ? 'show' : ''} `}>
              <p>
                Với sứ mệnh “Vì một nền y dược tiên tiến và giàu nhân văn”, Công ty Cổ phần Mastertran mang đến các sản
                phẩm Doppelherz chất lượng Số 1 tại Đức, cùng chính sách chăm sóc khách hàng tận tâm. Doppelherz còn có
                đội ngũ chuyên gia và nhân viên chăm sóc khách hàng luôn sẵn sàng giải đáp mọi thắc mắc của khách hàng
                về các vấn đề sức khỏe và bệnh lý thường gặp.
                <br />
                Để khách hàng trải nghiệm những giải pháp chăm sóc sức khỏe hiệu quả là các sản phẩm Doppelherz, Công ty
                Cổ phần Mastertran ra mắt chương trình “Khách hàng thân thiết cùng Doppelherz” như một lời tri ân đặc
                biệt gửi đến các khách hàng là người tiêu dùng luôn đồng hành cùng các sản phẩm của Doppelherz.
                <br />
                Chương trình “Khách hàng thân thiết cùng Doppelherz” được triển khai trên toàn lãnh thổ Việt Nam, dành
                cho người tiêu dùng mua sản phẩm Doppelherz bao gồm tất cả các sản phẩm của thương hiệu Doppelherz do
                Công ty Cổ phần Mastertran (sau đây gọi tắt là “Công ty”) nhập khẩu chính hãng từ Đức và phân phối tại
                Việt Nam.
                <br />
                Chương trình chỉ dành cho người tiêu dùng; các khách hàng là đại lý phân phối sản phẩm Doppelherz không
                được tham gia chương trình này
              </p>
            </div>
          </div>
          <div className="rules_dh_1_0_0__item">
            <button
              className={`accordion rules_dh_1_0_0__accor ${isShow.type === '3' && isShow.show ? 'active' : ''}`}
              onClick={() => toggle('3')}
            >
              3. THỜI HẠN CHƯƠNG TRÌNH VÀ ĐỔI QUÀ
            </button>
            <div className={`rules_dh_1_0_0__content ${isShow.type === '3' && isShow.show ? 'show' : ''} `}>
              <p>
                Với sứ mệnh “Vì một nền y dược tiên tiến và giàu nhân văn”, Công ty Cổ phần Mastertran mang đến các sản
                phẩm Doppelherz chất lượng Số 1 tại Đức, cùng chính sách chăm sóc khách hàng tận tâm. Doppelherz còn có
                đội ngũ chuyên gia và nhân viên chăm sóc khách hàng luôn sẵn sàng giải đáp mọi thắc mắc của khách hàng
                về các vấn đề sức khỏe và bệnh lý thường gặp.
                <br />
                Để khách hàng trải nghiệm những giải pháp chăm sóc sức khỏe hiệu quả là các sản phẩm Doppelherz, Công ty
                Cổ phần Mastertran ra mắt chương trình “Khách hàng thân thiết cùng Doppelherz” như một lời tri ân đặc
                biệt gửi đến các khách hàng là người tiêu dùng luôn đồng hành cùng các sản phẩm của Doppelherz.
                <br />
                Chương trình “Khách hàng thân thiết cùng Doppelherz” được triển khai trên toàn lãnh thổ Việt Nam, dành
                cho người tiêu dùng mua sản phẩm Doppelherz bao gồm tất cả các sản phẩm của thương hiệu Doppelherz do
                Công ty Cổ phần Mastertran (sau đây gọi tắt là “Công ty”) nhập khẩu chính hãng từ Đức và phân phối tại
                Việt Nam.
                <br />
                Chương trình chỉ dành cho người tiêu dùng; các khách hàng là đại lý phân phối sản phẩm Doppelherz không
                được tham gia chương trình này
              </p>
            </div>
          </div>
          <div className="rules_dh_1_0_0__item">
            <button
              className={`accordion rules_dh_1_0_0__accor ${isShow.type === '4' && isShow.show ? 'active' : ''}`}
              onClick={() => toggle('4')}
            >
              4. HOTLINE
            </button>
            <div className={`rules_dh_1_0_0__content ${isShow.type === '4' && isShow.show ? 'show' : ''} `}>
              <p>
                Với sứ mệnh “Vì một nền y dược tiên tiến và giàu nhân văn”, Công ty Cổ phần Mastertran mang đến các sản
                phẩm Doppelherz chất lượng Số 1 tại Đức, cùng chính sách chăm sóc khách hàng tận tâm. Doppelherz còn có
                đội ngũ chuyên gia và nhân viên chăm sóc khách hàng luôn sẵn sàng giải đáp mọi thắc mắc của khách hàng
                về các vấn đề sức khỏe và bệnh lý thường gặp.
                <br />
                Để khách hàng trải nghiệm những giải pháp chăm sóc sức khỏe hiệu quả là các sản phẩm Doppelherz, Công ty
                Cổ phần Mastertran ra mắt chương trình “Khách hàng thân thiết cùng Doppelherz” như một lời tri ân đặc
                biệt gửi đến các khách hàng là người tiêu dùng luôn đồng hành cùng các sản phẩm của Doppelherz.
                <br />
                Chương trình “Khách hàng thân thiết cùng Doppelherz” được triển khai trên toàn lãnh thổ Việt Nam, dành
                cho người tiêu dùng mua sản phẩm Doppelherz bao gồm tất cả các sản phẩm của thương hiệu Doppelherz do
                Công ty Cổ phần Mastertran (sau đây gọi tắt là “Công ty”) nhập khẩu chính hãng từ Đức và phân phối tại
                Việt Nam.
                <br />
                Chương trình chỉ dành cho người tiêu dùng; các khách hàng là đại lý phân phối sản phẩm Doppelherz không
                được tham gia chương trình này
              </p>
            </div>
          </div>
          <div className="rules_dh_1_0_0__item">
            <button
              className={`accordion rules_dh_1_0_0__accor ${isShow.type === '5' && isShow.show ? 'active' : ''}`}
              onClick={() => toggle('5')}
            >
              5. QUY ĐỊNH KHÁC
            </button>
            <div className={`rules_dh_1_0_0__content ${isShow.type === '5' && isShow.show ? 'show' : ''} `}>
              <p>
                Với sứ mệnh “Vì một nền y dược tiên tiến và giàu nhân văn”, Công ty Cổ phần Mastertran mang đến các sản
                phẩm Doppelherz chất lượng Số 1 tại Đức, cùng chính sách chăm sóc khách hàng tận tâm. Doppelherz còn có
                đội ngũ chuyên gia và nhân viên chăm sóc khách hàng luôn sẵn sàng giải đáp mọi thắc mắc của khách hàng
                về các vấn đề sức khỏe và bệnh lý thường gặp.
                <br />
                Để khách hàng trải nghiệm những giải pháp chăm sóc sức khỏe hiệu quả là các sản phẩm Doppelherz, Công ty
                Cổ phần Mastertran ra mắt chương trình “Khách hàng thân thiết cùng Doppelherz” như một lời tri ân đặc
                biệt gửi đến các khách hàng là người tiêu dùng luôn đồng hành cùng các sản phẩm của Doppelherz.
                <br />
                Chương trình “Khách hàng thân thiết cùng Doppelherz” được triển khai trên toàn lãnh thổ Việt Nam, dành
                cho người tiêu dùng mua sản phẩm Doppelherz bao gồm tất cả các sản phẩm của thương hiệu Doppelherz do
                Công ty Cổ phần Mastertran (sau đây gọi tắt là “Công ty”) nhập khẩu chính hãng từ Đức và phân phối tại
                Việt Nam.
                <br />
                Chương trình chỉ dành cho người tiêu dùng; các khách hàng là đại lý phân phối sản phẩm Doppelherz không
                được tham gia chương trình này
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rule;
