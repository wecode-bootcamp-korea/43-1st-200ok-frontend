import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate, useParams } from 'react-router-dom';
import Count from '../../components/Count/Count';
import './DetailProduct.scss';

const DetailProduct = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [user, setUser] = useState();
  const params = useParams();
  const { id } = params;
  const location = useLocation();
  const { gender, status } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    fetch(
      `http://10.58.52.75:3010/products?gender=${gender}&status=${status}&id=${id}`
    )
      .then(res => res.json())
      .then(data => setUser(data.data));
  }, [id]);

  const token = localStorage.getItem('token');

  const oderValidation = () => {
    if (token) {
      alert('구매완료');
    } else {
      alert('로그인 해주세요');
      navigate('/login');
    }
  };

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
        <div className="productName">{user.name}</div>
        <div className="priceArea">
          <div className="priceArea1">제품 가격 :</div>
          <div className="priceArea2">50,000 원</div>
          <div className="priceArea3">할인 가격 :</div>
          <div className="priceArea4">45,000 원 (10%)</div>
        </div>
        <div className="countInput">
          {/* <button
            className="minusButton"
            type="button"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -1
          </button> */}
          {/* <div className={`productCount${count}`}>수량 : {count}</div> */}
          <Count count={count} setCount={setCount} />
          {/* <button
            className="plusButton"
            type="button"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +1
          </button> */}
        </div>
        <div className="productColor">
          <p>[Color]</p>
          <button className="productColor1">red</button>
          <button className="productColor2">blue</button>
          <button className="productColor3">green</button>
          <button className="productColor4">purple</button>
        </div>
        <div className="productSize">
          <p>[Size]</p>
          <button className="productSize1">95</button>
          <button className="productSize2">100</button>
          <button className="productSize3">105</button>
          <button className="productSize4">110</button>
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
          <button className="orderButton" onClick={oderValidation}>
            주문하기
          </button>
        </div>
      </aside>
    </div>
  );
};

export default DetailProduct;
