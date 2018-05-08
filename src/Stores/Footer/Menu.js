import React from 'react';
import styled from 'styled-components';

const Menu = styled.nav``;

const Link = styled.a`
  display: block;
  margin-bottom: 23px;
  text-decoration: none;
  font-weight: normal;
  line-height: normal;
  font-size: 13px;
  color: #ffffff;
`;

export default ({ menu }) => (
  <Menu>
    {menu.map(link => (
      <Link key={link.id} href={link.href}>
        {link.text}
      </Link>
    ))}
  </Menu>
);
