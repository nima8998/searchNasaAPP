import React, { createContext, useContext, useState, useEffect } from 'react';

export let ApiContext = createContext({});
export const useApiContext = () => useContext(ApiContext);

export let ApiProvider = ({ children }: any) => {
  const axios = require('axios');
  const API_SEARCH_URL = 'https://images-api.nasa.gov/search?q=';
  const API_APOD_URL = 'https://api.nasa.gov/planetary/apod';
  const API_KEY = '?api_key=UDoPSOaEJpDJuiY3QFkzHjXxqTsONewGfDQwpCMV';
  const [nasaPic, setNasaPic]: any = useState();
  const [searchValue, setSearchValue]: any = useState<Array<{}>>();

  useEffect(() => {
    axios
      .get(`${API_APOD_URL}${API_KEY}`)
      .then((data: Object) => {
        setNasaPic(data);
      })
      .catch((err: any) => {
        console.log('Error API_APOD_URL', err);
      });
  }, [axios]);

  const handleSearch = (input: any) => {
    axios
      .get(`${API_SEARCH_URL}${input}`)
      .then((res: any) => {
        setSearchValue(res);
      })
      .catch((err: any) => console.log('Error API_SEARCH_URL', err));
  };

  return (
    <ApiContext.Provider value={{ nasaPic, handleSearch, searchValue }}>
      {children}
    </ApiContext.Provider>
  );
};
