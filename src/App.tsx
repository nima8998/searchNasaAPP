import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomeContainer from './Container/HomeContainer';
import SearchDetailContainer from './Container/SearchDetailContainer';
import { ApiProvider } from './Context/API';
import './App.css';
import Footer from './Components/Footer';

const routes = [
  {
    path: '/:nasaIdParam',
    exact: true,
    component: () => <SearchDetailContainer />
  },
  {
    path: '/',
    exact: true,
    component: () => <HomeContainer />
  }
];

function App() {
  return (
    <ApiProvider>
      <div className="App">
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}
          </Switch>
          <Footer />
        </Router>
      </div>
    </ApiProvider>
  );
}

export default App;
