import React, { useEffect, useState } from 'react';
import { APIS } from '../../comfig';
import './CartList.scss';

export const CartList = ({
  id,
  img,
  title,
  price,
  amount,
  checkedState,
  color,
  size,
  token,
  totalPrice,
  setTotalPrice,
  productList,
  setProductList,
  toggleSelected,
}) => {
  const [count, setCount] = useState(amount);
  const typeChange = Number(price);

  //체크된것만 결제금액에 포함
  useEffect(() => {
    if (checkedState) {
      setTotalPrice(prev => prev + count * price);
    } else if (!checkedState && totalPrice !== 0) {
      setTotalPrice(prev => prev - count * price);
    }
  }, [checkedState]);

  const handleDeleteItem = () => {
    fetch(`${APIS.cart}/delete?token=${token}&cartId=${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(productList.filter(item => item.cartId !== id));
        setTotalPrice(prev => (prev -= typeChange * count));
      });
  };

  const handlePrice = e => {
    const { name } = e.target;
    if (checkedState && name === 'plus' && count < 10) {
      setCount(count => count + 1);
      setTotalPrice(prev => prev + typeChange);
    } else if (checkedState && name === 'minus' && count > 1) {
      setCount(count => count - 1);
      setTotalPrice(prev => prev - typeChange);
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

      <img className="cartProductImg" src={img} alt="cart.img" />
      <div className="cartProductDetail">
        <strong className="cartProductTitle">{title}</strong>
        <p>
          [color: {color.toUpperCase()} | size: {size.toUpperCase()}]
        </p>
      </div>
      <div className="cartProductPrice">
        <p className="productPriceTxt">상품금액</p>
        <p className="productOnePrice">
          {Math.floor(price).toLocaleString()}원
        </p>
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
        <p className="onePrice">{(typeChange * count).toLocaleString()}원</p>
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
