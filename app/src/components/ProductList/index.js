import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductList.scss';
import ProductItem from '../ProductItem';

const ProductList = ({ data }) => {
  const settings = {
    slidesPerRow: 3,
  };
  const rows = [];
  let index = 0;
  const column = Math.ceil(data.product.length / 2);
  for (let i = 0; i < column; i++) {
    const dataSlice = data.product.slice(index, (index += 2));
    const item = dataSlice.map((item, index) => <ProductItem key={index} data={item} />);
    rows.push(item);
  }
  return (
    <section className="product_dh_1_0_0">
      <div className="container">
        <div className="product_dh_1_0_0__box">
          <div className="product_dh_1_0_0__head">
            <h2 className="product_dh_1_0_0__title">{data.category}</h2>
            <a href={data.link} className="product_dh_1_0_0__more">
              Xem thêm
            </a>
          </div>
          <div className="product_dh_1_0_0__boxItem">
            <div className="product_dh_1_0_0__boxItemLeft">
              <img width="1583" height="3167" src={`${process.env.PUBLIC_URL}/images/${data.thumbCate}`} alt="" />
            </div>
            <div className="product_dh_1_0_0__boxItemRight">
              <Slider {...settings}>
                {rows.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
