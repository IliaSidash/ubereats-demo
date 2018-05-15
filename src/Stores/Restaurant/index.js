import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  font-weight: normal;
  line-height: 34px;
  font-size: 22px;
  margin: 0 0 14px;
  color: #1d1d1d;
`;
const Img = styled.img`
  position: relative;
  border-radius: 3px;
  transition: transform 0.3s;
`;

const Restaurant = styled(Link)`
  display: inline-block;
  margin-bottom: 36px;
  text-decoration: none;
  :hover {
    @media screen and (min-width: 992px) {
      ${Img} {
        transform: translateY(-10px);
      }
    }
  }
`;

const Name = styled.p`
  margin: 14px 0 4px;
  font-weight: normal;
  line-height: 21px;
  font-size: 14px;

  color: #626262;
`;

const Desc = styled.p`
  font-weight: normal;
  line-height: 21px;
  font-size: 14px;
  color: #626262;
  margin: 0 0 4px;
`;

const Time = styled.p`
  font-weight: normal;
  line-height: 21px;
  font-size: 13px;
  color: #1d1d1d;
  margin: 0;
`;

export default ({ restaurants }) => (
  <Grid>
    <Title>Moscow Restaurants</Title>
    <Row>
      {restaurants.map(restaurant => (
        <Col xs={12} md={6} lg={4} key={restaurant.id}>
          <Restaurant href="./" to={`restaurant/${restaurant.id}`}>
            <Img src={`./images/${restaurant.src}`} alt={restaurant.alt} />
            <Name>{restaurant.name}</Name>
            <Desc>{restaurant.desc}</Desc>
            <Time>{restaurant.time}</Time>
          </Restaurant>
        </Col>
      ))}
    </Row>
  </Grid>
);
