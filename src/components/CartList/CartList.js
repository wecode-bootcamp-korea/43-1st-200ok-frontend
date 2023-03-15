import React, { useEffect, useState } from 'react';
import './CartList.scss';

export const CartList = ({
  id,
  title,
  price,
  totalPrice,
  setTotalPrice,
  productList,
  setProductList,
  checkedState,
  toggleSelected,
}) => {
  const [count, setCount] = useState(1);

  //체크된것만 결제금액에 포함
  useEffect(() => {
    if (checkedState) {
      setTotalPrice(prev => prev + count * price);
    } else if (!checkedState && totalPrice !== 0) {
      setTotalPrice(prev => prev - count * price);
    }
  }, [checkedState]);

  const handleDeleteItem = () => {
    setTotalPrice(prev => (prev -= price * count));
    setProductList(productList.filter(item => item.id !== id));
  };

  const handlePrice = e => {
    const { name } = e.target;

    if (checkedState && name === 'plus' && count < 10) {
      setCount(count => count + 1);
      setTotalPrice(prev => prev + price);
    } else if (checkedState && name === 'minus' && count > 1) {
      setCount(count => count - 1);
      setTotalPrice(prev => prev - price);
    }
  };

  return (
    <div key={id} className="cartProductInfo">
      <input
        type="checkbox"
        className="cartCheckBox"
        name={id}
        checked={checkedState}
        onChange={toggleSelected}
      />

      <img
        className="cartProductImg"
        src="images/cartproduct.png"
        alt="cart.img"
      />
      <div className="cartProductDetail">
        <strong className="cartProductTitle">{title}</strong>
        <p>[옵션: (10)WHITE/M(90)]</p>
        {/* <p>옵션변경</p> */}
      </div>
      <div className="cartProductPrice">
        <p className="productPriceTxt">상품금액</p>
        <p className="productOnePrice">{price}원</p>
      </div>
      <div className="count">
        <div className="countInput">
          <button className="countButton" name="minus" onClick={handlePrice}>
            –
          </button>
          <span className="countInputText">{count}</span>
          <button className="countButton" name="plus" onClick={handlePrice}>
            +
          </button>
        </div>
      </div>
      <div className="cartDelivery">
        <p className="deliveryTitle">배송비</p>
        <p className="cartDeliveryPrice">무료</p>
      </div>
      <div className="oneProductSumPrice">
        <p className="oneProductSumPriceTxt">총 상품금액</p>
        <p className="onePrice">{price * count}원</p>
      </div>
      <div className="cartOneDelete">
        <button
          className="deleteButton"
          type="reset"
          onClick={handleDeleteItem}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartList;
