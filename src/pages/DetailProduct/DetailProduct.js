import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DetailProduct.scss';

const DetailProduct = () => {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [isImages, setIsImages] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const colorHeart = 'images/colorheart.png';

  const handleSelector = () => {
    // console.log(color);
    console.log(setColor);
  };

  const onClickWishImg = () => {
    setTimeout(() => {
      alert('wish 리스트에 추가하였습니다.');
      console.log('하트버튼 클릭');
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

  const oderValidation = () => {
    if (token) {
      alert('구매완료');
    } else {
      alert('로그인 해주세요');
      navigate('/login');
    }
  };

  useEffect(() => {
    fetch('/data/colorList.json')
      .then(res => res.json())
      .then(data => {
        setColor(data);
      });
  }, [params.index]);

  useEffect(() => {
    fetch('/data/sizeList.json')
      .then(res => res.json())
      .then(data => {
        setSize(data);
      });
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
        <div className="productName">[남성 아우터 패딩]</div>
        <div className="priceArea">
          <div className="priceArea1">제품 가격 :</div>
          <div className="priceArea2">50,000 원</div>
          <div className="priceArea3">할인 가격 :</div>
          <div className="priceArea4">45,000 원 (10%)</div>
        </div>
        <div className="countInput">
          <button
            className="minusButton"
            type="button"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -1
          </button>
          <div className={`productCount${count}`}>수량 : {count}</div>
          <button
            className="plusButton"
            type="button"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +1
          </button>
        </div>
        <div className="productColor">
          <p>[Color]</p>
          {color.map(productColors => {
            return (
              <button
                className="productColor1"
                key={productColors.id}
                onClick={handleSelector}
                value={productColors}
              >
                {productColors.color}
              </button>
            );
          })}
        </div>
        <div className="productSize">
          <p>[Size]</p>
          {size.map(productSizes => {
            return (
              <button className="productSize1" key={productSizes.id}>
                {productSizes.size}
              </button>
            );
          })}
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
