import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '../Components/Search';
import { useApiContext } from '../Context/API';

export default function SearchContainer() {
  let { handleSearch, searchValue, handleClear }: any = useApiContext();
  let [search, setSearch]: any = useState<String>();

  const handleValue = (event: any) => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleSearch(search);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input onChange={handleValue} type="text" placeholder="Moon" required />
        <div>
          <button type="submit">Search</button>
          <button type="reset" className="clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
      {searchValue ? (
        <Search props={searchValue.data.collection.items} />
      ) : null}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  margin-top: 3em;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1em;
    input {
      border: none;
      border-bottom: 2px solid #d9d9d9;
      outline: none;
      transition: all 250;
      padding: 15px;
      border-radius: 5px;
    }
    div {
      display: flex;
      justify-content: center;
      gap: 1em;
      .clear {
        color: #fb3737;
      }
      button {
        padding: 10px 20px;
        border-radius: 5px;
        outline: none;
        border: none;
        background-color: #dadada;
        font-size: 14px;
        letter-spacing: 2px;
        cursor: pointer;
        font-weight: 600;
        text-transform: uppercase;
        &:hover {
          background-color: #c7c7c7;
        }
      }
    }
  }
`;
