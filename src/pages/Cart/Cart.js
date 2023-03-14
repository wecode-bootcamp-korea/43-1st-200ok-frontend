import React, { useEffect, useState } from 'react';
import { CartList } from '../../components/CartList/CartList';
import './Cart.scss';

const Cart = x => {
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // const initData = productList.map(raw=>(raw, checkedState: false));
  // const [isAllChecked, setAllChecked] = useState(false);
  // const [checkedState, setCheckedState] = useState(
  //   new Array(productList.length).fill(false)
  // );

  const toggleSelected = e => {
    const { name } = e.target;
    const next = productList.map(product => {
      if (product.id.toString() === name) {
        return { ...product, checkedState: !product.checkedState };
      }
      return product;
    });
    setProductList(next);
  };

  const onClickAllToggleBtn = () => {
    const isAllChecked = productList.every(({ checkedState }) => checkedState);
    const next = productList.map(product => ({
      ...product,
      checkedState: isAllChecked ? false : true,
    }));
    setProductList(next);
  };

  //선택된 상품 총 결제금액

  useEffect(() => {
    fetch('/data/Cart.json')
      .then(res => res.json())
      .then(data =>
        setProductList(data.map(item => ({ ...item, checkedState: false })))
      );
  }, []);

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
                onChange={onClickAllToggleBtn}
              />
              <label className="cartAllCheck">전체선택</label>
            </div>

            <button className="cartAllDelete">선택상품 삭제</button>
          </div>
          <div className="cartProductInfo">
            <div className="cartCard">
              {productList.map(({ price, id, title, amount, checkedState }) => (
                <CartList
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  amount={amount}
                  productList={productList}
                  setProductList={setProductList}
                  toggleSelected={toggleSelected}
                  checkedState={checkedState}
                />
              ))}
            </div>
            <div className="emptyCartCard">
              <img
                className="emptyCartImg"
                src="images/emptyCart.png"
                alt="emptyimg"
              />
              <div className="emptyMent">장바구니가 비어 있습니다.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cartSumBox">
        <div className="sumList">
          <div className="cartChosenPrice">
            <p className="chosenPriceTitle">총 상품금액</p>
            <p className="chosenPrice">{totalPrice}원</p>
          </div>
          <img className="cartListPlus" src="images/plus.png" alt="plus" />
          <div className="deliveryInSum">
            <p className="payDeliveryTitle">배송비</p>
            <p className="payDeliveryPrice">무료</p>
          </div>
          <img className="cartListPlus" src="images/equal.png" alt="equal" />
          <div className="cartSumPrice">
            <p className="sumPriceTitle">총 결제금액</p>
            <p className="cartFinalSumPrice">{totalPrice}원</p>
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
