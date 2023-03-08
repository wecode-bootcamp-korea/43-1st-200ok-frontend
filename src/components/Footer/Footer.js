import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="padding">
        <div className="footerSection01">
          <div className="information">
            <p className="phone">1670-9600</p>
            <p>상담시간: 오전 10시~ 오후 5시(토요일,공휴일 휴무)</p>
            <p className="email">
              emil:spao@eland.co.kr(단체주문 문의)
              <br />
              emil:spao_mkt@eland.co.kr(마케팅 협찬 문의)
            </p>
          </div>
          <div className="subInformation">
            <span>
              (주)이랜드월드패션사업부 | 사업자 등록번호: 113-85-19030
              [사업자정보확인] | 통신판매업 신고번호: 제 2005-01053 호
            </span>
            <br />
            <span>
              대표이사: 최운식 | 서울특별시 금천구 가산디지털1로 159 (가산동)
              이랜드 가산동 사옥 | 개인정보 보호책임자: 최운식
            </span>
            <br />
            <span>
              사옥 주소로 상품을 발송하시면 교환 · 환불이 불가하므로, 교환 ·
              환불은 사이트 내에서 신청해주시기 바랍니다.{' '}
            </span>
          </div>
          <div className="icon">
            <div className="em">
              <i className="bi bi-github" />
              <i className="bi bi-github" />|
            </div>
            <div>
              <a href="#!">
                <i className="bi bi-apple" />
              </a>
              <a href="#!">
                <i className="bi bi-apple" />
              </a>
              <a href="#!">
                <i className="bi bi-apple" />
              </a>
              <a href="#!">
                <i className="bi bi-apple" />
              </a>
              <a href="#!">
                <i className="bi bi-apple" />
              </a>
            </div>
          </div>
        </div>
        <div className="footerSection02">
          <ul>
            <li>
              <a href="#!">브랜드 소개</a>
            </li>
            <li>
              <a href="#!">온라인매장</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#!">개인정보 처리방침</a>
            </li>
            <li>
              <a href="#!">약관 안내</a>
            </li>
            <li>
              <a href="#!">윤리경영</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#!">공지사항</a>
            </li>
            <li>
              <a href="#!">회원혜택</a>
            </li>
            <li>
              <a href="#!">채용정보 및 인사제도</a>
            </li>
            <li>
              <a href="#!">자주묻는 질문 FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
