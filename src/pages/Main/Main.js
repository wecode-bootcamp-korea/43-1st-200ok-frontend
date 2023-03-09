import React from 'react';
import BestProduct from '../../components/BestProduct/BestProduct';
import NewProduct from '../../components/NewProduct/NewProduct';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="wrap">
        <div className="mainImg">
          <img src="/images/KakaoTalk_20230303_112042004.jpg" alt="노을 사진" />
          <img src="/images/KakaoTalk_20230309_080951888.jpg" alt="나무 사진" />
        </div>
        <BestProduct />
        <NewProduct />
      </div>
    </div>
  );
};

export default Main;
