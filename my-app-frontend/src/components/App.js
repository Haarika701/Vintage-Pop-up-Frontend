import React from "react";
import {Route, Switch} from 'react-router-dom'
import NavBar from './Navbar';
import Homepage from './Homepage';
import Sell from './Sell';
import Buy from './Buy';
import './index.css';


const MY_URL= 'http://localhost:9292/items'

function App() {
  return (
    <div className="App">
      
      <h1>Overpriced Vintage Shop</h1>
      <NavBar/>
      <Switch>
        <Route exact path = '/'>
          <Homepage url = {MY_URL}/>
          
        </Route>
        <Route path = '/Sell'>
          <Sell url = {MY_URL} key= {"New Form"}/>
        </Route>
        <Route path ='/Buy/:id'>
          <Buy />
          </Route>
      </Switch>
      
    </div>
  );
}

export default App;
