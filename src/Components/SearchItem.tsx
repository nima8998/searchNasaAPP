import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import noImage from '../img/noImage.png';

export default function SearchItem({ props }: any) {
  let [images, setImages]: any = useState<String>();
  useEffect(() => {
    props &&
      axios
        .get(`${props.href}`)
        .then((res: any) => {
          const data = res.data;
          const pictureData = data.find(
            (i: any) => i.substring(i.length - 4) === '.jpg'
          );
          setImages(pictureData);
        })
        .catch((err: any) => console.log('Background image not found', err));
  }, [props]);
  return (
    <Container
      title={props.data[0].title}
      style={{
        backgroundImage: `url(${images ? images : noImage})`
      }}
    ></Container>
  );
}

const Container = styled.div`
  height: 180px;
  width: 180px;
  background-position: center;
  background-size: cover;

  border: 1px solid white;
`;
