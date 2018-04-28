import React from 'react';
import styled from 'styled-components';

import arrow from './arrow.svg';

const Arrow = styled.div`
  position: fixed;
  right: 16px;
  bottom: 24px;
  width: 64px;
  height: 64px;

  background-color: #59bd5a;
  border-radius: 2px;

  :after {
    content: '';
    position: absolute;
    width: 15px;
    height: 25px;
    top: 19px;
    left: 24px;
    background-image: url(${arrow});
  }
`;

export default class ArrowUp extends React.Component {
  state = {
    btnShowed: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleClick = () => {
    window.scrollTo(0, 0);
  };

  handleScroll = () => {
    const pageOffset = window.pageYOffset;
    const windowHeight = window.innerHeight;

    if (pageOffset > windowHeight && !this.state.btnShowed) {
      this.setState(prevState => ({
        btnShowed: !prevState.btnShowed,
      }));
    }

    if (pageOffset < windowHeight && this.state.btnShowed) {
      this.setState(prevState => ({
        btnShowed: !prevState.btnShowed,
      }));
    }
  };
  render() {
    return this.state.btnShowed ? <Arrow onClick={this.handleClick} /> : null;
  }
}
