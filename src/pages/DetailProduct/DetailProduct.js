import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate, useParams } from 'react-router-dom';
import { APIS } from '../../comfig';
import './DetailProduct.scss';

const DetailProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const { id } = params;
  const { gender, status, category } = location.state;
  const [user, setUser] = useState([]);
  const [isImages, setIsImages] = useState(true);
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({
    size: '',
    color: '',
  });
  const { size, color } = product;
  const token = localStorage.getItem('token');
  const colorHeart = '/images/colorheart.png';

  const onClickWishImg = () => {
    setTimeout(() => {
      alert('wish 리스트에 추가하였습니다.');
    }, 100);
    return setIsImages(false);
  };

  const oderValidation = () => {
    if (token) {
      alert('구매완료');
    } else {
      alert('로그인 해주세요');
      navigate('/login');
    }
  };

  const onClickAddCart = () => {
    if (token) {
      fetch(
        `${APIS.cart}/post?productId=${id}&size=${size}&color=${color}&token=${token}&quantity=${count}`,
        {
          method: 'POST',
        }
      )
        .then(response => response.json())
        .then(data => {
          if (window.confirm('장바구니에 추가하였습니다. 이동하시겠습니까?')) {
            navigate('/cart');
          } else {
            return;
          }
        });
    } else {
      alert('로그인 해주세요');
      navigate('/login');
    }
  };

  const updateProduct = e => {
    const { value, title } = e.target;
    setProduct({ ...product, [title]: value });
  };

  useEffect(() => {
    fetch(
      `${APIS.product}?gender=${gender}&status=${status}&category=${category}&productId=${id}`
    )
      .then(res => res.json())
      .then(data => setUser(data.data));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {user.map(
        ({
          id,
          image_url,
          colors,
          discount_rate,
          discounted_price,
          name,
          price,
          sizes,
        }) => (
          <div key={id} className="detailProduct">
            <section className="productInfo">
              <div className="imgWrapper">
                <img className="productImg" src={image_url} alt="제품 이미지" />
              </div>
            </section>
            <aside className="infoArea">
              <div className="productName">{name}</div>
              <div className="priceArea">
                <div className="priceArea1">제품 가격 :</div>
                <div className="priceArea2">
                  {Math.floor(price).toLocaleString()} 원
                </div>
                <div className="priceArea3">할인 가격 :</div>
                <div className="priceArea4">
                  {Math.floor(discounted_price).toLocaleString()} 원 (
                  {discount_rate}%)
                </div>
              </div>
              <div className="countInput">
                <button
                  className="minusButton"
                  type="button"
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -1
                </button>
                <div className={`productCount${count}`}>수량 : {count}</div>
                <button
                  className="plusButton"
                  type="button"
                  onClick={() => {
                    if (count < 10) {
                      setCount(count + 1);
                    }
                  }}
                >
                  +1
                </button>
              </div>
              <div className="productColor">
                <p>[Color]</p>
                {colors.map(item => (
                  <button
                    key={item}
                    className="productColor1"
                    title="color"
                    value={item}
                    onClick={updateProduct}
                    style={{ backgroundColor: `${item}` }}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="productSize">
                <p>[Size]</p>
                {sizes.map(item => (
                  <button
                    key={item}
                    className="productSize1"
                    title="size"
                    value={item}
                    onClick={updateProduct}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="sumPrice">
                {color && (
                  <p>
                    선택 옵션 : {color.toUpperCase()} / {size.toUpperCase()} /
                    {count}
                  </p>
                )}
              </div>
              <div className="sumPrice">
                <p>
                  총 제품금액 : ({(discounted_price * count).toLocaleString()}
                  원)
                </p>
              </div>
              <div className="buttons">
                <button>
                  <img
                    className="wishImg"
                    src={isImages ? '/images/heart.png' : `${colorHeart}`}
                    alt="wish 이미지"
                    onClick={onClickWishImg}
                  />
                </button>
                <button className="cartButton" onClick={onClickAddCart}>
                  장바구니 담기
                </button>
                <button className="orderButton" onClick={oderValidation}>
                  주문하기
                </button>
              </div>
            </aside>
          </div>
        )
      )}
    </>
  );
};

export default DetailProduct;
