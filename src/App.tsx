import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Header, Main} from "./components";

const Home = React.lazy(() =>
  import("./views/Home/Home" /* webpackChunkName: 'Home' */).then(({Home}) => ({
    default: Home,
  })),
);

const About = React.lazy(() =>
  import("./views/About/About" /* webpackChunkName: 'About' */).then(
    ({About}) => ({
      default: About,
    }),
  ),
);

export function App(): JSX.Element {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Main>
          <React.Suspense fallback={<div>{"Loading..."}</div>}>
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
