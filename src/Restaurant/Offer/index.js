import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import background from './images/bg-restaurant.jpg';
import backgroundTablet from './images/bg-restaurant-tablet.jpg';
import backgroundDesctop from './images/bg-restaurant-desctop.jpg';

const Offer = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTablet});
    padding: 80px 0;
  }

  @media screen and (min-width: 992px) {
    background-image: url(${backgroundDesctop});
  }
`;

const Inner = styled.div`
  position: relative;
  top: 93px;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(117, 117, 117, 0.2);
  border-radius: 2px;
  padding: 24px 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 38px 48px;
    top: 0;
  }
`;

const Title = styled.h1`
  font-weight: normal;
  line-height: normal;
  font-size: 24px;
  margin: 0 0 40px;
  color: #1d1d1d;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

const Desc = styled.p`
  font-weight: normal;
  line-height: normal;
  font-size: 14px;

  color: #626262;
  margin: 0 0 16px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const Time = styled.span`
  display: inline-block;
  font-weight: normal;
  line-height: normal;
  font-size: 13px;
  text-align: center;

  color: #ffffff;
  padding: 9px 16px 8px;
  background-color: #262626;
  border-radius: 16px;
`;

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default () => (
  <Offer>
    <Grid>
      <Col md={7} lg={6} xl={5}>
        <Inner>
          <Title>Трактир «Пушкин»</Title>
          <Wrapper>
            <Desc>₽₽₽ • Европейская</Desc>
            <Time>40 - 50 Min</Time>
          </Wrapper>
        </Inner>
      </Col>
    </Grid>
  </Offer>
);
