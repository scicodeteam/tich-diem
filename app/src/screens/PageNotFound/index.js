import { Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

const PageNotFound = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <h1>404</h1>
        <Link to="/">Trang chủ</Link>
      </div>
    </DefaultLayout>
  );
};

export default PageNotFound;
