import React from 'react'
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import BreweryList from "./Components/BreweryList";
import BeerList from "./Components/BeerList";
import BeerStuff from "./beerStuff.js";

window.beerStuff = BeerStuff;

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/breweries" component={BreweryList}/>
      <Route exact path="/breweries/:breweryId/" component={BeerList}/>
      <Route exact path="/breweries/:breweryId/:beerId" component={BeerDetail}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const BeerDetail = () => (
  <div>
    <h2>BeerDetail</h2>
  </div>
)

export default App
