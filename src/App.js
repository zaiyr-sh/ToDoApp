import React from 'react';
import './App.css';
import ToDoApp from './components/ToDoApp';
import './components/ToDoApp.css';

import All from './container/All'
import Complete from './container/Complete'
import Incomplete from './container/Incomplete'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


function App(props) {
  return (
    <div className="App">
     <BrowserRouter>
        <nav className="intro__component">
          <Link to="/" className="intro__nav">Home</Link>
          <Link to="/all" className="intro__nav">All</Link>
          <Link to="/complete" className="intro__nav">Complete</Link>
          <Link to="/incomplete" className="intro__nav">Incomplete</Link>
          <Switch>
            <Route path="/" exact component={() => <ToDoApp/>} ></Route>
            <Route path="/all" exact component={() => <All />} ></Route>
            <Route path="/complete" exact component={() => <Complete />} ></Route>
            <Route path="/incomplete" exact component={() => <Incomplete />} ></Route>
          </Switch>
        </nav>
      </BrowserRouter>

      {/* <ToDoApp /> */}

    </div>
  );
}

export default App;
