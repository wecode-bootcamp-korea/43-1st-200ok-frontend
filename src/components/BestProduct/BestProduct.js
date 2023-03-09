import React, { useState, useEffect } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import './BestProduct.scss';

const BestProduct = () => {
  const [bestPhoto, setBestPhoto] = useState([]);

  //백앤드 주소
  // useEffect(() => {
  //   fetch('http://10.58.52.163:3010/mainpage/bests/man', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => [setBestPhoto(data.data)]);
  // }, []);

  // 연습용
  useEffect(() => {
    fetch('./data/Woman.json')
      .then(res => res.json())
      .then(data => setBestPhoto(data));
  }, []);

  const woman = () => {
    fetch('http://10.58.52.163:3010/mainpage/bests/woman')
      .then(res => res.json())
      .then(data => setBestPhoto(data.data));
  };

  const men = () => {
    fetch('http://10.58.52.163:3010/mainpage/bests/man')
      .then(res => res.json())
      .then(data => setBestPhoto(data.data));
  };

  //setBestPhoto에서 인덱스 번호를 쓰면서 구조 분해 할당을 하고 싶은데 어떻게 해야될지 모르겠습니다.
  // bestPhoto.map(
  //   (index,{name,image_url,price,discount_rate,discounted_price}) =>
  //     index > 0 &&
  //     index <= 8 && (
  //       <ProductForm
  //         key={index}
  //         id={index}
  //         name={name}
  //         image={image_url}
  //         price={price}
  //         rate={discount_rate}
  //         disPrice={discounted_price}
  //       />
  //     )
  // )

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
          {bestPhoto &&
            bestPhoto.map(
              (item, index) =>
                index > 0 &&
                index <= 8 && (
                  <ProductForm
                    key={index}
                    id={index}
                    name={item.name}
                    image={item.image_url}
                    price={item.price}
                    rate={item.discount_rate}
                    disPrice={item.discounted_price}
                  />
                )
            )}
        </ul>
      </div>
    </div>
  );
};
export default BestProduct;
