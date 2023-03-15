import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const navigator = useNavigate();
  const token = localStorage.getItem('token');

  const logOut = () => {
    if (token) {
      localStorage.removeItem('token');
      alert('로그아웃 되었습니다.');
      navigator('/');
    } else if (!token) {
      navigator('/login');
    }
  };

  const conditionLink = title => {
    if (title === 'login') {
      if (!token) {
        navigator('/login');
      } else {
        alert(' 이미 로그인 되었습니다.');
      }
    }
    if (title === 'cart') {
      if (token) {
        navigator('/cart');
      } else if (!token) {
        alert('로그인 해주세요');
        navigator('/login');
      }
    }
  };
  return (
    <div className="nav">
      <div className="width">
        <div className="logo">
          <Link className="logoLink" to="/">
            <img className="logoPhoto" src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="topMenu">
          <ul className="topMenuContent">
            {NAVMENU.map(({ id, title }) => (
              <li className="topMenuContentList" key={id}>
                <Link
                  className="topMenuContentLink"
                  to="/allProductList"
                  state={{ gender: title }}
                >
                  {title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="topMember">
          <ul className="topMemberContent">
            {NAVMEMBER.map(({ id, title, img, altName }) => (
              <li className="topMemberContentList" key={id}>
                <img
                  className="topMemberContentPhoto"
                  src={`${img}`}
                  alt={altName}
                  onClick={() => conditionLink(title)}
                />
              </li>
            ))}
            <button onClick={logOut}>{token ? '로그아웃' : '로그인'}</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

const NAVMENU = [
  { id: 1, title: '베스트' },
  { id: 2, title: 'female' },
  { id: 3, title: 'male' },
  { id: 4, title: '컬러버레이션' },
  { id: 5, title: '키즈' },
  { id: 6, title: '커뮤니티' },
  { id: 7, title: '런칭 캘린더' },
  { id: 8, title: '리뷰랩' },
];

const NAVMEMBER = [
  { id: 1, title: 'login', img: '/images/user.png', altName: 'loginLogo' },
  { id: 2, title: 'search', img: '/images/search.png', altName: 'searchLogo' },
  { id: 3, title: 'weekly', img: '/images/heart.png', altName: 'weeklyLogo' },
  { id: 4, title: 'cart', img: '/images/cart.png', altName: 'cartLogo' },
];
