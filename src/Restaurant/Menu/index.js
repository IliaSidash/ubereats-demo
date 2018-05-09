import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Dish from './Dish';

import dish1 from './images/dish-1.jpg';
import dish2 from './images/dish-2.jpg';
import dish3 from './images/dish-3.jpg';
import dish4 from './images/dish-4.jpg';
import dish5 from './images/dish-5.jpg';
import dish6 from './images/dish-6.jpg';
import dishTablet1 from './images/dish-1-tablet.jpg';
import dishTablet2 from './images/dish-2-tablet.jpg';
import dishTablet3 from './images/dish-3-tablet.jpg';
import dishTablet4 from './images/dish-4-tablet.jpg';
import dishTablet5 from './images/dish-5-tablet.jpg';
import dishTablet6 from './images/dish-6-tablet.jpg';
import dishDesctop1 from './images/dish-1-desctop.jpg';
import dishDesctop2 from './images/dish-2-desctop.jpg';
import dishDesctop3 from './images/dish-3-desctop.jpg';
import dishDesctop4 from './images/dish-4-desctop.jpg';
import dishDesctop5 from './images/dish-5-desctop.jpg';
import dishDesctop6 from './images/dish-6-desctop.jpg';

const Menu = styled.section`
  padding: 111px 0 14px;
`;

const menu = [
  {
    id: 1,
    title: 'Сельдь на бородинском хлебе',
    desc: 'С яйцом и огурцом',
    price: '240 ₽',
    src: dish1,
    srcTablet: dishTablet1,
    srcDesctop: dishDesctop1,
    alt: 'alt_text',
  },
  {
    id: 2,
    title: 'Соленья ассорти',
    desc: '',
    price: '320 ₽',
    src: dish2,
    srcTablet: dishTablet2,
    srcDesctop: dishDesctop2,
    alt: 'alt_text',
  },
  {
    id: 3,
    title: 'Грибы маринованные',
    desc: '',
    price: '300 ₽',
    src: dish3,
    srcTablet: dishTablet3,
    srcDesctop: dishDesctop3,
    alt: 'alt_text',
  },
  {
    id: 4,
    title: 'Сало домашнее с горчицей',
    desc: '',
    price: '320 ₽',
    src: dish4,
    srcTablet: dishTablet4,
    srcDesctop: dishDesctop4,
    alt: 'alt_text',
  },
  {
    id: 5,
    title: 'Малосольная семга',
    desc: '',
    price: '350 ₽',
    src: dish5,
    srcTablet: dishTablet5,
    srcDesctop: dishDesctop5,
    alt: 'alt_text',
  },
  {
    id: 6,
    title: 'Язык говяжий с хреном',
    desc: '',
    price: '350 ₽',
    src: dish6,
    srcTablet: dishTablet6,
    srcDesctop: dishDesctop6,
    alt: 'alt_text',
  },
];

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
  }
`;

export default props => (
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
