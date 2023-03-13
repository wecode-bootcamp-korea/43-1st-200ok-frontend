import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DetailProduct.scss';

const DetailProduct = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState();
  const [isImages, setIsImages] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const colorHeart = 'images/colorheart.png';

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
    fetch(`./data/Man.json/${params.index}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [params.index]);

  return (
    <div className="detailProduct">
      <section className="productInfo">
        <div className="imgWrapper">
          <img
            className="productImg"
            src="/images/ziozia_sample.jpg"
            alt="제품 이미지"
          />
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
              src={isImages ? 'images/heart.png' : `${colorHeart}`}
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
