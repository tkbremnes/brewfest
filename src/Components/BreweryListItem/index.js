import React from "react";
import "./style.css";

export default class BreweryListItem extends React.Component {
  render() {
    return (
      <li className="BreweryListItem">{ this.props.brewery.name }</li>
    )
  }
}
