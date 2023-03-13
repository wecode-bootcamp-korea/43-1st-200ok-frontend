import React, { useState, useEffect } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import './BestProduct.scss';

const BestProduct = () => {
  const [bestPhoto, setBestPhoto] = useState([]);
  const [gender, setGender] = useState('female');
  const status = 'best';

  //백 연동 용
  useEffect(() => {
    fetch(`http://10.58.52.75:3010/products?gender=${gender}&status=${status}`)
      .then(res => res.json())
      .then(data => setBestPhoto(data.data));
  }, [gender]);

  const woman = () => {
    setGender('female');
  };

  const man = () => {
    setGender('male');
  };

  // useEffect(() => {
  //   fetch(`/data/Man.json`)
  //     .then(res => res.json())
  //     .then(data => setBestPhoto(data));
  // }, [setGender]);

  // const woman = () => {
  //   fetch(`/data/Man.json/gender=${gender}&status=${status}`)
  //     .then(res => res.json())
  //     .then(data => setBestPhoto(data));
  //   setGender('male');
  // };

  // const man = () => {
  //   fetch(`/data/Man.json/gender=${gender}&status=${status}`)
  //     .then(res => res.json())
  //     .then(data => setBestPhoto(data));
  //   setGender('female');
  // };
  console.log(bestPhoto);
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
          <button type="button" onClick={man}>
            맨
          </button>
        </li>
      </ul>
      <div className="products">
        <ul className="product">
          {bestPhoto &&
            bestPhoto.map(
              (item, index) =>
                index > 0 &&
                index <= 8 && (
                  <ProductForm
                    key={item.id}
                    id={item.id}
                    num={index}
                    name={item.name}
                    image={item.image_url}
                    price={item.price}
                    rate={item.discount_rate}
                    disPrice={item.discounted_price}
                    gender={gender}
                    status={status}
                  />
                )
            )}
        </ul>
      </div>
    </div>
  );
};
export default BestProduct;
