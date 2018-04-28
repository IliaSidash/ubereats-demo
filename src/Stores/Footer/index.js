import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Logo from '../../ui/Logo/';
import Socials from './Socials';
import Menu from './Menu';
import Download from './Download';

import world from './images/world.svg';
import fb from './images/facebook.svg';
import tw from './images/twitter.svg';
import ins from './images/instagram.svg';

const socials = [
  {
    id: 1,
    href: 'https://facebook.com/',
    src: fb,
    alt: 'facebook',
  },
  {
    id: 2,
    href: 'https://twitter.com/',
    src: tw,
    alt: 'twitter',
  },
  {
    id: 3,
    href: 'https://www.instagram.com/',
    src: ins,
    alt: 'instagram',
  },
];

const Footer = styled.footer`
  padding: 56px 0 4px;
  background: #262626;
`;

const Hr = styled.hr`
  margin: 40px 0 8px;
  opacity: 0.4;
  line-height: normal;
`;

const CustomSelect = styled.div`
  position: relative;
  :before {
    content: '';
    position: absolute;
    left: 16px;
    top: 12px;
    background-image: url(${world});
    background-position: right;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
  }
`;
const Select = styled.select`
  width: 100%;
  font-weight: normal;
  line-height: normal;
  font-size: 13px;
  color: #ffffff;
  padding: 12px 12px 12px 48px;
  background: #3b3b3b;
  border-radius: 2px;
  text-transform: uppercase;
  border: none;
`;

const HashTag = styled.div`
  font-weight: normal;
  line-height: normal;
  font-size: 16px;
  color: #ffffff;
  margin: 32px 0 20px;
`;

const Sharp = styled.span`
  font-weight: normal;
  line-height: normal;
  font-size: 16px;
  color: #49a144;
`;

const Link = styled.a`
  display: inline-block;

  text-decoration: none;
  font-weight: normal;
  line-height: normal;
  font-size: 11px;

  color: #ffffff;
  margin: 0 0 24px;
`;

export default () => (
  <Footer>
    <Grid>
      <Logo whiteLogo />
      <Hr />
      <Row>
        <Col xs={7}>
          <CustomSelect>
            <Select>
              <option>English</option>
            </Select>
          </CustomSelect>
        </Col>
      </Row>
      <HashTag>
        <Sharp>#</Sharp>
        UberEats
      </HashTag>
      <Socials socials={socials} />
      <Menu />
      <Download />
      <Row>
        <Col xs={12}>
          <Link href="./">© 2017 Uber Technologies Inc.</Link>
        </Col>
        <Col xs={12}>
          <Link href="./">Privacy</Link>
        </Col>
        <Col xs={12}>
          <Link href="./">Terms</Link>
        </Col>
      </Row>
    </Grid>
  </Footer>
);
