import React, { useState } from 'react';
import './Cart.scss';
import Count from '../../components/Count/Count';
// import Cartitem from './Cartitem/Cartitem';

const Cart = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState('5000원');

  const totalPrice = product.price * count;

  return (
    <div className="cart">
      <div className="cartHeader">
        <div className="path">
          <span className="pathHome">HOME</span>
          <span className="pathCart">장바구니</span>
        </div>
        <h1 className="cartTitle">장바구니</h1>
      </div>
      <div className="infoFirstContent">
        <table summary="상품정보,수량,배송비,합계,선택">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col" />
              <th scope="col">상품정보</th>
              <th scope="col">수량</th>
              <th scope="col">배송비</th>
              <th scope="col">합계</th>
              <th scope="col">선택</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" className="cartCheck" />
              </td>
              <td>
                <a href="https://spao.com/" />
              </td>
              <td>
                <ul>
                  <li>
                    <strong className="cartProductName">
                      포켓 트러커 자켓_SPJKD32G08
                    </strong>
                    <li>[옵션: (10)WHITE/M(90)]</li>
                    <li>옵션변경</li>
                  </li>
                </ul>
              </td>
              <Count count={count} setCount={setCount} />
              <td>
                <p className="cartDeliveryPrice">무료</p>
              </td>
              <td>
                <ul>
                  {PRODUCT_LIST.map(info => (
                    <div key={info.id} className="ProductList">
                      <div className="cartProductList">
                        <div className="productName">이름 : {info.title}</div>
                        <div className="productPrice">가격 : {info.price}</div>
                      </div>
                    </div>
                  ))}
                </ul>
                <p className="cartSumPrice">{totalPrice.toLocaleString()} 원</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;

const PRODUCT_LIST = {
  id: 1,
  title: '자켓',
  price: 500,
  amount: 1,
};
