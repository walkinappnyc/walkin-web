import React, { Component } from 'react';
import LargeCard from '../LargeCard/LargeCard';
import './styles.scss'

class RegionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    fetch('https://walkin-staging.herokuapp.com/api/properties')
      .then((resp) => resp.json())
      .then((data) => { this.setState({ data }) })
  }

  renderCards() {
    const { data } = this.state;
    if (!data) return null
    return data.map(property => <LargeCard property={property} />)
  }

  render() {
    return (
      <div className="region">
        <div className="container-fluid" style={{ backgroundColor: '#6d5b97', padding: '27px 0', marginBottom: '39px'}}>
          <div className="heroAddress">Manhattan</div>
        </div>
        <div className="container" style={{ paddingTop: '27px', paddingBottom: '27px', marginBottom: '39px'}}>
          <div className="row">
            <div className="text-left offset-md-1 col-md-3">
              <div className="filterHeader">Bedrooms</div>
              <button type="button" class="btn btn-outline-primary bdrmBtn">Studio</button>
              <button type="button" class="btn btn-outline-primary bdrmBtn">1</button>
              <button type="button" class="btn btn-outline-primary bdrmBtn">2</button>
              <button type="button" class="btn btn-outline-primary bdrmBtn">3</button>
            </div>
            <div className="col-md-3">
              <div className="text-left filterHeader">Sort</div>
              <select className="custom-select mr-sm-2 sort" id="inlineFormCustomSelect">
                <option selected>Lowest to Highest</option>
                <option value="Highest to Lowest">Highest to Lowest</option>
              </select>
            </div>
            <div className="col-md-4">
              <div className="text-left filterHeader">Price</div>
              <div className="row">
                <div className="col-md-6">
                  <input className="priceMin" type="text" placeholder="$Minimum"/>
                </div>
                <div className="col-md-6">
                  <input className="priceMax" type="text" placeholder="$Maxium"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            { this.renderCards() }
          </div>
        </div>
      </div>
    );
  }
}

export default RegionPage;
