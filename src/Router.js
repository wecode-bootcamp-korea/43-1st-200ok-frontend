import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
import LostAccounts from './pages/LostAccounts/LostAccounts';
import DetailProduct from './pages/DetailProduct/DetailProduct';
import AllProductList from './pages/AllProductList/AllProductList';
import SignUp from './pages/SignUp/SiginUp';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AllProductList />} />
        <Route path="/lostAccounts" element={<LostAccounts />} />
        <Route path="/detailProduct" element={<DetailProduct />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
