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
  const { gender, status, category } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const [isImages, setIsImages] = useState(true);

  const token = localStorage.getItem('token');
  const colorHeart = '/images/colorheart.png';
  console.log(colorHeart);
  const oderValidation = () => {
    if (token) {
      alert('구매완료');
    } else {
      alert('로그인 해주세요');
      navigate('/login');
    }
  };

  const onClickWishImg = () => {
    setTimeout(() => {
      alert('wish 리스트에 추가하였습니다.');
    }, 100);
    return setIsImages(false);
  };

  const onClickAddCart = () => {
    if (token) {
      alert('장바구니에 추가하였습니다.');
    } else {
      alert('로그인 해주세요');
    }
  };

  useEffect(() => {
    fetch(
      `http://10.58.52.75:3010/products?gender=${gender}&status=${status}&id=${id}`
    )
      .then(res => res.json())
      .then(data => setUser(data.data));
  }, [id]);

  console.log(user);
  return (
    <div className="detailProduct">
      <section className="productInfo">
        <div className="imgWrapper">
          <img
            className="productImg"
            src={user && user[0].image_url}
            alt="제품 이미지"
          />
        </div>
      </section>
      <aside className="infoArea">
        <div className="productName">{user && user[0].name}</div>
        <div className="priceArea">
          {user && user[0].discount_rate ? (
            <>
              <div className="priceArea1">제품 가격 :</div>
              <div className="priceArea2">
                {Math.floor(user[0].price).toLocaleString()} 원
              </div>
              <div className="priceArea3">할인 가격 :</div>
              <div className="priceArea4">
                {Math.floor(user[0].discounted_price).toLocaleString()} 원 (
                {user && user[0].discount_rate}%)
              </div>
            </>
          ) : (
            ''
          )}
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
          {/* <Count count={count} setCount={setCount} /> */}
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
              src={isImages ? '/images/heart.png' : `${colorHeart}`}
              alt="wish 이미지"
              onClick={onClickWishImg}
            />
          </button>
          <button className="cartButton" onClick={onClickAddCart}>
            장바구니 담기
          </button>
          <button className="orderButton" onClick={oderValidation}>
            주문하기
          </button>
        </div>
      </aside>
    </div>
  );
};

export default DetailProduct;
