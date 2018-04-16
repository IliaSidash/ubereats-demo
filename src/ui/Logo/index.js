import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';

const Logo = styled.a``;

const Img = styled.img`
  width: 107px;
  height: 11px;
`;

export default () => (
  <Logo href="#">
    <Img src={logo} alt="ubereats" />
  </Logo>
);
