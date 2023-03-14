import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ProductForm from '../../components/ProductForm/ProductForm';
import './AllProductList.scss';

const AllProductList = () => {
  const location = useLocation();
  const { gender } = location.state;
  const [data1, setData1] = useState([]);
  const [category, setCategory] = useState('outer');

  useEffect(() => {
    fetch(
      `http://10.58.52.184:3010/products?gender=${gender}&category=${category}`
    )
      .then(res => res.json())
      .then(data => setData1(data.data));
  }, [category, gender]);
  console.log(data1);

  return (
    <div className="allProductList">
      <div className="allProductListWidth">
        <div className="productRoute">
          <ol>
            <li>HOME</li>
            <li>{gender}</li>
            <li>{category}</li>
          </ol>
        </div>
        <div className="categoryTitle">
          <div className="title">
            <h3>{category}</h3>
          </div>
          <div className="categoryMenu">
            <div className="menuList">
              <ul>
                {PRODUCTCATEGORY.map(({ id, allCategory }) => (
                  <li key={id}>
                    <button onClick={() => setCategory(allCategory)}>
                      {allCategory}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="products">
            <ul className="product">
              {data1 &&
                data1.map(item => (
                  <ProductForm
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image_url}
                    price={item.price}
                    rate={item.discount_rate}
                    disPrice={item.discounted_price}
                    gender={gender}
                    category={category}
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

const PRODUCTCATEGORY = [
  { id: 1, allCategory: 'outer' },
  { id: 2, allCategory: 'top' },
  { id: 3, allCategory: 'pants' },
];
