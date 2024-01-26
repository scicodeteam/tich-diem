import './Image.scss';

const Image = () => {
  return (
    <section className="images_dh_1_0_0">
      <div className="container">
        <div className="images_dh_1_0_0__box">
          <div className="images_dh_1_0_0__pic">
            <img width="596" height="847" src={`${process.env.PUBLIC_URL}/images/img1.png`} alt="" />
          </div>
          <div className="images_dh_1_0_0__pic">
            <img width="596" height="847" src={`${process.env.PUBLIC_URL}/images/img2.png`} alt="" />
          </div>
          <div className="images_dh_1_0_0__pic">
            <img width="596" height="847" src={`${process.env.PUBLIC_URL}/images/img3.png`} alt="" />
          </div>
          <div className="images_dh_1_0_0__pic">
            <img width="596" height="847" src={`${process.env.PUBLIC_URL}/images/img4.png`} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Image;
