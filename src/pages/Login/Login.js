import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [{ email, password }, { setEmail, setPassword }] = useState({
    email: '',
    password: '',
  });
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const isInputLogin = () => {
    return email.includes('@' && '.com') && password.length >= 5
      ? setIsActive(true)
      : setIsActive(false);
  };
  const login = e => {
    e.preventDefault();

    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => console.log(data));
    //응답

    if (isActive) {
      navigate('/');
    }
  };

  return (
    <section className="login">
      <form className="loginForm">
        <img className="mainLogo" src="images/logo.png" alt="mainLogo" />
        <div>
          <input
            className="idInput"
            type="text"
            placeholder="이메일을 입력하세요."
            onKeyUp={isInputLogin}
          />
          <input
            className="pwInput"
            type="password"
            placeholder="비밀번호를 입력하세요."
            onKeyUp={isInputLogin}
          />
          <span>
            <button
              className={isActive ? 'activeButton' : 'unActiveButton'}
              type="button"
              disabled={email === '' || password === '' ? true : false}
              onClick={login}
            >
              로그인 버튼
            </button>
          </span>
          <div>
            <div className="loginEtc">
              <input className="saveEmail" type="checkbox" />
              <label>이메일 저장</label>
            </div>
            <button className="signUp" type="button">
              회원가입
            </button>
            <button className="lostAccounts" type="button">
              이메일/비밀번호 찾기
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
