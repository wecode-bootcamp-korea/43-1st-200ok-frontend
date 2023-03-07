import React, { useState, useEffect } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import './BestProduct.scss';

const BestProduct = () => {
  const [bestPhoto, setBestPhoto] = useState([]);

  useEffect(() => {
    fetch('./data/Best.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => [setBestPhoto(data)]);
  }, []);

  const woman = () => {
    fetch('./data/Best.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => [setBestPhoto(data)]);
  };

  const men = () => {
    fetch('./data/New.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => [setBestPhoto(data)]);
  };

  return (
    <div className="bestProduct">
      <p className="header">위클리 베스트</p>
      <ul className="tab">
        <li>
          <button type="button" onClick={woman}>
            우먼
          </button>
        </li>
        <li>
          <button type="button" onClick={men}>
            맨
          </button>
        </li>
      </ul>
      <div className="products">
        <ul className="product">
          {bestPhoto.map(item => (
            <ProductForm
              key={item.id}
              id={item.id}
              url={item.url}
              colors={item.colors}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BestProduct;
