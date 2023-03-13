import React, { useState, useEffect } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import './NewProduct.scss';
const NewProduct = () => {
  const [newPhoto, setNewPhoto] = useState([]);
  const [newPhotoCount, setNewPhotoCount] = useState(0);
  const gender = 'malefemale';
  const status = 'new';

  //백엔드 연동
  useEffect(() => {
    fetch(`http://10.58.52.75:3010/products?gender=${gender}&status=${status}`)
      .then(response => response.json())
      .then(data => setNewPhoto(data.data));
  }, []);
  console.log(newPhoto);
  //연습용
  // useEffect(() => {
  //   fetch('/data/Man.json')
  //     .then(res => res.json())
  //     .then(data => setNewPhoto(data));
  // }, []);

  const testNext = () => {
    if (newPhotoCount < newPhoto.length - 4 && newPhotoCount >= 0) {
      setNewPhotoCount(newPhotoCount => newPhotoCount + 1);
    } else {
      setNewPhotoCount(0);
    }
  };

  const testPre = () => {
    if (newPhotoCount <= newPhoto.length && newPhotoCount > 0) {
      setNewPhotoCount(newPhotoCount => newPhotoCount - 1);
    } else if (newPhotoCount <= 0) {
      setNewPhotoCount(newPhoto.length - 4);
    }
  };

  return (
    <div className="newProduct">
      <div className="newProducts">
        <p className="header">신상품</p>
        <ul
          className="products"
          style={{
            transform: `translate(${newPhotoCount * -432}px)`,
            transition: `1s`,
          }}
        >
          {newPhoto &&
            newPhoto.map(
              ({
                id,
                name,
                image_url,
                price,
                discount_rate,
                discounted_price,
              }) => (
                <ProductForm
                  key={id}
                  id={id}
                  name={name}
                  image={image_url}
                  price={price}
                  rate={discount_rate}
                  disPrice={discounted_price}
                  gender={gender}
                  status={status}
                />
              )
            )}
        </ul>
        <div className="nextButton" onClick={testNext} />
        <div className="preButton" onClick={testPre} />
      </div>
    </div>
  );
};

export default NewProduct;
