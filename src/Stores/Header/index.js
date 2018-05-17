import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Logo from '../../ui/Logo/';
import Btn from '../../ui/Button';
import Form from './../Form';

import Cart from './Cart';

const Header = styled.header`
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

const Toolbar = styled.div`
  text-align: right;
`;

export default ({ productsInCart }) => (
  <Header>
    <Grid>
      <Row middle="xs">
        <Col xs={4} md={2}>
          <Logo />
        </Col>
        <Col xs={1} md={6}>
          <HeaderForm>
            <Form />
          </HeaderForm>
        </Col>
        <Col xs={7} md={4} lg={3} lgOffset={1}>
          <Toolbar>
            <Btn>Sign In</Btn>
            <RegBtn>Register</RegBtn>
            <Cart productsInCart={productsInCart} />
          </Toolbar>
        </Col>
      </Row>
    </Grid>
  </Header>
);
