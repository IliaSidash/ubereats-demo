import React from 'react';
import styled from 'styled-components';

const Socials = styled.div`
  display: flex;
  align-items: center;
  margin: 42px;
`;

const Link = styled.a`
  display: block;
  margin-right: 20px;
  :last-child {
    margin-right: 0px;
  }

  :hover {
    img {
      opacity: 0.7;
    }
  }
`;

const Img = styled.img``;

export default props => (
  <Socials>
    {props.socials.map(social => (
      <Link key={social.id} href={social.href}>
        <Img src={social.src} alt={social.alt} />
      </Link>
    ))}
  </Socials>
);
