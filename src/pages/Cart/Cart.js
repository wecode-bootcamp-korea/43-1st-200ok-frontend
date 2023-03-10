import React, { useState } from 'react';
import './Cart.scss';
import Count from '../../components/Count/Count';
import CartList from '../../components/CartList/CartList';

const Cart = props => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState('5000');
  const totalPrice = price * count;
  const [isAllChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(2).fill(false));
  const [saveOrder, setSaveOrder] = useState([]);
  const [productList, setProductList] = useState([]);

  const handleDeleteSelected = () => {
    const selectedProductIds = isAllChecked;
    setProductList(prevProducts =>
      prevProducts.filter(
        product => !selectedProductIds.includes(product.cartId)
      )
    );
    setAllChecked([]);
  };

  const handleAllCheck = () => {
    setAllChecked(prev => !prev);
    let array = new Array(2).fill(!isAllChecked);
    setCheckedState(array);
  };

  const handleMonoCheck = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const checkedLength = updatedCheckedState.reduce((sum, currentState) => {
      if (currentState === true) {
        return sum + 1;
      }
      return sum;
    }, 0);
    setAllChecked(checkedLength === updatedCheckedState.length);
  };

  const deleteProduct = item => {
    setSaveOrder(
      saveOrder.filter(item => {
        return item.id !== item.id;
      })
    );
  };
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
            <div className="AllCheckBox">
              <input
                className="cartAllCheckBox"
                type="checkbox"
                checked={isAllChecked}
                onChange={() => handleAllCheck()}
              />
              <label className="cartAllCheck">전체선택</label>
            </div>

            <button className="cartAllDelete">선택상품 삭제</button>
          </div>
          <div className="cartProductInfo">
            <div className="cartCard">
              <div className="ProductInfo">
                <input
                  type="checkbox"
                  class="cartCheckBox"
                  checked={checkedState[1]}
                  onChange={() => handleMonoCheck(1)}
                />
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

// const deleteComment = item => {
//   setSaveComment(
//     saveComment.filter(items => {
//       return items.id !== item.id;
//     })
//   );
//   setNumberComments(numberComments - 1);
//   return item.up === true ? setNumberLike(numberlike - 1) : '';
// };

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
];
