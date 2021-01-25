import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import Upload from './pages/Upload.js';
import Header from './components/Header';

const App = () => {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Route path='/upload' component={Upload}/>
          <Route path='/' component={Home}/>
        </Switch>
      </HashRouter>
    );
}

export default App;
