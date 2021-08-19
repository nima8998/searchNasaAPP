import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from './Pagination';
import SearchItem from './SearchItem';

export default function Search({ props }: any) {
  const [articles, setArtciles]: any = useState([]);
  const [currentPage, setCurrentPage]: any = useState(1);
  const [articlesPerPage, setArticlesPerPage]: any = useState(27);

  useEffect(() => {
    const fetchArticles = () => {
      const res = props;
      setArtciles(res);
    };
    fetchArticles();
  }, [props]);

  // get current post
  const indexOfLastPost = currentPage * articlesPerPage;
  const indexOfFirstPost = indexOfLastPost - articlesPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  // change page

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <div className="results" id="search">
        {props === undefined ? (
          <h1>Cargando...</h1>
        ) : (
          currentPosts.map((i: any, idx: number) => (
            <Link data-aos="fade-up" key={idx} to={i.data[0].nasa_id}>
              <SearchItem props={i} />
            </Link>
          ))
        )}
      </div>
      <div>
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={articles.length}
          Paginate={paginate}
        />
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1em;
  width: 95%;
  margin: auto;
  padding: 2em 0;

  .results {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
  }
`;
