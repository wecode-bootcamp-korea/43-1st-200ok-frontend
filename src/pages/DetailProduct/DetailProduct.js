import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// import Count from '../../components/Count/Count';
import './DetailProduct.scss';

const DetailProduct = () => {
  const [count, setCount] = useState(1);
  let colorData = ['red', 'blue', 'green', 'purple'];
  let sizeData = [95, 100, 105, 110];

  return (
    <div className="detailProduct">
      <section className="productInfo">
        <div>
          <span>
            <img
              className="productImg"
              src="/images/ziozia_sample.jpg"
              alt="제품 이미지"
            />
          </span>
        </div>
      </section>
      <aside className="infoArea">
        <div className="productName">
          [램스울100 라운드넥 스웨터 | C,M_SPKWD23U99]
        </div>
        <div className="priceArea">
          <div className="priceArea1">제품 가격 :</div>
          <div className="priceArea2">50,000 원</div>
          <div className="priceArea3">할인 가격 :</div>
          <div className="priceArea4">45,000 원 (10%)</div>
        </div>
        <div className="countInput">
          제품 수량 (주석처리 확인)
          {/* <Count count={count} setCount={setCount} /> */}
        </div>
        <div className="productColor">
          <p>[Color]</p>
          <div>
            {colorData.map((item, index) => {
              return <button>{item}</button>;
            })}
          </div>
          {/* <button className="productColor1">red</button>
          <button className="productColor2">blue</button>
          <button className="productColor3">green</button>
          <button className="productColor4">purple</button> */}
        </div>
        <div className="productSize">
          <p>[Size]</p>
          <div>
            {sizeData.map((item, index) => {
              return <button>{item}</button>;
            })}
          </div>
          {/* <button className="productSize1">95</button>
          <button className="productSize2">100</button>
          <button className="productSize3">105</button>
          <button className="productSize4">110</button> */}
        </div>
        <div className="sumPrice">
          <p>총 제품금액 : (100,000 원)</p>
        </div>
        <div className="buttons">
          <button>
            <img
              className="wishImg"
              src="/images/heart.png"
              alt="wish 이미지"
            />
          </button>
          <button className="cartButton">장바구니 담기</button>
          <button className="orderButton">주문하기</button>
        </div>
      </aside>
    </div>
  );
};

export default DetailProduct;
