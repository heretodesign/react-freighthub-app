import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Route, Link, Switch } from "react-router-dom"
// import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import NoticeNav from './components/content/NoticeNav'

const Header = lazy(() => import('./components/layout/Header/Header'));
const ListPage = lazy(() => import('./pages/ListPage'));
const ViewPage = lazy(() => import('./pages/ViewPage'));

const renderLoader = () => <p>Loading...</p>;

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Suspense fallback={renderLoader()}>
          <Header />
        </Suspense>
        <NoticeNav />
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route exact path="/" component={ListPage} />
            <Route path="/pages/viewpage/:id" component={ViewPage} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
