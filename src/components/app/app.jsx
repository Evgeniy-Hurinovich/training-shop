// import { useEffect } from 'react';
import {Route, Switch } from 'react-router-dom';
//useLocation,
import { Header } from '../header';
import { Main } from '../../pages/main-content';
import { ItemPage } from '../../pages/item-page';

import { PageThings } from '../../pages/page-things';

import { Footer } from '../footer';
import './app.scss';

export const App = () => {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    <div className='app' data-test-id='app'>
      <Header />  
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/women'>
          <ItemPage productType='women' />
        </Route>
        <Route exact path='/men'>
          <ItemPage productType='men' />
        </Route>

        <Route path='/women/:id'>
          <PageThings productType='women' />
        </Route>
        <Route path='/men/:id'>
          <PageThings productType='men' />
        </Route>
      </Switch>
      <Footer />















    </div>
  );
};
