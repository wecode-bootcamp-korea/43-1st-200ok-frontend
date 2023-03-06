import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isActive, setIsActive] = useState(false);

  const isInputLogin = () => {
    return email.includes('@' && '.com') && password.length >= 5
      ? setIsActive(true)
      : setIsActive(false);
  };

  return (
    <div className="login">
      <form className="loginForm">
        <div className="loginInputBox">
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
            <button className="loginButton">로그인 버튼</button>
          </span>
          <input type="checkbox" />
          <label>
            <span>이메일 저장</span>
          </label>
          <input className="signUp" type="button" />
          <label>
            <span>회원가입</span>
          </label>
          <input className="lostAccounts" type="button" />
          <label>
            <span>이메일/비밀번호 찾기</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Login;
