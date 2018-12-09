import React, { Component } from 'react';
import LargeCard from '../LargeCard/LargeCard';
import './styles.scss'

class RegionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      validUnits: null,
      rooms: [],
      sort: 'Lowest to Highest',
      min: null,
      max: null,
    };
    this.renderCards = this.renderCards.bind(this);
    this.toggelRooms = this.toggelRooms.bind(this);
    this.updateSort = this.updateSort.bind(this);
    this.updateRange = this.updateRange.bind(this);
  }


  componentDidMount() {
    window.scrollTo(0, 0)
    fetch('https://walkin-staging.herokuapp.com/api/properties')
      .then((resp) => resp.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.details.price - b.details.price)
        this.setState({ data: sortedData, validUnits: sortedData })
      })
  }

  toggelRooms(e) {
    const results = this.state.rooms;
    const filterQuery = e.target.dataset.room;

    if (this.state.rooms.includes(filterQuery)) {
      const index = this.state.rooms.indexOf(filterQuery)

      e.target.classList.remove('selected')
      results.splice(index, 1)
    } else {
      e.target.classList.add('selected')
      results.push(filterQuery)
    }
    const validUnits = this.state.data.filter(unit => {
      return results.indexOf(unit.details.bedrooms) !== -1
    })

    if (validUnits.length) {
      this.setState({ validUnits })
    } else {
      this.setState({ validUnits: this.state.data })
    }

  }

  updateSort(e) {
    if (e.target.options[e.target.options.selectedIndex].value === 'Lowest to Highest') {
      const validUnitsLowToHigh = this.state.validUnits.sort((a, b) => a.details.price - b.details.price)
      this.setState({ validUnits: validUnitsLowToHigh })
    } else {
      const validUnitsHighToLow = this.state.validUnits.sort((a, b) => b.details.price - a.details.price)
      this.setState({ validUnits: validUnitsHighToLow })
    }

  }

  updateRange(e) {
    const validUnits = this.state.data.filter(unit => {
      debugger
      return parseInt(unit.details.price) > parseInt(e.target.value)
    })
    this.setState({ min: e.target.value })
    this.setState({ validUnits })
  }

  renderCards() {
    const { data, validUnits } = this.state;
    if (!data) return null
    return validUnits.map(property => <LargeCard property={property} />)
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
              <button onClick={e => {this.toggelRooms(e)}} data-room="0" type="button" class="btn btn-outline-primary bdrmBtn">Studio</button>
              <button onClick={e => {this.toggelRooms(e)}} data-room="1" type="button" class="btn btn-outline-primary bdrmBtn">1</button>
              <button onClick={e => {this.toggelRooms(e)}} data-room="2" type="button" class="btn btn-outline-primary bdrmBtn">2</button>
              <button onClick={e => {this.toggelRooms(e)}} data-room="3" type="button" class="btn btn-outline-primary bdrmBtn">3</button>
            </div>
            <div className="col-md-3">
              <div className="text-left filterHeader">Sort</div>
              <select onChange={e => {this.updateSort(e)}} className="custom-select mr-sm-2 sort" id="inlineFormCustomSelect">
                <option selected>Lowest to Highest</option>
                <option value="Highest to Lowest">Highest to Lowest</option>
              </select>
            </div>
            <div className="col-md-4">
              <div className="text-left filterHeader">Price</div>
              <div className="row">
                <div className="col-md-6">
                  <input className="priceMin" onChange={e => {this.updateRange(e)}}  type="number" placeholder="$Minimum"/>
                </div>
                <div className="col-md-6">
                  <input className="priceMax" onChange={e => {this.updateRange(e)}}  type="number" placeholder="$Maxium"/>
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
