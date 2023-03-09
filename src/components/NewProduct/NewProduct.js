import React, { useState, useEffect } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import './NewProduct.scss';
const NewProduct = () => {
  const [newPhoto, setNewPhoto] = useState([]);
  const [newPhotoCount, setNewPhotoCount] = useState(0);

  //백엔드 연동
  // useEffect(() => {
  //   fetch('http://10.58.52.163:3010/mainpage/news', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => setNewPhoto(data.data));
  // }, []);

  useEffect(() => {
    fetch('data/New.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setNewPhoto(data));
  }, []);

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
                name,
                image_url,
                price,
                discount_rate,
                discount_price,
                index,
              }) => (
                <ProductForm
                  key={index}
                  name={name}
                  image={image_url}
                  price={price}
                  rate={discount_rate}
                  disPrice={discount_price}
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
