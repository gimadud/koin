// src/components/Header.tsx
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
  <div className="header-left">
    <img
      className="logo"
      src="https://static.koreatech.in/assets/img/logo_white.png"
      alt="KOIN service logo"
    />
    <h2>서비스</h2>
  </div>

  <div className="header-text-right">
    <h3>회원가입</h3>
    <h3>로그인</h3>
  </div>
</header>

  );
};

export default Header;
