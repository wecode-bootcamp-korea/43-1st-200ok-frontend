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
      <header />
      <nav />
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
          <div className="saveEmail">
            <input type="checkbox" />
            <label>이메일 저장</label>
          </div>
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
            <a className="signUp" href="/signup">
              회원가입
            </a>
            <a className="lostAccounts" href="/lostAccounts">
              이메일, 비밀번호 찾기
            </a>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
