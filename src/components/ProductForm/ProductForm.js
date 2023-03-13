import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ProductForm = ({
  name,
  id,
  image,
  price,
  rate,
  disPrice,
  gender,
  status,
  category,
  index,
}) => {
  const [isHeart, setIsHeart] = useState(true);

  const heartColorChange = () => {
    setIsHeart(!isHeart);
  };
  console.log(index);
  return (
    <li className="productForm">
      <div className="thumb">
        <span className={`num ${!(index < 5) && 'new'}`}>
          {index >= 1 && index < 9 && `${id}`}
        </span>
        <Link
          key={id}
          to={`/detailproduct/${id}`}
          state={{ gender: gender, status: status, category: category }}
          className="images"
        >
          <div className="list">
            <img
              onClick={() => console.log('zzz')}
              className="menu"
              src="/images/menu.png"
              alt="menu"
            />
          </div>
          <img src={image} alt="제품 사진" />
        </Link>
        <div className="description">
          <div className="name">
            <span>{name}</span>
            {isHeart ? (
              <img
                onClick={heartColorChange}
                className="heart"
                src="/images/heart.png"
                alt="heart"
              />
            ) : (
              <img
                onClick={heartColorChange}
                className="heart"
                src="/images/heartPink.png"
                alt="heart"
              />
            )}
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
          <div className="colors">
            <span className="color" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductForm;
