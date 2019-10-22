import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About, Home } from './views';
import { GlobalStyles, Header, Main } from './components';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Main>
      </BrowserRouter>
    </>
  );
};
