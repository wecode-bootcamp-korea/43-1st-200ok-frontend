import React, { useState } from 'react';
import './Cart.scss';
import Count from '../../components/Count/Count';
// import Cartitem from './Cartitem/Cartitem';

const Cart = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState('5000');

  const totalPrice = price * count;

  return (
    <div className="cart">
      <div className="cartHeader">
        <div className="path">
          <span className="pathHome">HOME</span>
          <span className="pathCart">장바구니</span>
        </div>
        <h1 className="cartTitle">장바구니</h1>
      </div>
      <div className="cartList">
        <div className="ListContent">
          <div className="cardHeader">
            <input className="cartAllCheckBox" type="checkbox" />
            <label className="cartAllCheck">전체선택</label>
          </div>
          <div className="cartProductInfo">
            <div className="cartCard">
              <div className="ProductInfo">
                <input type="checkbox" class="cartCheckBox" />
                <img
                  className="productImg"
                  src="images/cartproduct.png"
                  alt="cart.img"
                />
                <div className="productDetail">
                  <strong>포켓 트러커 자켓_SPJKD32G08</strong>
                  <p>[옵션: (10)WHITE/M(90)]</p>
                  <p>옵션변경</p>
                </div>
                <div className="productPrice">
                  <li className="productPriceTxt">상품금액</li>
                  <li className="productOnePrice">{price} 원</li>
                </div>
                <Count count={count} setCount={setCount} />
                <div className="delivery">
                  <li className="deliveryTitle">배송비</li>
                  <li className="deliveryPrice">무료</li>
                </div>
                <div className="cartOneDelete">
                  <button className="deleteButton" type="reset">
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cartSumBox">
        <div className="sumList">
          <div className="cartChosenPrice">
            <p className="chosenPriceTitle">총 상품금액</p>
            <p className="chosenPrice">{totalPrice} 원</p>
          </div>
          <img className="cartListPlus" src="images/plus.png" alt="plus" />
          <div className="deliveryInSum">
            <p className="payDeliveryTitle">배송비</p>
            <p className="payDeliveryPrice">무료</p>
          </div>
          <img className="cartListPlus" src="images/equal.png" alt="equal" />
          <div className="cartSumPrice">
            <p className="sumPriceTitle">총 결제금액</p>
            <p className="sumPrice">{totalPrice} 원</p>
          </div>
        </div>
      </div>
      <div className="payYesOrNo">
        <button className="btnCancelPay">
          <span>쇼핑계속하기</span>
        </button>
        <button className="payButtonAction">
          <span>결제하기</span>
        </button>
        {/* <button
          className={payIsActive ? 'payButtonAction' : 'payButtonInaction'}
          disabled={!payIsActive}
          onClick={goToPay}
        >
          결제하기
        </button> */}
      </div>
    </div>

    //               {PRODUCT_LIST.map(info => (
    //                 <div key={info.id} className="ProductList">
    //                   <div className="cartProductList">
    //                     <div className="productName">이름 : {info.title}</div>
    //                     <div className="productPrice">가격 : {info.price}</div>
  );
};

export default Cart;

const PRODUCT_LIST = [
  {
    id: 1,
    title: '포켓 트러커 자켓_SPJKD32G08',
    price: 500,
  },
  {
    id: 2,
    title: '포켓 트러커 자켓_SPJKD32G08',
    price: 500,
  },
  {
    id: 3,
    title: '포켓 트러커 자켓_SPJKD32G08',
    price: 500,
  },
  {
    id: 4,
    title: '포켓 트러커 자켓_SPJKD32G08',
    price: 500,
  },
  {
    id: 5,
    title: '포켓 트러커 자켓_SPJKD32G08',
    price: 500,
  },
];
