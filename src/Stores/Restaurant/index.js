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

const ImgNotFound = styled.img`
  display: block;
  margin: 0 auto;
`;

const TextNotFound = styled.p`
  text-align: center;
`;

const getRestaurant = restaurant => (
  <Col xs={12} md={6} lg={4} key={restaurant.id}>
    <Restaurant href="./" to={`restaurant/${restaurant.id}`}>
      <Img src={`./images/${restaurant.src}`} alt={restaurant.alt} />
      <Name>{restaurant.name}</Name>
      <Desc>{restaurant.desc}</Desc>
      <Time>{restaurant.time}</Time>
    </Restaurant>
  </Col>
);

const getNotFound = () => (
  <Col xs={12}>
    <ImgNotFound
      src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats/static/images/components/not-found/fail-cookie-55da6a7e40.gif"
      alt="cookie"
    />
    <TextNotFound>По запросу ничего не найдено</TextNotFound>
  </Col>
);

export default ({ restaurants }) => (
  <Grid>
    <Title>Moscow Restaurants</Title>
    <Row>
      {restaurants.length > 0
        ? restaurants.map(restaurant => getRestaurant(restaurant))
        : getNotFound()}
    </Row>
  </Grid>
);
