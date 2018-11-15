import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HeaderPortfolio from '../playground/HeaderPortfolio';
import HomePage from '../playground/HomePage';
import PortfoliosPage from '../playground/PortfoliosPage';
import PortfolioPage from '../playground/PortfolioPage';
import ContactPage from '../playground/ContactPage';
import ErrorPage from '../components/ErrorPage';

const PortfolioRouter = () => (
  <BrowserRouter>
    <div>
      <HeaderPortfolio />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/portfolio/:id" component={PortfolioPage} exact />
        <Route path="/portfolio" component={PortfoliosPage} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default PortfolioRouter;
