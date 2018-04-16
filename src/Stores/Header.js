import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Logo from '../ui/Logo/';
import Btn from '../ui/Button';

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

export default () => (
  <Header>
    <Grid>
      <Row middle="xs">
        <Col xs={5}>
          <Logo />
        </Col>
        <Col xs={7}>
          <Btn>Sign In</Btn>
          <RegBtn>Register</RegBtn>
        </Col>
      </Row>
    </Grid>
  </Header>
);
