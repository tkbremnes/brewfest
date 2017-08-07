import React from "react";

import "./styles.css";
import kegFigure from "../../Images/keg.svg";
import bottleFigure from "../../Images/bottle.svg";

export default class BeerListItem extends React.Component {
  componentWillMount() {
    const data = window.load(this.props.beer.id);
    this.setState({
      beerRating: data
    });
  }

  setBeerRating(type, id) {
    const currentRating  = window.load(id);
    if (currentRating === type) {
      window.store("", id);
      this.setState({
        beerRating: ""
      });
      return;
    }
    window.store(type, id);
    this.setState({
      beerRating: type
    });
  }

  render() {
    function renderAbv(_abv) {
      return (_abv * 100).toPrecision(2) + "%";
    }
    return (
      <li className="BeerListItem">
        <div className="beer-info-wrapper">
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
        </div>
        <div className="button-wrapper">
          <button className={`beer-list-button ${ this.state.beerRating === "interesting" ? "active" : "" }`} onClick={ this.setBeerRating.bind(this, "interesting", this.props.beer.id) }>
            Interested
          </button>
          <button className={`beer-list-button ${ this.state.beerRating === "liked" ? "active" : "" }`} onClick={ this.setBeerRating.bind(this, "liked", this.props.beer.id) }>
            Liked it
          </button>
          <button className={`beer-list-button ${ this.state.beerRating === "hated" ? "active" : "" }`} onClick={ this.setBeerRating.bind(this, "hated", this.props.beer.id) }>
            Hated it
          </button>
        </div>
      </li>
    )
  }
}
