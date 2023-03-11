import React, { useState } from 'react';
import Count from '../Count/Count';

const CartList = ({
  price,
  title,
  id,
  cart,
  checkedState,
  handleMonoCheck,
}) => {
  const [count, setCount] = useState(1);
  cart({ id: id, total: price * count });
  return (
    <div key={id} className="cartProductInfo">
      <input
        type="checkbox"
        className="cartCheckBox"
        checked={checkedState[id]}
        onChange={() => handleMonoCheck[id]}
      />

      <img
        className="cartProductImg"
        src="images/cartproduct.png"
        alt="cart.img"
      />
      <div className="cartProductDetail">
        <strong>{title}</strong>
        <p>[옵션: (10)WHITE/M(90)]</p>
        <p>옵션변경</p>
      </div>
      <div className="cartProductPrice">
        <p className="productPriceTxt">상품금액</p>
        <p className="productOnePrice">{price * count}원</p>
      </div>
      <Count count={count} setCount={setCount} />
      <div className="cartDelivery">
        <p className="deliveryTitle">배송비</p>
        <p className="cartDeliveryPrice">무료</p>
      </div>
      <div className="cartOneDelete">
        <button className="deleteButton" type="reset">
          X
        </button>
      </div>
    </div>
  );
};

export default CartList;
