import React from 'react'
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import BreweryList from "./Components/BreweryList";
import BeerList from "./Components/BeerList";
import BeerDetail from "./Components/BeerDetail";
import BeerStuff from "./beerStuff.js";

window.beerStuff = BeerStuff;

window.store = (data, id) => {
  window.localStorage.setItem(id, data);
}
window.load = (id) => {
  const data = window.localStorage.getItem(id);
  if (!data) {
    return "";
  }
  return data;
}

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/breweries" component={BreweryList}/>
      <Route exact path="/breweries/:breweryId/" component={BeerList}/>
      <Route exact path="/breweries/:breweryId/beer/:beerId" component={BeerDetail}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <Link to="/breweries">Haandfest</Link>
  </div>
)

export default App
