import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpTerms from './SignUpTerms';
import './SignUp.scss';

const SignUp = () => {
  // const [getIsActive, setGetIsActive] = useState(false);
  const [emailCheck, setEmailCheck] = useState('');
  const [inputValue, setInputValue] = useState({
    userName: '',
    email: '',
    password: '',
    passwordCheck: '',
    phoneNumber: '',
  });
  const { userName, email, password, passwordCheck, phoneNumber } = inputValue;

  const navigate = useNavigate();

  const [isAllChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(2).fill(false));

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

  //유효성 검사

  const isValidEmail = email.includes('@', 4) && email.includes('.com');
  const isValidPassWord = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{8,}$/
  ).test(password);
  const isValidPasswordCheck = password === passwordCheck;
  // 가입하기 버튼 활성화
  const isValidInput = userName.length >= 1 && phoneNumber.length >= 9;
  const isValidSignUp = (checkedState[0] && checkedState[1]) || checkedState[0];
  const activeBtn =
    isValidEmail &&
    isValidInput &&
    isValidPassWord &&
    isValidPasswordCheck &&
    isValidSignUp;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const goToCheck = () => {
    fetch('http://10.58.52.248:8007/invalidEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setEmailCheck(data.result);
        alert(data.result);
      });
  };

  const emailduplication = emailCheck === '가입가능한 이메일 입니다.';

  const goToLogin = event => {
    if (activeBtn && emailduplication) {
      fetch('http://10.58.52.248:8007/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          name: userName,
          email: email,
          password: password,
          passwordCheck: passwordCheck,
          phoneNumber: phoneNumber,
          privacyTermEssential: checkedState[0],
          privacyTermOptional: checkedState[1],
        }),
      }).then(response => response.json());
      alert('가입이 완료되었습니다! 즐거운 쇼핑 되세요♥︎');
      navigate('/login');
    } else if (activeBtn) {
      alert('아이디 중복을 확인해 주세요');
    }

    // .then(data => {
    //   alert('200OK에서 즐거운 쇼핑 되세요♡♥︎♡♥︎');
    //   navigate('/login');
    // });

    // event.preventDefault();
    // if (activeBtn) {
    //   navigate('/login');
    // } else {
    //   alert('양식에 맞춰서 다시 입력해주세요.');
    // }
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="signUp">
      <div className="signUpHeader">
        <p className="signUpTitle">회원가입</p>
      </div>
      <div className="infoFirst">
        <img
          className="signUpCircle"
          src="images/signup-circle.png"
          alt="signUpCircle"
        />
        <span className="signUpInfoTitle">기본정보</span>
      </div>
      <div className="signUpWrap">
        <div className="infoFirstContent">
          <table summary="이름, 이메일, 비밀번호, 비밀번호 재입력, 생년월일, 핸드폰번호">
            <tbody>
              <tr>
                <th scope="row">
                  <div className="signupInfoTitle">
                    이름
                    <span className="essentialMark" title="필수입력">
                      {' '}
                      *
                    </span>
                  </div>
                </th>
                <td>
                  <div className="signupInputWrap">
                    <input
                      type="text"
                      className="signupInputInfo"
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
                  <div className="signupInfoTitle">
                    이메일
                    <span className="essentialMark" title="필수입력">
                      {' '}
                      *
                    </span>
                  </div>
                </th>
                <td id="td_webId">
                  <div className="signupInputWrap">
                    <input
                      type="text"
                      className="signupEmailInput"
                      title="이메일 입력"
                      name="email"
                      value={email}
                      placeholder="   예 : 200OKKK@spao.com"
                      onChange={handleInput}
                    />
                    <button className="emailCheckBtn" onClick={goToCheck}>
                      중복확인
                    </button>
                  </div>
                  {isValidEmail ? (
                    <em className="signupFormCorrect">올바른 형식입니다.</em>
                  ) : (
                    <em className="signupFormIncorrect">
                      양식에 맞춰 입력해주세요.
                    </em>
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="signupInfoTitle">
                    비밀번호
                    <span className="essentialMark" title="필수입력">
                      {' '}
                      *
                    </span>
                  </div>
                </th>
                <td id="td_webId">
                  <div className="signupInputWrap">
                    <input
                      type="password"
                      className="signupInputInfo"
                      title="비밀번호 입력"
                      name="password"
                      value={password}
                      onChange={handleInput}
                    />
                  </div>
                  <div id="em_pwdValidMsg" />
                  {isValidPassWord ? (
                    <em className="signupFormCorrect">올바른 형식입니다.</em>
                  ) : (
                    <em className="signupFormIncorrect">
                      영문/숫자/특수문자 조합으로 8자리 이상
                    </em>
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="signupInfoTitle">
                    비밀번호 재입력
                    <span className="essentialMark" title="필수입력">
                      {' '}
                      *
                    </span>
                  </div>
                </th>
                <td id="td_confirmPassword">
                  <div className="signupInputWrap">
                    <input
                      type="password"
                      className="signupInputInfo"
                      title="비밀번호 재입력"
                      name="passwordCheck"
                      value={passwordCheck}
                      onChange={handleInput}
                    />
                  </div>
                  <div id="em_pwdValidMsg2" />
                  {password === passwordCheck ? (
                    <em className="signupFormCorrect">
                      비밀번호가 일치합니다.
                    </em>
                  ) : (
                    <em className="signupFormIncorrect">
                      동일한 비밀번호를 입력
                    </em>
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="signupInfoTitle">생년월일</div>
                </th>
                <td id="td_confirmPassword">
                  <div className="signupInputWrap">
                    <input
                      type="text"
                      className="signupInputInfo"
                      title="생년월일"
                      placeholder="   예 : 1900/01/01"
                    />
                  </div>
                  <div id="em_pwdValidMsg2" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="signupInfoTitle">
                    핸드폰번호
                    <span className="essentialMark" title="필수입력">
                      {' '}
                      *
                    </span>
                  </div>
                </th>
                <td id="td_confirmPassword">
                  <div className="signupInputWrap">
                    <input
                      type="text"
                      className="signupInputInfo"
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
                  <div className="signupInfoTitle">주소</div>
                </th>
                <td id="td_confirmPassword">
                  <div className="signupInputWrap">
                    <input
                      type="text"
                      className="signupInputInfo"
                      title="주소"
                    />
                  </div>
                  <div id="em_pwdValidMsg" />
                  <em className="signupFormCorrect">
                    도로명 주소를 입력해주세요.
                  </em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <SignUpTerms
          handleAllCheck={handleAllCheck}
          ß
          handleMonoCheck={handleMonoCheck}
          isAllChecked={isAllChecked}
          checkedState={checkedState}
        />
        <div className="signUpYesOrNo">
          <button className="btnCancelSignup" onClick={goToMain}>
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
