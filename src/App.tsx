import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import HomeContainer from './Container/HomeContainer';
import SearchDetailContainer from './Container/SearchDetailContainer';
import { ApiProvider } from './Context/API';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <ApiProvider>
      <div className="App">
        <HashRouter basename='/'>
          <Switch>
            <Route path='/:nasaIdParam'>
              <SearchDetailContainer/>
            </Route>
            <Route path='/'>
              <HomeContainer />
            </Route>
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    </ApiProvider>
  );
}

export default App;
