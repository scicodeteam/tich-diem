import { useQuery } from '@tanstack/react-query';
import { getUserFn } from '../../apis/auth';
import './History.scss';
import Table from '../Table';
import { getPointFn } from '../../apis/point';
import { getGiftFn } from '../../apis/gift';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  const token = JSON.parse(localStorage.getItem('token-tich-diem'));
  const [body, setBody] = useState({
    token: token,
    code: '',
  });
  const [isShow, setIsShow] = useState('point');
  const queryUser = useQuery({
    queryKey: ['user', token],
    queryFn: () => getUserFn(token),
  });

  const queryPoint = useQuery({
    queryKey: ['point', body.code],
    queryFn: () => getPointFn(body),
  });
  const queryGift = useQuery({
    queryKey: ['gift', body.code],
    queryFn: () => getGiftFn(body),
  });

  useEffect(() => {
    if (queryUser.isSuccess) {
      setBody((prev) => ({ ...prev, code: queryUser.data.data.success.ma_khach_hang }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryUser.isSuccess]);

  return (
    <section className="history_dh_1_0_0">
      <div className="container">
        <div className="history_dh_1_0_0__head">
          <h3 className="history_dh_1_0_0__title">LỊCH SỬ TÍCH ĐIỂM</h3>
          <Link to="/doi-qua" className="history_dh_1_0_0__btn">
            Đổi quà ngay
          </Link>
        </div>
        <div className="history_dh_1_0_0__box">
          <div className="history_dh_1_0_0__company">
            <div className="history_dh_1_0_0__address">
              <h4 className="history_dh_1_0_0__name">SCI GROUP</h4>
              <p className="history_dh_1_0_0__text">Số 93-95 Bạch Mai, Phường Cầu Dền, Hai Bà Trưng, Hà Nội</p>
              <p className="history_dh_1_0_0__text">Email: info@scigroup.com.vn</p>
              <p className="history_dh_1_0_0__text">SĐT: 123456</p>
            </div>
            <div className="history_dh_1_0_0__content">
              {queryUser.isSuccess && (
                <>
                  <p className="history_dh_1_0_0__point">
                    Điểm thưởng: <span>{queryUser.data.data.success.tong_so_diem}</span>
                  </p>
                  <p className="history_dh_1_0_0__date">
                    Ngày tham gia: {new Date(queryUser.data.data.success.created_at).toLocaleDateString('en-GB')}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="history_dh_1_0_0__info">
            <h4 className="history_dh_1_0_0__name">Thông tin tài khoản</h4>
            {queryUser.isSuccess && (
              <>
                <div className="history_dh_1_0_0__item">
                  <div className="history_dh_1_0_0__textLeft">Họ và tên:</div> {queryUser.data.data.success.name}
                </div>
                <div className="history_dh_1_0_0__item">
                  <div className="history_dh_1_0_0__textLeft">Số điện thoại:</div> {queryUser.data.data.success.phone}
                </div>
                <div className="history_dh_1_0_0__item">
                  <div className="history_dh_1_0_0__textLeft">Email:</div> {queryUser.data.data.success.email}
                </div>
                <div className="history_dh_1_0_0__item">
                  <div className="history_dh_1_0_0__textLeft">Địa chỉ:</div> {queryUser.data.data.success.address}
                </div>
              </>
            )}
          </div>
          <div className="history_dh_1_0_0__history">
            <div className="history_dh_1_0_0__tab tabs">
              <p
                className={`history_dh_1_0_0__textTab tab-link ${isShow === 'point' ? 'current' : ''}  `}
                onClick={() => setIsShow('point')}
              >
                Lịch sử tích điểm
              </p>
              <p
                className={`history_dh_1_0_0__textTab tab-link ${isShow === 'gift' ? 'current' : ''}`}
                onClick={() => setIsShow('gift')}
              >
                Lịch sử đổi quà
              </p>
            </div>
            {queryPoint.isSuccess && isShow === 'point' && (
              <Table
                title={['Sản phẩm', 'Mã tích điểm', 'Ngày quét mã']}
                data={queryPoint.data.data}
                keys={['ten_san_pham', 'ma_tich_diem', 'created_at']}
              />
            )}
            {queryGift.isSuccess && isShow === 'gift' && (
              <Table
                title={['Tên phần quà', 'Địa chỉ nhận quà', 'Ngày đổi quà', 'Trạng thái']}
                data={queryGift.data.data}
                keys={['ten_phan_qua', 'dia_chi_nhan_qua', 'created_at', 'trang_thai']}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
