import './ProductItem.scss';

const ProductItem = ({ data }) => {
  return (
    <div className="product_dh_1_0_0__item">
      <div className="product_dh_1_0_0__picPro">
        <img width="500" height="500" src={`${process.env.PUBLIC_URL}/images/${data.thumbProduct}`} alt="" />
      </div>
      <h4 className="product_dh_1_0_0__name">{data.name}</h4>
      <a href={data.link} className="product_dh_1_0_0__action">
        Mua sản phẩm
      </a>
    </div>
  );
};

export default ProductItem;
