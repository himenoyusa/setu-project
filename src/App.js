import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';
import store from 'Redux/configureStore';
import Gallery from 'Pages/gallery';
import Login from 'Common/loginBar';
import Footer from 'Common/footer';
import Picture from 'Pages/picture';
import Admin from 'Pages/admin';
import Profile from 'Pages/profile';
import bg from 'Images/bg2.jpg';

export default function App() {
  // TODO: 图片页路由路径修改
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
