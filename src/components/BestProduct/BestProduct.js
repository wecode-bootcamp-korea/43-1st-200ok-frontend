import React, { useState, useEffect } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import './BestProduct.scss';

const BestProduct = () => {
  const [bestPhoto, setBestPhoto] = useState([]);
  const [gender, setGender] = useState('female');
  const status = 'best';
  const category = 'blank';
  const productid = 'blank';
  const btnDesign = gender === 'female';

  const clickWoman = () => {
    setGender('female');
  };

  const clickMan = () => {
    setGender('male');
  };

  //백 연동 용
  useEffect(() => {
    fetch(
      `http://10.58.52.184:3010/products?gender=${gender}&status=${status}&category=${category}&id=${productid}`
    )
      .then(res => res.json())
      .then(data => setBestPhoto(data.data));
  }, [gender]);

  return (
    <div className="bestProduct">
      <p className="header">위클리 베스트</p>
      <ul className="tab">
        <li>
          <button
            type="button"
            onClick={clickWoman}
            className={btnDesign ? 'on' : ''}
          >
            우먼
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={clickMan}
            className={btnDesign ? '' : 'on'}
          >
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
                    item={item}
                    num={index}
                    gender={gender}
                    status={status}
                    category={category}
                    productid={productid}
                  />
                )
            )}
        </ul>
      </div>
    </div>
  );
};
export default BestProduct;
