import React, { useState, useEffect } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import './NewProduct.scss';
const NewProduct = () => {
  const [newPhoto, setNewPhoto] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('./data/best.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => [setNewPhoto(data.filter(item => item.type === '신상품'))]);
  }, []);

  console.log(newPhoto);

  const testNext = () => {
    if (count < newPhoto.length - 4 && count >= 0) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  const testPre = () => {
    if (count <= newPhoto.length && count > 0) {
      setCount(count - 1);
    } else if (count <= 0) {
      setCount(newPhoto.length - 4);
    }
  };

  return (
    <div className="newProduct">
      <p className="header">신상품</p>
      <ul
        className="products"
        style={{ transform: `translate(${count * -432}px)`, transition: `1s` }}
      >
        {newPhoto.map(item => {
          return (
            <ProductForm
              key={item.id}
              id={item.id}
              url={item.url}
              colors={item.colors}
            />
          );
        })}
      </ul>
      <div className="nextButton" onClick={testNext} />
      <div className="preButton" onClick={testPre} />
    </div>
  );
};

export default NewProduct;
