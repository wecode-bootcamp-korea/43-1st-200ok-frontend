import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const [getIsActive, setGetIsActive] = useState(false);
  const [inputValue, setInputValue] = useState({
    userName: '',
    email: '',
    password: '',
    passwordCheck: '',
    phoneNumber: '',
  });
  const { userName, email, password, passwordCheck, phoneNumber } = inputValue;
  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  //유효성 검사
  const isValidEmail = email.includes('@', 4) && email.includes('.com');
  const isValidPassWord = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{8,}$/;

  // const specialLetter = password.search(/[!@#$%]/gi);
  // const numberList = password.search(/[0-9]/gi);
  // const isValidPassword =
  //   password.length >= 8 && specialLetter.length >= 1 && numberList.length >= 1;

  // 가입하기 버튼 활성화
  // 이름과 핸드폰번호의 value가 1자 이상이 되어야 한다
  const isValidInput = userName.length >= 1 && phoneNumber.length >= 11;

  // 검사한 모든 로직의 유효성 검사가 true가 될때 getIsActive함수가 작동한다. 버튼 클릭 이벤트가 발생할때 넣어줄 함수.
  // const activeButton = () => {
  //   if (isValidEmail && isValidInput && isValidPassWord) {
  //     setGetIsActive(true);
  //   } else {
  //     alert('양식에 맞춰서 다시 입력해주세요.');
  //     setGetIsActive(false);
  //   }
  // };

  const navigate = useNavigate();
  const goToLogin = event => {
    event.preventDefault();
    if (isValidEmail && isValidInput && isValidPassWord) {
      navigate('/signupterms');
    } else {
      alert('양식에 맞춰서 다시 입력해주세요.');
    }
  };

  const activeBtn = () => {
    return isValidEmail && isValidInput && isValidPassWord
      ? setGetIsActive(true)
      : setGetIsActive(false);
  };
  // 버튼이 비활성화 될 때 버튼을 클릭하면 아래와 같은 경고창이 뜬다.

  // backend 연결 - activeButton 함수 안에 넣기
  // fetch(``, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8',
  //   },
  //   body: JSON.stringify({
  //     name: userName,
  //     email: email,
  //     password: password,
  //     passwordCheck: passwordCheck,
  //     phoneNumber: phoneNumber,
  //   }),
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     alert('200OK에서 즐거운 쇼핑 되세요♡♥︎♡♥︎');
  //     navigate('/login');
  //   });

  return (
    <div className="signUp">
      <div className="signUpHeader">
        <Link to="/">
          <img className="signUpLogo" src="images/logo.png" alt="signUpLogo" />
        </Link>
        <span className="signUpTitle">회원가입</span>
        <hr className="signUpLine" />
      </div>
      <div className="signUpWrap">
        <div className="infoFirst">
          <img
            className="signUpCircle"
            src="images/signup-circle.png"
            alt="signUpCircle"
          />
          <span className="signUpInfoTitle">기본정보</span>
        </div>
        <div className="infoFirstContent">
          <table summary="이름, 이메일, 비밀번호, 비밀번호 재입력, 생년월일, 핸드폰번호">
            <tbody>
              <tr>
                <th scope="row">
                  <div className="infoTitle">
                    이름
                    <span className="ns" title="필수입력">
                      {' '}
                      *
                    </span>
                  </div>
                </th>
                <td>
                  <div className="inputWrap">
                    <input
                      type="text"
                      className="inputInfo"
                      title="이름 입력"
                      name="userName"
                      value={userName}
                      onChange={handleInput}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="infoTitle">
                    이메일
                    <span className="ns" title="필수입력">
                      {' '}
                      *
                    </span>
                  </div>
                </th>
                <td id="td_webId">
                  <div className="inputWrap">
                    <input
                      type="text"
                      className="inputInfo"
                      title="이메일 입력"
                      name="email"
                      value={email}
                      placeholder="   예 : 200OKKK@spao.com"
                      onChange={handleInput}
                    />
                  </div>
                  {isValidEmail ? (
                    <em className="emailFormCorrect">올바른 형식입니다.</em>
                  ) : (
                    <em className="emailForm">양식에 맞춰 입력해주세요.</em>
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="infoTitle">
                    비밀번호
                    <span className="ns" title="필수입력">
                      {' '}
                      *
                    </span>
                  </div>
                </th>
                <td id="td_webId">
                  <div className="inputWrap">
                    <input
                      type="password"
                      className="inputInfo"
                      title="비밀번호 입력"
                      name="password"
                      value={password}
                      onChange={handleInput}
                    />
                  </div>
                  <div id="em_pwdValidMsg" />
                  {isValidPassWord.test(password) ? (
                    <em className="passwordFormCorrect">올바른 형식입니다.</em>
                  ) : (
                    <em className="passwordForm">
                      영문/숫자/특수문자 조합으로 8자리 이상
                    </em>
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="infoTitle">
                    비밀번호 재입력
                    <span className="ns" title="필수입력">
                      {' '}
                      *
                    </span>
                  </div>
                </th>
                <td id="td_confirmPassword">
                  <div className="inputWrap">
                    <input
                      type="password"
                      className="inputInfo"
                      title="비밀번호 재입력"
                      name="passwordCheck"
                      value={passwordCheck}
                      onChange={handleInput}
                    />
                  </div>
                  <div id="em_pwdValidMsg2" />
                  {password === passwordCheck ? (
                    <em className="pwCheckFormCorrect">
                      비밀번호가 일치합니다.
                    </em>
                  ) : (
                    <em className="pwCheckForm">동일한 비밀번호를 입력</em>
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="infoTitle">생년월일</div>
                </th>
                <td id="td_confirmPassword">
                  <div className="inputWrap">
                    <input
                      type="text"
                      className="inputInfo"
                      title="생년월일"
                      placeholder="   예 : 1900/01/01"
                    />
                  </div>
                  <div id="em_pwdValidMsg2" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="infoTitle">
                    핸드폰번호
                    <span className="ns" title="필수입력">
                      {' '}
                      *
                    </span>
                  </div>
                </th>
                <td id="td_confirmPassword">
                  <div className="inputWrap">
                    <input
                      type="text"
                      className="inputInfo"
                      title="핸드폰번호"
                      placeholder="   예 : 01012345678"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handleInput}
                      onKeyUp={activeBtn}
                    />
                  </div>
                  <div id="em_pwdValidMsg2" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="infoTitle">주소</div>
                </th>
                <td id="td_confirmPassword">
                  <div className="inputWrap">
                    <input type="text" className="inputInfo" title="주소" />
                  </div>
                  <div id="em_pwdValidMsg" />
                  <em className="addressForm">도로명 주소를 입력해주세요.</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="signUpYesOrNo">
          <button className="btnCancelSignup">
            <span>가입취소</span>
          </button>
          <button
            className={
              getIsActive ? 'signUpButtonAction' : 'signUpButtonInaction'
            }
            disabled={!getIsActive}
            onClick={goToLogin}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
