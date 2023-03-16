import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import LostAccounts from './pages/LostAccounts/LostAccounts';
import AllProductList from './pages/AllProductList/AllProductList';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/lostAccounts" element={<LostAccounts />} />
        <Route path="/allproductlist" element={<AllProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
