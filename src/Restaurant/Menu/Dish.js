import React from 'react';
import styled from 'styled-components';

const Dish = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(117, 117, 117, 0.2);
  background-color: #fff;

  @media screen and (min-width: 768px) {
    border: 1px solid rgba(117, 117, 117, 0.2);
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 102px);

  @media screen and (min-width: 768px) {
    padding: 16px 16px 16px 24px;
  }
`;

const Title = styled.p`
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  color: #1d1d1d;
  margin: 0 0 4px;

  max-width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    max-width: none;
    font-size: 16px;
  }
`;

const Desc = styled.p`
  font-weight: normal;
  line-height: 21px;
  font-size: 13px;
  color: #626262;
  margin: 0 0 16px;
  overflow: hidden;
  height: 45px;
`;

const Price = styled.p`
  font-weight: 500;
  line-height: 21px;
  font-size: 15px;
  color: #1d1d1d;
  margin: auto 0 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Picture = styled.div`
  display: block;
  width: 102px;
  height: 102px;
  background-image: url(${props => (props.bgSrc ? `./images/dishes/${props.bgSrc}` : '')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%, 50%;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 160px;
  }

  @media screen and (min-width: 920px) {
    width: 170px;
    height: 160px;
  }
`;

export default ({ dish }) => (
  <Dish>
    <Text>
      <Title>{dish.title}</Title>
      <Desc>{dish.desc}</Desc>
      <Price>{dish.price}</Price>
    </Text>

    <Picture bgSrc={dish.src} />
  </Dish>
);
