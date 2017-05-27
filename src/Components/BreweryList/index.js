import React from "react";

import BreweryListItem from "../BreweryListItem";

import { Link } from "react-router-dom";

import "./style.css"

export default class BreweryList extends React.Component {
  componentWillMount() {
    const breweries = [];
    Object.keys(window.beerStuff).forEach((key) => {
      const brewery = window.beerStuff[key];
      breweries.push(
        {
          "id": key,
          "name": brewery.name,
          "description": brewery.description,
          "origin": brewery.origin,
        }
      )
    });

    this.setState({
      breweries: breweries
    });
  }

  render() {
    return (
      <div>
        <ul className="BreweryList">
          { this.state.breweries.map((brewery) => {
            return (
              <Link to={ `/breweries/${ brewery.id }` } key={ brewery.id }>
                <BreweryListItem brewery={ brewery } />
              </Link>
            )
          }) }
        </ul>
      </div>
    )
  }
}
