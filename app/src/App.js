import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScreenHome from './screens/ScreenHome';
import ScreenRule from './screens/ScreenRule';
import ScreenTerms from './screens/ScreenTerms';
import ScreenPolicy from './screens/ScreenPolicy';
import ScreenHistory from './screens/ScreenHistory';
import ScreenGift from './screens/ScreenGift';
import ScreenPoint from './screens/ScreenPoint';
import ScreenLogin from './screens/ScreenLogin';
import ScreenRegister from './screens/ScreenRegister';
import PageNotFound from './screens/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ScreenHome />} />
        <Route path="/dang-nhap" element={<ScreenLogin />} />
        <Route path="/dang-ky" element={<ScreenRegister />} />
        <Route path="/the-le" element={<ScreenRule />} />
        <Route path="/dieu-khoan-su-dung" element={<ScreenTerms />} />
        <Route path="/chinh-sach-bao-mat" element={<ScreenPolicy />} />
        <Route path="/lich-su-doi-qua" element={<ScreenHistory />} />
        <Route path="/doi-qua" element={<ScreenGift />} />
        <Route path="/doi-diem/:productName/:point" element={<ScreenPoint />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
