import React from 'react';
import { Link } from 'react-router-dom';
const ProductForm = ({ name, id, image, price, rate, disPrice }) => {
  return (
    <li className="productForm">
      <div className="thumb">
        <span className={id < 5 ? 'num' : 'num new'}>
          {id >= 1 && id < 9 && `${id}`}
        </span>
        <div className="images">
          <div className="list">
            <Link>
              <img className="menu" src="/images/menu.png" alt="menu" />
            </Link>
          </div>
          <Link href="#!">
            <img src={`${image}`} alt="" />
          </Link>
        </div>
        <div className="description">
          <div className="name">
            <span>{name}</span>
            <img className="heart" src="/images/heart.png" alt="heart" />
          </div>
          <p className="price">
            {disPrice}
            <span className="originalPrice">&nbsp;{price}</span>&nbsp;
            <span className="rateDiscount">{`${rate}%`}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default ProductForm;
