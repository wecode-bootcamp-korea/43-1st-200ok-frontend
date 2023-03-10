import React, { useEffect, useState } from 'react';
import ProductForm from '../../components/ProductForm/ProductForm';
import './AllProductList.scss';

const AllProductList = () => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetch('./data/Man.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => [setData1(data)]);
  }, []);

  const duplicationCategory = data1
    .map(item => item.category)
    .filter(item => item);

  const duplicationCategoryList = [...new Set(duplicationCategory)];

  const onClick = item => {
    console.log(item);
    fetch('./data/Best.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        category: item,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
    console.log(item);
  };

  return (
    <div className="allProductList">
      <div className="allProductListWidth">
        <div className="productRoute">
          <ol>
            <li>HOME</li>
            <li>우먼</li>
            <li>아우터</li>
          </ol>
        </div>
        <div className="categoryTitle">
          <div className="title">
            <h3>아우터</h3>
          </div>
          <div className="categoryMenu">
            <div className="menuList">
              <ul>
                {duplicationCategoryList.map(item => (
                  <li key={item}>
                    <button onClick={() => onClick(item)}>{item}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="products">
            <ul className="product">
              {data1 &&
                data1.map((item, index) => (
                  <ProductForm
                    key={index}
                    id={index}
                    name={item.name}
                    image={item.image_url}
                    price={item.price}
                    rate={item.discount_rate}
                    disPrice={item.discounted_price}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductList;
