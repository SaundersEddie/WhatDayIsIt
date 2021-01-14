import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import DayBody from './components/DayBody/DayBody';
import Usage from './pages/Usage/Usage';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={DayBody} />
          <Route path="/about" component={About} />
          <Route path="/usage" component={Usage} />
         </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
