import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartList } from '../../components/CartList/CartList';
import EmptyCart from '../../components/CartList/EmptyCart';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const toggleSelected = e => {
    const { name } = e.target;

    const selectedChkBox = productList.map(product => {
      if (product.id.toString() === name) {
        return { ...product, checkedState: !product.checkedState };
      }
      return product;
    });

    setProductList(selectedChkBox);
  };

  const onClickAllToggleBtn = () => {
    const isAllChecked = productList.every(({ checkedState }) => checkedState);
    const selectedChkBox = productList.map(product => ({
      ...product,
      checkedState: isAllChecked ? false : true,
    }));
    setProductList(selectedChkBox);
  };

  const handleAllDelete = () => {
    const isAllDelete = productList.map(item => item.id);
    setTotalPrice(0);
    setProductList(productList.filter(item => item.id === isAllDelete));
  };
  const handleSomeDelete = () => {
    setTotalPrice(prev => prev - totalPrice);
    setProductList(productList.filter(({ checkedState }) => !checkedState));
  };
  const goToShopping = () => {
    navigate('/');
  };

  const goToPay = () => {
    const payToSelect = productList.some(({ checkedState }) => checkedState);

    if (payToSelect) {
      alert('결제완료!!! 고객님의 상품을 안전하게 배송해드리겠습니다♡');
    } else {
      alert('상품을 선택해주세요!');
    }
  };

  useEffect(() => {
    fetch('/data/Cart.json')
      .then(res => res.json())
      .then(data =>
        setProductList(data.map(item => ({ ...item, checkedState: false })))
      );
  }, []);

  return (
    <div className="cart">
      <div className="cartHeader">
        <div className="cartPath">
          <span className="pathHome">HOME</span>
          <span className="pathCart">장바구니</span>
        </div>
        <h1 className="cartTitle">장바구니</h1>
      </div>
      <div className="cartList">
        <div className="listContent">
          <div className="cardHeader">
            <div className="allCheckBox">
              <button className="cartAllCheckBox" onClick={onClickAllToggleBtn}>
                전체 선택
              </button>
            </div>
            <div>
              <button className="cartSomeDelete" onClick={handleSomeDelete}>
                선택 삭제
              </button>
              <button className="cartAllDelete" onClick={handleAllDelete}>
                전체 삭제
              </button>
            </div>
          </div>
          <div className="cartProductInfo">
            {productList.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="cartCard">
                {productList.map(
                  ({ price, id, title, amount, checkedState }) => (
                    <CartList
                      key={id}
                      id={id}
                      title={title}
                      price={price}
                      amount={amount}
                      totalPrice={totalPrice}
                      setTotalPrice={setTotalPrice}
                      productList={productList}
                      setProductList={setProductList}
                      toggleSelected={toggleSelected}
                      checkedState={checkedState}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="cartSumBox">
        <div className="sumList">
          <div className="cartChosenPrice">
            <p className="chosenPriceTitle">총 상품금액</p>
            <p className="chosenPrice">{totalPrice}원</p>
          </div>
          <img className="cartListPlus" src="images/plus.png" alt="plus" />
          <div className="deliveryInSum">
            <p className="payDeliveryTitle">배송비</p>
            <p className="payDeliveryPrice">무료</p>
          </div>
          <img className="cartListPlus" src="images/equal.png" alt="equal" />
          <div className="cartSumPrice">
            <p className="sumPriceTitle">총 결제금액</p>
            <p className="cartFinalSumPrice">{totalPrice}원</p>
          </div>
        </div>
      </div>
      <div className="payYesOrNo">
        <button className="btnCancelPay" onClick={goToShopping}>
          <span>쇼핑계속하기</span>
        </button>
        <button className="payButtonAction" onClick={goToPay}>
          <span>결제하기</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;

// const deleteComment = item => {
//   setSaveComment(
//     saveComment.filter(items => {
//       return items.id !== item.id;
//     })
//   );
//   setNumberComments(numberComments - 1);
//   return item.up === true ? setNumberLike(numberlike - 1) : '';
// };
