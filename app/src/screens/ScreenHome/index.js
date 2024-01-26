import Benefit from '../../components/Benefit';
import Intro from '../../components/Intro';
import Image from '../../components/Image';
import DefaultLayout from '../../layouts/DefaultLayout';
import Carousel from '../../components/Slider';
import ProductList from '../../components/ProductList';
import { dataProduct } from '../../utils/dataProduct';

const ScreenHome = () => {
  return (
    <DefaultLayout>
      <Carousel />
      <Benefit />
      <Intro />
      {dataProduct.map((item) => (
        <ProductList key={item.category} data={item} />
      ))}

      <Image />
    </DefaultLayout>
  );
};

export default ScreenHome;
