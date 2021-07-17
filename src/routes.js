import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Repositorios from "./repositorios";
import Home from "./Home";


function Routes() {
  return (
     <BrowserRouter>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/repositorios' component={Repositorios} />
      </Switch>
     </BrowserRouter> 
  );
}

export default Routes;
