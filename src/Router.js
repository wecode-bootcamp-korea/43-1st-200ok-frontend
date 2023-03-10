import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SiginUp/SiginUp';
import LostAccounts from './pages/LostAccounts/LostAccount';
import Footer from './components/Footer/Footer';
import DetailProduct from './pages/DetailProduct/DetailProduct';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lostAccounts" element={<LostAccounts />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
