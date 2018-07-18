import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

// const getRestaurant = restaurant => (

// );

const getNotFound = () => (
  <Col xs={12}>
    <ImgNotFound
      src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats/static/images/components/not-found/fail-cookie-55da6a7e40.gif"
      alt="cookie"
    />
    <TextNotFound>По запросу ничего не найдено</TextNotFound>
  </Col>
);

const RestaurantComponent = ({ restaurants }) => {
  const { restaurantIDs, restaurantsInit } = restaurants;

  return (
    <Grid>
      <Title>Moscow Restaurants</Title>
      <Row>
        {restaurantIDs.map(id => (
          <Col xs={12} md={6} lg={4} key={id}>
            <Restaurant href="./" to={`restaurant/${id}`}>
              <Img src={`./images/${restaurantsInit[id].src}`} alt="alt" />
              <Name>{restaurantsInit[id].name}</Name>
              <Desc>{restaurantsInit[id].desc}</Desc>
              <Time>{restaurantsInit[id].time}</Time>
            </Restaurant>
          </Col>
        ))}
      </Row>
    </Grid>
  );
};

export default connect(({ restaurants }) => ({
  restaurants,
}))(RestaurantComponent);
