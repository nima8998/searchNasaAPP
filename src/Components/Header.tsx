import React from 'react';
import styled from 'styled-components';

export default function Header({ props }: any) {
  return (
    <Container style={{ backgroundImage: `url(${props.hdurl})` }}>
      <p>
        Copyright: <span className="header_copyright">{props.copyright} ({props.date})</span>
      </p>
      <i className="header_explanation">{props.explanation}</i>
    </Container>
  );
}

const Container = styled.header`
  height: 95vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  padding: 15px;
  gap: 2em;

  .header_copyright {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .header_explanation {
    width: 25%;
    max-height: 35%;
    overflow: auto;
    padding-right: 15px;
    line-height: 20px;
    word-spacing: 5px;
    background-color: #13131396;
    padding: 15px;
    border-radius: 15px;
  }
`;
