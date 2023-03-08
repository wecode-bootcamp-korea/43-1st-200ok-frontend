import React from 'react';
import { Link } from 'react-router-dom';
import NavCategory from '../NavCategory/NavCategory';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="width">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="topMenu">
          <ul>
            {NAVMENU.map(item => (
              <li key={item.id}>
                <Link to={`/${item.title}`}>{item.title}</Link>
                <NavCategory
                  division={item.division}
                  category={item.category}
                  photo={item.photo}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="topMember">
          <ul>
            {NAVMEMBER.map(menubar => (
              <li key={menubar.id}>
                <Link to={`/${menubar.title}`}>
                  <img src={`${menubar.img}`} alt="search" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

const NAVMENU = [
  { id: 1, title: '베스트' },
  {
    id: 2,
    title: '우먼',
    division: ['신상', '베스트', '전체보기'],
    category: [
      '아우터',
      '상의',
      '하의',
      '원피스',
      '액세서리',
      '이너/언더웨어',
      '홈웨어/잠옷',
    ],
    photo: [
      '/images/KakaoTalk_20230303_112128342.jpg',
      '/images/KakaoTalk_20230303_112109123.jpg',
      '/images/KakaoTalk_20230303_112042004.jpg',
    ],
  },
  {
    id: 3,
    title: '맨',
    division: ['신상', '베스트', '전체보기'],
    category: [
      '아우터',
      '상의',
      '하의',
      '원피스',
      '액세서리',
      '이너/언더웨어',
      '홈웨어/잠옷',
    ],
  },
  { id: 4, title: '컬러버레이션' },
  { id: 5, title: '키즈' },
  { id: 6, title: '커뮤니티' },
  { id: 7, title: '런칭 캘린더' },
  { id: 8, title: '리뷰랩' },
];

const NAVMEMBER = [
  { id: 1, title: 'login', img: '/images/user.png' },
  { id: 2, title: 'search', img: '/images/search.png' },
  { id: 3, title: 'weekly', img: '/images/heart.png' },
  { id: 4, title: 'cart', img: '/images/cart.png' },
];
