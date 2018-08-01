import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addToCard } from '../../AC/';

const Picture = styled.div`
  width: 290px;
  height: 312px;
  background-image: url(${props => (props.bgSrc ? `./images/dishes/${props.bgSrc}` : '')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%, 50%;

  @media screen and (min-width: 576px) {
    width: 550px;
  }
`;

const Title = styled.h3`
  margin: 0 0 12px;
  font-size: 28px;
`;

const Text = styled.div`
  padding: 32px;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: calc(100% - 64px);
  margin: 0 32px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(67, 164, 34);
  border-image: initial;
  background: rgb(67, 164, 34);
  font-size: 14px;
  color: #fff;
  padding: 10px;
  outline: none;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

const Desc = styled.p`
  margin: 0;
  line-height: 21px;
  font-size: 13px;
  color: #626262;
`;

const Price = styled.span`
  position: absolute;
  right: 10px;
  margin-left: auto;
`;

class Modal extends React.Component {
  handleAdd = () => {
    const { addToCard, restaurantID, dishId } = this.props;
    
    addToCard(restaurantID, dishId);
  };

  render() {
    const { dishId, dishes } = this.props;
    return (
      <div>
        <Picture bgSrc={dishes[dishId].src} />
        <Text>
          <Title>{dishes[dishId].title}</Title>
          <Desc>{dishes[dishId].desc}</Desc>
        </Text>
        <Button onClick={this.handleAdd}>
          Добавить в корзину <Price>{dishes[dishId].price} ₽</Price>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ restaurants }) => ({
  dishes: restaurants.dishes,
});

const mapDispatchToProps = () => ({ addToCard });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
