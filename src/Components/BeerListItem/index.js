import React from "react";

import "./styles.css";
import kegFigure from "../../Images/keg.svg";
import bottleFigure from "../../Images/bottle.svg";

export default class BeerListItem extends React.Component {
  render() {
    function renderAbv(_abv) {
      return (_abv * 100).toPrecision(2) + "%";
    }
    return (
      <li className="BeerListItem">
        <div className="beer-info">
          <p className="title">{ this.props.beer.name }</p>

          <div className="meta">
            <p className="secondary">{ this.props.beer.type }</p>
            <p className="secondary">{ renderAbv(this.props.beer.abv) }</p>
          </div>
        </div>
        <figure className="figure">
          { this.props.beer.serving === "KEG" ?
            (
              <img src={ kegFigure } />
            )
            :
            (
              <img src={ bottleFigure } />
            )
          }
        </figure>
      </li>
    )
  }
}
