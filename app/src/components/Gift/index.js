import { dataGift } from '../../utils/dataProduct';
import ItemGift from '../ItemGift';
import './Gift.scss';

const Gift = () => {
  return (
    <section className="gifts_dh_1_0_0">
      <div className="container">
        <div className="gifts_dh_1_0_0__box">
          {dataGift.map((item, index) => (
            <ItemGift data={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gift;
