import React from 'react';
import styled from 'styled-components';

const Dish = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(117, 117, 117, 0.2);

  @media screen and (min-width: 768px) {
    border: 1px solid rgba(117, 117, 117, 0.2);
    background-color: rgba(117, 117, 117, 0.04);
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 16px 0 16px 24px;
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

const Picture = styled.picture``;

const Img = styled.img`
  display: block;
`;

export default ({ dish }) => (
  <Dish>
    <Text>
      <Title>{dish.title}</Title>
      <Desc>{dish.desc}</Desc>
      <Price>{dish.price}</Price>
    </Text>

    <Picture>
      <source media="(min-width: 992px)" srcSet={dish.srcDesctop} />
      <source media="(min-width: 768px)" srcSet={dish.srcTablet} />
      <Img src={dish.src} alt={dish.alt} />
    </Picture>
  </Dish>
);
