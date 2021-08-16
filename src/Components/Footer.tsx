import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <h2>
        Made with <span>♥</span> by{' '}
        <a
          href="https://www.linkedin.com/in/nicolasmauna/"
          rel="noreferrer"
          target="_blank"
        >
          Nicolas Mauna
        </a>
      </h2>
    </Container>
  );
}

const Container = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #37fb99;
    text-decoration: none;
    letter-spacing: 2px;
    &:hover {
      color: #37fb99;
    }
  }
  span {
    color: red;
    font-size: 35px;
  }
`;
