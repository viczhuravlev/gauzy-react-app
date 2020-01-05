import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyles, Header, Main } from './components';

const preloadHome = import('./views/Home/Home' /* webpackChunkName: 'Home' */);
const Home = lazy(() =>
  preloadHome.then(({ Home }) => ({
    default: Home
  }))
);

const preloadAbout = import('./views/About/About' /* webpackChunkName: 'About' */);
const About = lazy(() =>
  preloadAbout.then(({ About }) => ({
    default: About
  }))
);

export function App(): JSX.Element {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Suspense>
        </Main>
      </BrowserRouter>
    </React.StrictMode>
  );
}
