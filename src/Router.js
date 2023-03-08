import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import AllProductList from './pages/AllProductList/AllProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/" element={<AllProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
