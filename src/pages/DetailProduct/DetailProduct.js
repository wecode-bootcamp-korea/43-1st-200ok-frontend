import React from 'react';
import './DetailProduct.scss';

const DetailProduct = () => {
  return (
    <div className="detailProduct">
      <header />
      <nav />
      <div className="detailProductArea">
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
          <div className="productName">[제품명 | 제품코드]</div>
          <div className="productPrice">제품 가격(50,000 원)</div>
          <div className="productCount">(-) 제품 수량 (+)</div>
          <div className="productColor">
            <p>[색상 선택]</p>
            <button className="productColor1">red</button>
            <button className="productColor2">blue</button>
            <button className="productColor3">green</button>
            <button className="productColor4">yellowgreen</button>
          </div>
          <div className="productSize">
            <p>[사이즈 선택]</p>
            <button className="productSize1">95</button>
            <button className="productSize2">100</button>
            <button className="productSize3">105</button>
            <button className="productSize4">110</button>
          </div>
          <div className="sumPrice">
            <p>[총 제품금액]</p>
            <div>(100,000 원)</div>
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
      <footer />
    </div>
  );
};

export default DetailProduct;
