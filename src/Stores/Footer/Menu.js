import React from 'react';
import styled from 'styled-components';

const menu = [
  {
    id: 1,
    href: '#',
    text: 'About UberEats',
  },
  {
    id: 2,
    href: '#',
    text: 'Become a Delivery Partner',
  },
  {
    id: 3,
    href: '#',
    text: 'Become a Restaurant Partner',
  },
  {
    id: 4,
    href: '#',
    text: 'See all cities',
  },
  {
    id: 5,
    href: '#',
    text: 'Pricing',
  },
  {
    id: 6,
    href: '#',
    text: 'Help',
  },
  {
    id: 7,
    href: '#',
    text: 'FAQs',
  },
];

const Menu = styled.nav``;

const Link = styled.a`
  display: block;
  margin-bottom: 23px;
  text-decoration: none;
  font-weight: normal;
  line-height: normal;
  font-size: 13px;
  color: #ffffff;

  :last-child {
    margin-bottom: 0;
  }
`;

export default () => (
  <Menu>
    {menu.map(link => (
      <Link key={link.id} href={link.href}>
        {link.text}
      </Link>
    ))}
  </Menu>
);
