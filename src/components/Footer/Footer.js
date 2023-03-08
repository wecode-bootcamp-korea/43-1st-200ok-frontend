import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="iconPhoto">
              <p>사진들어갈 자리</p>
            </div>
            <div>
              <Link href="#!">추후 들어갈 예정</Link>
              <Link href="#!">추후 들어갈 예정</Link>
              <Link href="#!">추후 들어갈 예정</Link>
              <Link href="#!">추후 들어갈 예정</Link>
              <Link href="#!">추후 들어갈 예정</Link>
            </div>
          </div>
        </div>
        <div className="footerSection02">
          <ul>
            <li>
              <Link href="#!">추후 들어갈 예정</Link>
            </li>
            <li>
              <Link href="#!">추후 들어갈 예정</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#!">추후 들어갈 예정</Link>
            </li>
            <li>
              <Link href="#!">추후 들어갈 예정</Link>
            </li>
            <li>
              <Link href="#!">추후 들어갈 예정</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#!">추후 들어갈 예정</Link>
            </li>
            <li>
              <Link href="#!">추후 들어갈 예정</Link>
            </li>
            <li>
              <Link href="#!">추후 들어갈 예정</Link>
            </li>
            <li>
              <Link href="#!">추후 들어갈 예정</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
