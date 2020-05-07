import React, { FC } from 'react';
import webmotorsLogo from '../assets/images/webmotorsLogo.svg';

const Header: FC = () => (
  <header className="App-header">
    <img src={webmotorsLogo} alt="logo" />
  </header>
);

export default Header;
