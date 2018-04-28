import React from 'react';
import styled from 'styled-components';

import app from './images/appstore.png';
import play from './images/playmarket.png';

const Download = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: none;
  border-left: none;
  margin: 40px 0;
`;

const Link = styled.a`
  margin-right: 25px;

  :last-child {
    margin-right: 0;
  }
`;

const Img = styled.img`
  height: 34px;
`;

export default () => (
  <Download>
    <Link href="https://www.apple.com/iphone/">
      <Img src={app} alt="app store" />
    </Link>
    <Link href="https://play.google.com/store">
      <Img src={play} alt="google play" />
    </Link>
  </Download>
);
