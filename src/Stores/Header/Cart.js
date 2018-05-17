import React, { Component } from 'react';
import styled from 'styled-components';

const Cart = styled.div`
  position: relative;
  top: 9px;
  display: inline-block;
  margin-left: 27px;
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const Count = styled.span`
  color: #43a422;
  font-size: 14px;
  line-height: 22px;
  margin-left: 10px;
  vertical-align: top;
  display: inline-block;
  margin-top: 3px;
  font-weight: bold;
`;

const Svg = styled.svg`
  path {
    fill: #262626;
  }
`;

export default class Basket extends Component {
  state = {
    cartNotEmrty: false,
  };

  componentWillMount() {
    const { productsInCart } = this.props;
    if (productsInCart.length > 0) {
      this.setState({ cartNotEmrty: true });
    } else this.setState({ cartNotEmrty: false });
  }

  render() {
    const { productsInCart } = this.props;
    const { cartNotEmrty } = this.state;
    return (
      <Cart>
        <Svg
          width="19"
          height="23"
          viewBox="0 0 19 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Canvas" fill="none">
            <g id="basket">
              <path
                id="Rectangle-10"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 18.9474 0L 0 0L 0 11.7895C 0 13.9986 1.79089 15.7895 4 15.7895L 14.9474 15.7895C 17.1565 15.7895 18.9474 13.9986 18.9474 11.7895L 18.9474 0ZM 4 14.2895C 2.61926 14.2895 1.5 13.1702 1.5 11.7895L 1.5 1.5L 17.4474 1.5L 17.4474 11.7895C 17.4474 13.1702 16.3281 14.2895 14.9474 14.2895L 4 14.2895Z"
                transform="translate(0 6.85876)"
              />
              <path
                id="Rectangle-3"
                d="M 1.5 11.1525L 1.5 4.96053C 1.5 3.04933 3.04933 1.5 4.96053 1.5C 6.87172 1.5 8.42105 3.04933 8.42105 4.96053L 8.42105 11.1525C 8.42105 11.5667 8.75684 11.9025 9.17105 11.9025C 9.58527 11.9025 9.92105 11.5667 9.92105 11.1525L 9.92105 4.96053C 9.92105 2.2209 7.70015 0 4.96053 0C 2.2209 0 0 2.2209 0 4.96053L 0 11.1525C 0 11.5667 0.335786 11.9025 0.75 11.9025C 1.16421 11.9025 1.5 11.5667 1.5 11.1525Z"
                transform="translate(4.51318 0.907532)"
              />
            </g>
          </g>
        </Svg>
        {cartNotEmrty ? <Count>{productsInCart.length}</Count> : null}
      </Cart>
    );
  }
}
