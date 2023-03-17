import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ProductForm = ({ num, gender, status, category, productid, item }) => {
  const [isHeart, setIsHeart] = useState(true);

  const heartColorChange = () => {
    setIsHeart(isHeart => !isHeart);
  };

  const floorPrice = price => {
    return Math.floor(price).toLocaleString();
  };

  const {
    id,
    name,
    image_url,
    price,
    discount_rate,
    discounted_price,
    colors,
  } = item;

  return (
    <li className="productForm">
      <div className="thumb">
        <span className={`num ${!(num < 5) && 'new'}`}>
          {num >= 1 && num < 9 && `${num}`}
        </span>
        <Link
          key={id}
          to={`/detailproduct/${id}`}
          state={{
            gender,
            status,
            category,
            productid,
          }}
          className="images"
        >
          <div className="list">
            <img className="menu" src="/images/menu.png" alt="menu" />
          </div>
          <img src={image_url} alt="제품 사진" />
        </Link>
        <div className="description">
          <div className="name">
            <span>{name}</span>
            <img
              onClick={heartColorChange}
              className="heart"
              src={isHeart ? '/images/heart.png' : '/images/heartPink.png'}
              alt="heart"
            />
          </div>
          {discount_rate ? (
            <div className="price">
              {floorPrice(discounted_price)}
              <span className="originalPrice">{floorPrice(price)}</span>
              <span className="rateDiscount">{`${discount_rate}%`}</span>
            </div>
          ) : (
            <div className="price">{floorPrice(discounted_price)}</div>
          )}
          <div className="colors">
            {colors.map(item => (
              <span
                key={item}
                className="color"
                style={{ backgroundColor: `${item}` }}
              />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductForm;
