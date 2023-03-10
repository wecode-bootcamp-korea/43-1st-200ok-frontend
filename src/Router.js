import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SiginUp/SiginUp';
import LostAccounts from './pages/LostAccounts/LostAccount';
import AllProductList from './pages/AllProductList/AllProductList';
import DetailProduct from './pages/DetailProduct/DetailProduct';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lostAccounts" element={<LostAccounts />} />
        <Route path="/allproductlist" element={<AllProductList />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
