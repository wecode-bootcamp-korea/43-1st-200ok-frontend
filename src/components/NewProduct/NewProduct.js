import React, { useState, useEffect } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import './NewProduct.scss';
const NewProduct = () => {
  const [newPhoto, setNewPhoto] = useState([]);
  const [newPhotoCount, setNewPhotoCount] = useState(0);
  const gender = 'malefemale';
  const status = 'new';
  const category = 'BLANK';
  const productid = 'BLANK';

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

  useEffect(() => {
    fetch(
      `http://10.58.52.201:3010/products?gender=${gender}&status=${status}&category=${category}&productId=${productid}`
    )
      .then(response => response.json())
      .then(data => setNewPhoto(data.data));
    window.scrollTo(0, 0);
  }, []);

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
            newPhoto.map(item => (
              <ProductForm
                key={item.id}
                item={item}
                gender={gender}
                status={status}
                category={category}
                productid={productid}
              />
            ))}
        </ul>
        <div className="nextButton" onClick={testNext} />
        <div className="preButton" onClick={testPre} />
      </div>
    </div>
  );
};

export default NewProduct;
