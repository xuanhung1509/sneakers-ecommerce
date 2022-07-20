import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={`h-screen flex flex-col justify-start gap-4 font-KumbhSans ${
        openMenu && 'overflow-y-hidden md:overflow-y-auto'
      }`}
    >
      <Router>
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:categoryName' element={<Category />} />
          <Route path='/:categoryName/:productId' element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/success' element={<Success />} />
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </div>
  );
}
export default App;
