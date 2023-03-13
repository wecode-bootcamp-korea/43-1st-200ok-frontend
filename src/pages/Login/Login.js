import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const idCondition = userInfo.email.includes(('@', 4) && '.com');
  const pwCondition = userInfo.password.length >= 5;

  const handleIdInput = e => {
    setUserInfo({
      ...userInfo,
      email: e.target.value,
    });
  };

  const handlePasswordInput = e => {
    setUserInfo({
      ...userInfo,
      password: e.target.value,
    });
  };

  const onSubmit = () => {
    alert('submitted');
    navigate('/main');
  };

  const onKeyUp = event => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  };

  const login = e => {
    e.preventDefault();
    if (idCondition && pwCondition) {
      fetch('http://10.58.52.159:8007/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
        }),
      })
        .then(response => response.json())
        .then(data =>
          data.message
            ? alert(data.message)
            : (localStorage.setItem('token', data.accessToken),
              alert('로그인 성공'),
              navigate('/'))
        );
    }
  };

  return (
    <section className="login">
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
          />
          <input
            className="pwInput"
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={handlePasswordInput}
            onKeyUp={onKeyUp}
          />
          <div className="saveEmail">
            <input type="checkbox" />
            <label>이메일 저장</label>
          </div>
          <span>
            <button
              className={
                idCondition && pwCondition ? 'activeButton' : 'unActiveButton'
              }
              type="button"
              disabled={userInfo.email === '' || userInfo.password === ''}
              onClick={login}
            >
              로그인 하기
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
