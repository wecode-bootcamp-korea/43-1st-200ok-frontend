import React, { useEffect, useState } from 'react';
import CartList from '../../components/CartList/CartList';
import './Cart.scss';

const Cart = x => {
  useEffect(() => {
    fetch('/data/Cart.json')
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);
  const [cart, setCart] = useState([]);
  const [isAllChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(cart.length).fill(false)
  );

  // console.log(x);
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

  const handleAllCheck = () => {
    setAllChecked(prev => !prev);
    let array = new Array(cart.length).fill(!isAllChecked);
    setCheckedState(array);
  };
  return (
    <div className="cart">
      <div className="cartHeader">
        <div className="cartPath">
          <span className="pathHome">HOME</span>
          <span className="pathCart">장바구니</span>
        </div>
        <h1 className="cartTitle">장바구니</h1>
      </div>
      <div className="cartList">
        <div className="listContent">
          <div className="cardHeader">
            <div className="allCheckBox">
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
              {cart.map(({ price, id, title }) => (
                <CartList
                  key={id}
                  price={price}
                  id={id}
                  title={title}
                  cart={Cart}
                  checkedState={checkedState}
                  handleMonoCheck={handleMonoCheck}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="cartSumBox">
        <div className="sumList">
          <div className="cartChosenPrice">
            <p className="chosenPriceTitle">총 상품금액</p>
            <p className="chosenPrice">원</p>
          </div>
          <img className="cartListPlus" src="images/plus.png" alt="plus" />
          <div className="deliveryInSum">
            <p className="payDeliveryTitle">배송비</p>
            <p className="payDeliveryPrice">무료</p>
          </div>
          <img className="cartListPlus" src="images/equal.png" alt="equal" />
          <div className="cartSumPrice">
            <p className="sumPriceTitle">총 결제금액</p>
            <p className="cartsumPrice"> 원</p>
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
