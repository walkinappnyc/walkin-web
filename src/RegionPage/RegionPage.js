import React, { Component } from 'react';
import LargeCard from '../LargeCard/LargeCard';
import './styles.scss'

class RegionPage extends Component {
  render() {
    return (
      <div className="region">
        <div className="container-fluid" style={{ backgroundColor: '#6d5b97', padding: '27px 0', marginBottom: '39px'}}>
          <div className="heroAddress">Manhattan</div>
        </div>
        <div className="container" style={{ padding: '27px 0', marginBottom: '39px'}}>
          <div className="row">
            <div className="col-md-3">
              <div className="text-left">Bedrooms</div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" for="customRadioInline1">Studio</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" for="customRadioInline2">1</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline3" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" for="customRadioInline3">2</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline4" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" for="customRadioInline4">3</label>
              </div>

            </div>
            <div className="col-md-3">
              <label className="mr-sm-2" for="inlineFormCustomSelect">Sort</label>
              <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Lowest to Highest</option>
                <option value="Highest to Lowest">Highest to Lowest</option>
              </select>
            </div>
            <div className="col-md-3">
              <div>Price</div>
              <div className="form-group text-left" style={{ width: "50%", display: "inline-block", }}>
                <label for="formGroupExampleInput" className="bmd-label-floating">$Minimum</label>
                <input type="text" className="form-control" id="formGroupExampleInput" />
              </div>
              <div className="form-group text-left" style={{ width: "50%", display: "inline-block", }}>
                <label for="formGroupExampleInput" className="bmd-label-floating">$Maximum</label>
                <input type="text" className="form-control" id="formGroupExampleInput" />
              </div>
            </div>
            <div className="col-md-3">
              <button type="button" className="btn btn-outline-primary btn-block btnMargin">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
            <LargeCard />
          </div>
        </div>
      </div>
    );
  }
}

export default RegionPage;
