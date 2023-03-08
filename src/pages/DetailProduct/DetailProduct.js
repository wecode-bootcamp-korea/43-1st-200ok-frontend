import React from 'react';
import './DetailProduct.scss';

const DetailProduct = () => {
  return (
    <div className="detailProduct">
      <header />
      <nav />
      <div className="detailProductArea">
        <span>
          <section className="productInfo">
            <div>
              <div>상세페이지</div>
              <img src="/images/ziozia_sample.jpg" alt="제품 이미지" />
            </div>
          </section>
        </span>
        <span>
          <aside className="infoArea">
            <div>제품 설명</div>
            <li>수량</li>
          </aside>
        </span>
      </div>
    </div>
  );
};

export default DetailProduct;
