import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import whiteLogo from './white-logo.svg';

const Logo = styled.a``;

const Img = styled.img`
  width: ${props => (props.whiteLogo ? '192px' : '107px')};
  height: ${props => (props.whiteLogo ? '20px' : '11px')};
`;

export default props => (
  <Logo href="#">
    <Img whiteLogo={props.whiteLogo} src={props.whiteLogo ? whiteLogo : logo} alt="ubereats" />
  </Logo>
);
