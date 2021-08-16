import React from 'react';
import styled from 'styled-components';

export default function Loader() {
  return (
    <Container>
      <h1>Cargando...</h1>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  overflow: hidden;
  background-color: #000;
  color: #fff;
  h1 {
    animation: load infinite ease 750;
    @keyframes load {
      from {
        opacity: 0%;
      }
      to {
        opacity: 100%;
      }
    }
  }
`;
