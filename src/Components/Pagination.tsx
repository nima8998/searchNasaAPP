import React from 'react';
import styled from 'styled-components';

export default function Pagination({ articlesPerPage, totalArticles, Paginate }: any) {
  const pageNumbers: any = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      <ul>
        {pageNumbers.map((number: any) => (
          <li key={number} onClick={()=> Paginate(number)}>
            <span >{number}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.nav`
  ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
    padding: 0;
    list-style: none;
    li {
        cursor: pointer;
        border: 1px solid #fff;
      height: 45px;
      width: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff5a;
      font-weight: 600;
      font-size: 25px;
    }
    span {
      color: #00ffff;
      text-decoration: none;
      &:visited {
        color: #00ffff;
      }
    }
  }
`;
