import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const isInputLogin = () => {
    return email.includes('@', 4 && '.com') && password.length >= 5
      ? setIsActive(true)
      : setIsActive(false);
  };

  const handleIdInput = event => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = event => {
    setPassword(event.target.value);
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
        <Link to="/">
          <img className="mainLogo" src="images/logo.png" alt="mainLogo" />
        </Link>
        <div>
          <input
            className="idInput"
            type="text"
            placeholder="이메일을 입력하세요."
            onChange={handleIdInput}
            onKeyUp={isInputLogin}
          />
          <input
            className="pwInput"
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={handlePasswordInput}
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
              로그인 하기
            </button>
          </span>
          <div>
            <a className="signUp" href="/signupterms">
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
