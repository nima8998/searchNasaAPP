import React from 'react';
import styled from 'styled-components';

export default function SearchDetail({ props, images, video }: any) {
  return (
    <Container>
      <h1>Article: {props.title}</h1>
      <div className="description">
        <p>{props.description}</p>
      </div>
      <div className="details">
        <h5>
          Photographer:
          <span className="important">
            {props.photographer}
            {props.secondary_creator}
          </span>
        </h5>
        <h5>
          Location: <span className="important">{props.location}</span>
        </h5>
      </div>
      <h4>Images (large, small, original)</h4>
      <div className="gallery">
        {images === undefined ? (
          <h2>Cargando imagenes...</h2>
        ) : (
          images.map((i: any, idx: number) => (
            <a href={i} key={idx} rel="noreferrer" target="_blank">
              <img loading="lazy" className="gallery_image" src={i} alt={i} />
            </a>
          ))
        )}
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  padding: 2em;
  .description {
    width: 75%;
    margin: auto;
  }
  .details {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
  .important {
    font-size: 20px;
  }
  .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    .gallery_image {
      width: 300px;
      object-fit: cover;
    }
  }
`;
