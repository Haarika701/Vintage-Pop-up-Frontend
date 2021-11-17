import React from "react";
import VintagePage from "./VintagePage";
import {Route, Switch} from 'react-router-dom'
import NavBar from './Navbar';
import Homepage from './Homepage';
// import Sell from './Sell';


const MY_URL= 'http://localhost:9292/items'

function App() {
  return (
    <div className="App">
      
    
      <NavBar/>
      <Switch>
        <Route exact path = '/'>
          <Homepage url = {MY_URL}/>
          <VintagePage />
        </Route>
        <Route path = '/Sell'>
          {/* <Sell/> */}
        </Route>
        {/* <Route path ='/Buy'>
          <Buy/>
          </Route> */}

      
      
      
      
      
      
      </Switch>
      
    </div>
  );
}

export default App;
