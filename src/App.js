import React from "react";
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";

import './App.css';

import Home from "./Components/Pages/Home"
//renders html
function App()
{
  return (

    <Router>

      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>

    </Router>

  );
}


export default App;