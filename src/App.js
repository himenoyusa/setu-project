import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';
import store from './redux/configureStore';
import Gallery from './pages/gallery';
import Login from './common/loginBar';
import Footer from './common/footer';
import Picture from './pages/picture';
import Admin from './pages/admin';
import Profile from './pages/profile';
import bg from './images/bg2.jpg';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Login />
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route exact path="/picture">
            <Picture />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
      {Footer()}
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    background-image: url(${bg});
  }
`;
