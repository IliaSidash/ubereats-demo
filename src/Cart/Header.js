import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Logo from '../ui/Logo/';

const Header = styled.header`
  padding: 16px 0;
  box-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16);
  background-color: #fff;
`;

export default () => (
  <Header>
    <Grid>
      <Row middle="xs">
        <Col xs={4} md={2}>
          <Logo />
        </Col>
      </Row>
    </Grid>
  </Header>
);
