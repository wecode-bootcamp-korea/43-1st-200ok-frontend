import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  // const [getIsActive, setGetIsActive] = useState(false);
  const [inputValue, setInputValue] = useState({
    userName: '',
    id: '',
    email: '',
    password: '',
    passwordCheck: '',
    phoneNumber: '',
  });
  const { userName, id, email, password, passwordCheck, phoneNumber } =
    inputValue;

  const navigate = useNavigate();

  //유효성 검사
  const isValidId = id.length >= 1;
  const isValidEmail = email.includes('@', 4) && email.includes('.com');
  const isValidPassWord = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{8,}$/
  ).test(password);
  const isValidPasswordcheck = password === passwordCheck;
  // 가입하기 버튼 활성화
  const isValidInput = userName.length >= 1 && phoneNumber.length >= 9;
  const activeBtn =
    isValidEmail &&
    isValidInput &&
    isValidPassWord &&
    isValidPasswordcheck &&
    isValidId;

  // const activeBtn = () => {
  //   return isValidEmail &&
  //     isValidInput &&
  //     isValidPassWord &&
  //     isValidPasswordcheck
  //     ? setGetIsActive(true)
  //     : setGetIsActive(false);
  // };

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const goToLogin = event => {
    event.preventDefault();
    if (activeBtn) {
      navigate('/login');
    } else {
      alert('양식에 맞춰서 다시 입력해주세요.');
    }
  };

  const goToTerms = () => {
    navigate('/signupterms');
  };

  return (
    <div className="signUp">
      <div className="signUpHeader">
        <p className="signUpTitle">회원가입</p>
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
                    아이디
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
                      title="아이디 입력"
                      name="id"
                      value={id}
                      onChange={handleInput}
                    />
                  </div>
                  {isValidId ? (
                    <em className="idFormCorrect">올바른 형식입니다.</em>
                  ) : (
                    <em className="idForm">5자리 이상</em>
                  )}
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
                  {isValidPassWord ? (
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
          <button className="btnCancelSignup" onClick={goToTerms}>
            <span>가입취소</span>
          </button>
          <button
            className={
              activeBtn ? 'signUpButtonAction' : 'signUpButtonInaction'
            }
            disabled={!activeBtn}
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
