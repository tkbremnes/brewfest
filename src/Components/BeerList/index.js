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
      <ul className="BeerList">
        { this.state.brewery.beers.map((beer) => {
          return (
            <BeerListItem beer={ beer } key={ beer.id } />
          )
        }) }
      </ul>
    )
  }
}
