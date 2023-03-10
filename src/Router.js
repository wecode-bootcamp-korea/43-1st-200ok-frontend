import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import LostAccounts from './pages/LostAccounts/LostAccounts';
import SignUp from './pages/SignUp/SiginUp';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lostAccounts" element={<LostAccounts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
