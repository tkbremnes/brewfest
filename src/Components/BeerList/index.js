import { Link } from "react-router-dom";
import React from "react";

import BeerListItem from "../BeerListItem";
import "./style.css";

export default class BeerList extends React.Component {
  constructor({ match }) {
    super();
    this._breweryId = match.params.breweryId;
  }

  componentWillMount() {
    this.setState({
      brewery: window.beerStuff[this._breweryId]
    });
  }

  render() {
    return (
      <div className="BeerListWrapper">
        <header className="BreweryHeader">
          <h1>{ this.state.brewery.name } ({ this.state.brewery.origin.toUpperCase() })</h1>
          <p>{ this.state.brewery.description }</p>
        </header>
        <ul className="BeerList">
          { this.state.brewery.beers.map((beer) => {
            const linkDest = `/breweries/${ this.state.brewery.id }/beer/${ beer.id }`;
            return (
              <BeerListItem beer={ beer } key={ beer.id }/>
            )
          }) }
        </ul>
      </div>
    )
  }
}
