import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import { useApiContext } from '../Context/API';
import Loader from '../Components/Loader';
import SearchContainer from './SearchContainer';

export default function HomeContainer() {
  let { nasaPic }: any = useApiContext();

  return (
    <Container>
      {nasaPic === undefined ? <Loader /> : <Header props={nasaPic.data} />}
      <SearchContainer />
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  min-height: 250vh;
  background-color: #eaeded;
`;
