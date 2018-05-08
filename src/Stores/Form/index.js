import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import location from './location.svg';

const Form = styled.form`
  display: flex;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Label = styled.label`
  font-weight: normal;
  line-height: normal;
  font-size: 11px;

  color: #626262;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const LabelText = styled.span`
  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
`;

const CustomInput = styled.div`
  position: relative;

  :before {
    content: '';
    position: absolute;
    left: 11px;
    top: 12px;
    width: 13px;
    height: 15px;
    background-image: url(${location});
    background-size: cover;
  }

  input {
    max-width: none;
    width: 100%;
    text-transform: none;
    padding-left: 35px;
  }
`;

const InputGroup = styled.div`
  margin-right: 16px;

  :last-child {
    flex-grow: 1;
    margin-right: 0;
  }
`;

const Input = styled.input`
  margin-top: 8px;
  display: block;
  padding: 8px 15px;
  max-width: 65px;

  font-weight: normal;
  line-height: 24px;
  font-size: 13px;

  background-color: transparent;
  color: #1d1d1d;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 2px;
  text-transform: uppercase;

  ::placeholder {
    color: #1d1d1d;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export default () => (
  <Form>
    <InputGroup>
      <Label>
        <LabelText>When</LabelText>
        <Input defaultValue="asap" />
      </Label>
    </InputGroup>

    <InputGroup>
      <Label>
        <LabelText>To</LabelText>
        <CustomInput>
          <Input defaultValue="ul. Bolshaya Dmitrovka,22 " />
        </CustomInput>
      </Label>
    </InputGroup>
  </Form>
);
