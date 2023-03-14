import React, { useState } from 'react';
import BestProduct from '../../components/BestProduct/BestProduct';
import NewProduct from '../../components/NewProduct/NewProduct';
import './Main.scss';

const Main = () => {
  const [mainImg, setMainImg] = useState(0);
  const bbb = () => {
    if (mainImg < MAINIMAGES.length - 1 && mainImg >= 0) {
      setMainImg(mainImg => mainImg + 1);
    } else if (mainImg === MAINIMAGES.length - 1) {
      setMainImg(0);
    }
  };

  setInterval(bbb, 6000);

  return (
    <div className="main">
      <div className="wrap">
        <div className="mainImg">
          {MAINIMAGES.map(({ id, img, infor }) => (
            <img
              key={id}
              src={img}
              alt={infor}
              style={{
                transform: `translate(${mainImg * -1920}px)`,
                transition: `2s`,
              }}
            />
          ))}
        </div>
        <BestProduct />
        <NewProduct />
      </div>
    </div>
  );
};

export default Main;

const MAINIMAGES = [
  { id: 1, img: '/images/mainSlide1.jpg', infor: '반팔 사진' },
  { id: 2, img: '/images/mainSlide2.jpg', infor: '청바지 사진' },
  { id: 3, img: '/images/mainSlide3.jpg', infor: '랩퍼 사진' },
];
