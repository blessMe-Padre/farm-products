import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRoute } from "../../const";

import ScrollTop from "../../components/ui/scroll-top/scroll-top";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page/main-page";
import Order from "../pages/order/order";

import features from "../../mocks/features";
import products from "../../mocks/products";
import { GlobalStyle } from "./style";


// Корневой компонент всего приложения
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage features={features} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.ORDER}>
            <PageWrapper pageUrl={AppRoute.ORDER}>
              <Order products={products} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;