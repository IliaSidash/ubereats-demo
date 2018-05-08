import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import basket from './basket.svg';

import Logo from '../../ui/Logo/';
import Btn from '../../ui/Button';
import Form from './../Form';

const Header = styled.section`
  padding: 16px 0;
  box-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16);
  background-color: #fff;
`;

const RegBtn = styled(Btn)`
  background-color: #262626;
  color: #fff;
  margin-left: 12px;
`;

const HeaderForm = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }

  form {
    @media screen and (min-width: 768px) {
      display: flex;
      margin-bottom: 0;
    }
  }
`;

const Basket = styled.div`
  position: relative;
  top: 9px;
  display: inline-block;
  height: 22px;
  width: 23px;
  background-image: url(${basket});
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 27px;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export default () => (
  <Header>
    <Grid>
      <Row middle="xs">
        <Col xs={4} sm={2} md={3}>
          <Logo />
        </Col>
        <Col xs={1} sm={6} md={5}>
          <HeaderForm>
            <Form />
          </HeaderForm>
        </Col>
        <Col xs={7} sm={4} md={3} mdOffset={1}>
          <Btn>Sign In</Btn>
          <RegBtn>Register</RegBtn>
          <Basket />
        </Col>
      </Row>
    </Grid>
  </Header>
);
