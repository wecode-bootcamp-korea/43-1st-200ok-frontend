import React from 'react';
import { Link } from 'react-router-dom';
const ProductForm = ({ name, id, image, price, rate, disPrice }) => {
  return (
    <li className="productForm">
      <div className="thumb">
        <span className={`num ${!(id < 5) && 'new'}`}>
          {id >= 1 && id < 9 && `${id}`}
        </span>
        <div className="images">
          <div className="list">
            <Link>
              <img className="menu" src="/images/menu.png" alt="menu" />
            </Link>
          </div>
          <Link href="#!">
            <img src={image} alt="제품 사진" />
          </Link>
        </div>
        <div className="description">
          <div className="name">
            <span>{name}</span>
            <img className="heart" src="/images/heart.png" alt="heart" />
          </div>
          {rate ? (
            <div className="price">
              {Math.floor(disPrice).toLocaleString()}
              <span className="originalPrice">
                {Math.floor(price).toLocaleString()}
              </span>
              <span className="rateDiscount">{`${rate}%`}</span>
            </div>
          ) : (
            <div className="price">{Math.floor(disPrice).toLocaleString()}</div>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductForm;
