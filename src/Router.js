import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
<<<<<<< HEAD
<<<<<<< HEAD
import SignUp from './pages/SignUp/SignUp';
import LostAccounts from './pages/LostAccounts/LostAccouts';
import SignUpTerms from './pages/SignUp/SignUpTerms';
=======
import SignUp from './pages/SiginUp/SiginUp';
import Nav from './components/Nav/Nav';
>>>>>>> 1278ea023b04f15a782f6e5f92295e9e4e59a468
=======
import SignUp from './pages/SignUp/SiginUp';
import Footer from './components/Footer/Footer';
>>>>>>> e4f51e1e53ddc7b9f0daa1df52a6849b90ca7b60

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lostAccounts" element={<LostAccounts />} />
        <Route path="/signupterms" element={<SignUpTerms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
