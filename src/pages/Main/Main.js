import React from 'react';
import BestProduct from '../../components/BestProduct/BestProduct';
import NewProduct from '../../components/NewProduct/NewProduct';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="wrap">
        <div className="mainImg">
          <img src="/images/mainSlide1.jpg" alt="반팔 사진" />
          <img src="/images/mainSlide2.jpg" alt="청바지 사진" />
          <img src="/images/mainSlide3,jpg" alt="랩퍼 사진" />
        </div>
        <BestProduct />
        <NewProduct />
      </div>
    </div>
  );
};

export default Main;
