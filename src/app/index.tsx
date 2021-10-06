/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.css';
import { PageHome } from './pages/pageHome';
import { Not404 } from './containers/404';
export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        // titleTemplate="%s - React Boilerplate"
        // defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route component={Not404} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
