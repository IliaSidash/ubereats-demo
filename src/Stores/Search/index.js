import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import search from './search.svg';

const Search = styled.div`
  position: relative;
  padding: 15px 24px;
  margin-bottom: 24px;

  border-bottom: 1px solid #757575;
  opacity: 0.3;
  :before {
    content: '';

    position: absolute;
    width: 16px;
    height: 16px;

    top: 50%;
    left: 0;
    transform: translateY(-50%);

    background-image: url(${search});
    background-size: 16px 16px;
  }

  @media screen and (min-width: 768px) {
    margin: 32px 0 56px;
  }
`;

const Input = styled.input`
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  width: 100%;

  color: #262626;
  mix-blend-mode: normal;
  background-color: transparent;
  border: none;
`;

export default ({ searchValue, handleInput }) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Search>
          <Input value={searchValue} onChange={handleInput} placeholder="Искать ресторан" />
        </Search>
      </Col>
    </Row>
  </Grid>
);
