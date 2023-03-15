import React from 'react';
import './EmptyCart.scss';

const EmptyCart = () => {
  return (
    <div className="emptyCart">
      <div className="emptyCartCard">
        <img
          className="emptyCartImg"
          src="images/emptyCart.png"
          alt="emptyimg"
        />
        <div className="emptyMent">&nbsp;&nbsp;장바구니가 비어 있어요!</div>
        <p className="emptySubMent">장바구니를 채워주세요.</p>
      </div>
    </div>
  );
};

export default EmptyCart;
