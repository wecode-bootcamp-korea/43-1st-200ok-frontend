import React from 'react';
import { Link } from 'react-router-dom';
const ProductForm = ({ id, url, colors }) => {
  return (
    <li className="productForm">
      <div className="thumb">
        <span className={id < 5 ? 'num' : 'num new'}>{`${id}`}</span>
        <div className="images">
          <div className="list">
            <Link>
              <img className="menu" src="/images/menu.png" alt="menu" />
            </Link>
          </div>
          <Link href="#!">
            <img src={`${url}`} alt="" />
          </Link>
        </div>
        <div className="description">
          <div className="name">
            <span>파스텔 푸퍼 (SPJPC4TG01 RE)_SPJPD11G01</span>
            <img className="heart" src="/images/heart.png" alt="heart" />
          </div>
          <p className="price">
            39,900 <span className="originalPrice">&nbsp;원래 가격</span>&nbsp;
            <span className="rateDiscount">할인%</span>
          </p>
          <div className="colors">
            {colors.map(item => (
              <span key={item} className={`color ${item}`} />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductForm;
