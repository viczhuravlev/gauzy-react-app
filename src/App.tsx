import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {GlobalStyles, Header, Main} from './components';

const preloadHome = import('./views' /* webpackChunkName: 'Home' */);
const Home = React.lazy(() =>
  preloadHome.then(({Home}) => ({
    default: Home,
  })),
);

const preloadAbout = import('./views' /* webpackChunkName: 'About' */);
const About = React.lazy(() =>
  preloadAbout.then(({About}) => ({
    default: About,
  })),
);

export function App(): JSX.Element {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Main>
          <React.Suspense fallback={<div>{'Loading...'}</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </React.Suspense>
        </Main>
      </BrowserRouter>
    </React.StrictMode>
  );
}
