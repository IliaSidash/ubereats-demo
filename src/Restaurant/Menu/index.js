import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Dish from './Dish';

const Menu = styled.section`
  padding: 111px 0 14px;
`;

const Title = styled.h2`
  font-weight: normal;
  line-height: 34px;
  font-size: 22px;
  text-align: center;
  position: relative;
  color: #1d1d1d;
  padding-bottom: 12px;
  margin: 0 0 43px;

  :after {
    content: '';
    position: absolute;
    width: 50px;
    height: 1px;
    background: #757575;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 20px;
  }
`;

export default ({ menu }) => (
  <Menu>
    <Grid>
      <Title>Закуски</Title>
      <Row>
        {menu.map(dish => (
          <Col xs={12} lg={6} key={dish.id}>
            <Dish dish={dish} />
          </Col>
        ))}
      </Row>
    </Grid>
  </Menu>
);
