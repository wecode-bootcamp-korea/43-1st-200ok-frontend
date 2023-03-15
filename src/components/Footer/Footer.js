import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrap">
        <div className="footerInfo">
          <div className="information">
            <p className="phone">1670-9600</p>
            <p>상담시간: 오전 10시~ 오후 11시(토요일,공휴일 휴무)</p>
            <p className="email">
              emil:spao@eland.co.kr(단체주문 문의)
              <br />
              emil:spao_mkt@eland.co.kr(마케팅 협찬 문의)
            </p>
          </div>
          <div className="subInformation">
            <span>
              (주)Wecode 200Ok | 사업자 등록번호: 123-45-67890 [사업자정보확인]
              | 통신판매업 신고번호: 제 2023-03015 호
            </span>
            <br />
            <span>
              대표이사: 강혁주 | 서울특별시 강남구 테헤란로 427 (삼성동) 위워크
              10층 사옥 | 프로젝트 매니저: 신건록
            </span>
            <br />
            <span>
              Frontend Developer: 신정호 김준영, 신건록 / Backend Developer:
              강혁주, 문선정
            </span>
          </div>
          <div className="icon">
            <div className="iconPhoto">
              <p>사진들어갈 자리</p>
            </div>
            <div className="iconPhotoList">
              <Link className="iconPhotoLink" href="#!">
                추후 들어갈 예정
              </Link>
            </div>
          </div>
        </div>
        <div className="footerPolicy">
          <ul className="policyList">
            {TEAMNAME.map(({ id, content }) => (
              <li key={id}>
                <Link className="policyLink" href="#!">
                  {content}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="policyList">
            {TEAMINFOR.map(({ id, content }) => (
              <li key={id}>
                <Link className="policyLink" href="#!">
                  {content}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="policyList">
            {TEAMPHONE.map(({ id, content }) => (
              <li key={id}>
                <Link className="policyLink" href="#!">
                  {content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const TEAMNAME = [
  { id: 1, content: '브랜드 소개' },
  { id: 2, content: '오프라인 매장 안내' },
];
const TEAMINFOR = [
  { id: 1, content: '개인정보 처리방침' },
  { id: 2, content: '약관 안내' },
  { id: 3, content: '윤리 경영' },
];
const TEAMPHONE = [
  { id: 1, content: '공지사항' },
  { id: 2, content: '회원혜택' },
  { id: 3, content: '채용정보 및 인사제도' },
  { id: 4, content: '자주묻는 질문 FAQ' },
];
