import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import DetailProduct from './pages/DetailProduct/DetailProduct';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
