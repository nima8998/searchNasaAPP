import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import axios from 'axios';
import Loader from '../Components/Loader';
import SearchDetail from '../Components/SearchDetail';

export default function SearchDetailContainer() {
  let { nasaIdParam }: any = useParams();
  let [images, setImages]: any = useState<Array<String>>([]);
  let [article, setArticle]: any = useState();
  let [video, setVideo]: any = useState();

  useEffect(() => {
    axios
      .get(
        `https://images-assets.nasa.gov/image/${nasaIdParam}/collection.json`
      )
      .then((res: any) => {
        const data = res.data;
        const jpg = data.filter(
          (i: any) => i.substring(i.length - 3) === 'jpg'
        );
        setImages(jpg);
      })
      .catch((err: any) =>
        console.log('Error SearchDetailContainer imgAxios', err)
      );
  }, [nasaIdParam]);
  useEffect(() => {
    axios
      .get(`https://images-api.nasa.gov/search?q=${nasaIdParam}`)
      .then((res) => setArticle(res.data.collection.items[0].data[0]))
      .catch((err) =>
        console.log('Error SearchDetailContainer setArticleAxios', err)
      );
  }, [nasaIdParam]);
  useEffect(() => {
    axios
      .get(
        `https://images-assets.nasa.gov/image/${nasaIdParam}/collection.json`
      )
      .then((res: any) => {
        const data = res.data;
        const mp4 = data.filter(
          (i: any) => i.substring(i.length - 4) === '.mp4'
        );
        setVideo(mp4);
      })
      .catch((err: any) =>
        console.log('Error SearchDetailContainer imgAxios', err)
      );
  }, [nasaIdParam]);
  return (
    <Container>
      {article === undefined ? (
        <Loader />
      ) : (
        <SearchDetail props={article} images={images} videos={video} />
      )}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
