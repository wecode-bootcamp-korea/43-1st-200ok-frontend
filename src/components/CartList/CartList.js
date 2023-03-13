import React, { useEffect, useState } from 'react';
import './CartList.scss';

export const CartList = ({
  id,
  title,
  price,
  Cart,
  setTotalPrice,
  productList,
  setProductList,
  checkedState,
  handleMonoCheck,
  stock,
}) => {
  const [count, setCount] = useState(stock);

  useEffect(() => {
    setTotalPrice(prev => (prev += price * count));
  }, []);

  const handlePrice = e => {
    const { name } = e.target;

    if (name === 'plus') {
      setCount(count + 1);
      setTotalPrice(prev => prev + price);
    } else {
      setCount(count - 1);
      if (count > 1) {
        setTotalPrice(prev => prev - price);
      }
    }
  };

  const handleRemoveProduct = () => {
    setProductList(productList.filter(item => item.id !== id));
  };
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
        <p className="onePrice">{price}원</p>
      </div>
      <div className="cartOneDelete">
        <button
          className="deleteButton"
          type="reset"
          onClick={handleRemoveProduct}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartList;
