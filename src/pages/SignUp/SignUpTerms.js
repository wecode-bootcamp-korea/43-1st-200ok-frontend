import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpTerms.scss';

const SignUpTerms = () => {
  const [isAllChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(2).fill(false));
  const navigate = useNavigate();
  const handleAllCheck = () => {
    setAllChecked(prev => !prev);
    let array = new Array(2).fill(!isAllChecked);
    setCheckedState(array);
  };

  const handleMonoCheck = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const checkedLength = updatedCheckedState.reduce((sum, currentState) => {
      if (currentState === true) {
        return sum + 1;
      }
      return sum;
    }, 0);
    setAllChecked(checkedLength === updatedCheckedState.length);
  };

  const goToSignup = event => {
    event.preventDefault();
    if (checkedState[0]) {
      fetch('http://10.58.52.165:8007/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          privacyTermEssential: checkedState[0],
          privacyTermOptional: checkedState[1],
        }),
      }).then(response => response.json());
      navigate('/signup');
    } else {
      alert('필수약관에 동의해주셔야 합니다!');
    }
  };
  // const activeBtn = () => {
  //   return checkedState[0] ? setCheckedState(true) : setCheckedState(false);
  // };

  return (
    <div className="signUpTerms">
      <div className="signUpHeader">
        <p className="signUpTitle">회원가입</p>
      </div>
      <div className="termsWrap">
        <div className="allCheck">
          <span className="customCheck">
            <input
              type="checkbox"
              className="checkBox"
              checked={isAllChecked}
              onChange={() => handleAllCheck()}
            />
          </span>
          <label className="allCheckTxt">
            모든 약관을 확인하고 전체동의합니다.
          </label>
        </div>
        <hr className="signUpTermsLine" />
        <div className="termsContentWrap">
          <div className="termsFirstAgree">
            <span className="customCheck">
              <input
                type="checkbox"
                className="checkBox"
                checked={checkedState[0]}
                onChange={() => handleMonoCheck(0)}
              />
              <label className="firstCheckTxt">개인정보 수집 동의 [필수]</label>
            </span>
          </div>
          <div className="termsFirstTxt" summary="개인정보 수집, 이용동의">
            *&nbsp;
            <strong>수집 항목 [필수] : </strong>
            <br />
            <b>
              &nbsp;&nbsp;&nbsp;&nbsp;아이디, 비밀번호, 성명, 핸드폰번호,
              이메일, 본인인증정보(CI)
            </b>
            <br />
            *&nbsp;
            <strong>이용목적 : </strong>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;1. 회원관리 - 200OK 서비스 이용에 따른 본인
            확인, 개인식별, 불량회원의 부정이용 방지와 비인가 사용 방지,
            가입의사 확인 가입 및 가입횟수 제한, 분쟁 조정을 위한 기록보존,
            불만처리 등 민원처리, 고지사항 전달
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;2. 서비스 제공에 관한 계약이행 - 이랜드
            멤버십 포인트적립, 사용. 금융거래 본인인증 및 금융서비스, 구매 및
            요금결제.
            <br />
            *&nbsp;
            <strong>
              보유/이용기간 : 회원 탈퇴 요청 시 지체 없이 삭제, 파기 됩니다.(단,
              회원가입 시 혜택을 목적으로 한 반복적인 가입, 탈퇴를 막기 위해
              일정기간(30일 이내) 보관 될 수 있습니다.)
            </strong>
            <br />
            *&nbsp;
            <strong>
              개인정보 필수 수집항목 수집/이용동의를 거부하실 수 있으나 동의
              거부 시 회원가입을 하실 수 없습니다.
            </strong>
          </div>
          <div className="termsSecondAgree">
            <span className="customCheck">
              <input
                type="checkbox"
                className="checkBox"
                checked={checkedState[1]}
                onChange={() => handleMonoCheck(1)}
              />
              <label className="secondCheckTxt">
                개인정보 수집 동의 [선택]
              </label>
            </span>
          </div>
          <div className="termsFirstTxt" summary="개인정보 수집, 이용동의">
            *&nbsp;
            <strong>수집 항목 [선택] : </strong>
            <br />
            <b>&nbsp;&nbsp;&nbsp;&nbsp;주소, 생년월일</b>
            <br />
            *&nbsp;
            <strong>이용목적 : </strong>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;경품 및 쇼핑물품 배송에 대한 정확한 배송지
            확보, 생일쿠폰, 200OK 멤버십 활용 및 안내정보 제공. 당사가 진행하는
            서비스, 행사 및 제휴행사의 안내.
            <br />
            *&nbsp;
            <strong>
              보유/이용기간 : 회원 탈퇴 요청 시 지체 없이 삭제, 파기 됩니다.(단,
              회원가입 시 혜택을 목적으로 한 반복적인 가입, 탈퇴를 막기 위해
              일정기간(30일 이내) 보관 될 수 있습니다.)
            </strong>
            <br />
            *&nbsp;
            <strong>
              고객님께서는 선택항목 개인정보 수집/이용 동의 거부시, 상기
              이용목적에 명시된 서비스를 받으실 수 없습니다.
            </strong>
          </div>
        </div>
      </div>
      <div className="signUpYesOrNo">
        <button onClick={() => navigate('/')} className="btnCancelSignup">
          <span>가입취소</span>
        </button>
        <button
          className={
            (checkedState[0] && checkedState[1]) || checkedState[0]
              ? 'termButtonAction'
              : 'termButtonInAction'
          }
          disabled={!checkedState}
          onClick={goToSignup}
          // keyup={activeBtn}
        >
          다음으로
        </button>
      </div>
    </div>
  );
};

export default SignUpTerms;
