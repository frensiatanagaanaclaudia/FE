import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/login/Login'));
const LandingPage = React.lazy(() => import('./views/landingPage/index'));
const ArtikelDetail = React.lazy(() => import('./views/artikelDetail/index'));
const GaleriDetail = React.lazy(() => import('./views/galeriDetail/index'));


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/admin/login" name="Login Page" render={props => <Login {...props}/>} />
          
              <Route  path="/admin" name="Home" render={props => <TheLayout {...props}/>} />
              <Route exact path="/" name="Landing Page" render={props => <LandingPage {...props}/>} />
              <Route exact path="/artikel/:id" name="Artikel Page" render={props => <ArtikelDetail {...props}/>} />
              <Route exact path="/galeri/:id" name="Galeri Page" render={props => <GaleriDetail {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
