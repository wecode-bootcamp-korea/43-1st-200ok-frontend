import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ProductForm from '../../components/ProductForm/ProductForm';
import './AllProductList.scss';

const AllProductList = () => {
  const location = useLocation();
  const { gender } = location.state;
  const [data1, setData1] = useState([]);
  const [category, setCategory] = useState('outer');
  const status = 'BLANK';
  const productid = 'BLANK';

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(
      `http://10.58.52.201:3010/products?gender=${gender}&status=${status}&category=${category}&productId=${productid}`
    )
      .then(res => res.json())
      .then(data => setData1(data.data));
  }, [category, gender]);

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
                    item={item}
                    gender={gender}
                    status={status}
                    category={category}
                    productid={productid}
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
  { id: 3, allCategory: 'bottom' },
];
