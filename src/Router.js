import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import LostAccounts from './pages/LostAccounts/LostAccouts';
import SignUpTerms from './pages/SignUp/SignUpTerms';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lostAccounts" element={<LostAccounts />} />
        <Route path="/signupterms" element={<SignUpTerms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
