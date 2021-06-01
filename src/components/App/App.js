import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FrontPage from '../FrontPage/FrontPage.js';
import Article from '../Article/Article.js';


function App() {

  return (
    <Switch classname='app'>
      <Route exact path='/article' component={ Article }/>
      <Route path='/' component={ FrontPage }/>
    </Switch>
  );
}

export default App;
