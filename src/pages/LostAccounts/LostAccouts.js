import React from 'react';
import './LostAccount.scss';

const LostAccounts = () => {
  return (
    <section className="LostAccounts">
      <header />
      <nav />
      <form className="lostAccountsForm">
        <img className="mainLogo" src="images/logo.png" alt="mainLogo" />
        <div className="idInput">
          <input type="text" placeholder="이메일을 입력하세요." />
        </div>
        <span>
          <button className="submit" type="button" disabled>
            확인
          </button>
        </span>
      </form>
    </section>
  );
};

export default LostAccounts;
