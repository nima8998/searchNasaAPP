import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchItem from './SearchItem';

export default function Search({ props }: any) {
  return (
    <Container>
      {props === undefined ? (
        <h1>Cargando...</h1>
      ) : (
        props.map((i: any, idx: number) => (
          <Link replace data-aos='fade-up'  key={idx} to={i.data[0].nasa_id}>
            <SearchItem props={i} />
          </Link>
        ))
      )}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  width: 95%;
  margin: auto;
  padding: 2em 0;
`;
