import React from 'react';
import { Link } from 'react-router-dom';
import NavCategory from '../NavCategory/NavCategory';
import './Nav.scss';

const Nav = () => {
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
            {NAVMENU.map(
              ({ id, title, division, category, photo, altName }) => (
                <li className="topMenuContentList" key={id}>
                  <Link className="topMenuContentLink" to="/allProductList">
                    {title}
                  </Link>
                  <NavCategory
                    division={division}
                    category={category}
                    photo={photo}
                    altName={altName}
                  />
                </li>
              )
            )}
          </ul>
        </div>
        <div className="topMember">
          <ul className="topMemberContent">
            {NAVMEMBER.map(({ id, title, img, altName }) => (
              <li className="topMemberContentList" key={id}>
                <Link to={`/${title}`}>
                  <img
                    className="topMemberContentPhoto"
                    src={`${img}`}
                    alt={altName}
                  />
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
    altName: ['아우터 사진', '상의 사진', '원피스 사진'],
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
  { id: 1, title: 'login', img: '/images/user.png', altName: 'loginLogo' },
  { id: 2, title: 'search', img: '/images/search.png', altName: 'searchLogo' },
  { id: 3, title: 'weekly', img: '/images/heart.png', altName: 'weeklyLogo' },
  { id: 4, title: 'cart', img: '/images/cart.png', altName: 'cartLogo' },
];
