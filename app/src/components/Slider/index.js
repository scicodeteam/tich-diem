import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';

const Carousel = () => {
  const settings = {
    dots: true,
    autoplay: true,
  };

  return (
    <section className="slider_dh_1_0_0">
      <div className="container">
        <div className="slider_dh_1_0_0__box">
          <div className="slider_dh_1_0_0__boxLeft">
            <Slider {...settings}>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/slider1.jpg`} alt="" />
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/slider2.jpg`} alt="" />
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/slider3.jpg`} alt="" />
              </div>
            </Slider>
          </div>
          <div className="slider_dh_1_0_0__boxRight">
            <div className="slider_dh_1_0_0__item">
              <img src={`${process.env.PUBLIC_URL}/images/banner1.png`} alt="" />
            </div>
            <div className="slider_dh_1_0_0__item">
              <img src={`${process.env.PUBLIC_URL}/images/banner2.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
