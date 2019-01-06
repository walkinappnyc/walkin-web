import React, { Component } from 'react';
import Checkbox from './Checkbox';
import './styles.scss';

class ActivationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
    this.renderListItems = this.renderListItems.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  componentDidMount() {
    fetch('https://walkin-staging.herokuapp.com/api/properties')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data });
      });
  }

  renderSwitch(type, isChecked, id, company) {
    return (
      <label>
        <Checkbox
          checked={isChecked ? true : false}
          company={company}
          id={id}
          label={type}
          type={type}
        />
      </label>
    );
  }

  renderListItems() {
    const { data } = this.state;
    return data.map(property => {
      debugger;
      return (
        <tr key={property.id}>
          <td>{property.landlord.company}</td>
          <th scope="row" className="text-left">
            {property.location.address} {property.location.apartment},{' '}
            {property.location.state} {property.location.zipcode}
          </th>
          <td>
            {property.location.city}, {property.location.neighborhood}
          </td>
          <td>{property.id}</td>
          <td>
            {this.renderSwitch(
              'isActive',
              property.isActive,
              property.xml_id,
              property.landlord.company
            )}
          </td>
          <td>
            {this.renderSwitch(
              'isFeatured',
              property.isFeatured,
              property.xml_id,
              property.landlord.company
            )}
          </td>
        </tr>
      );
    });
  }

  render() {
    const { data } = this.state;
    if (data === null) return null;

    return (
      <div className="about">
        <div
          className="container-fluid"
          style={{
            backgroundColor: '#6d5b97',
            padding: '27px 0',
            marginBottom: '39px'
          }}
        >
          <div className="heroAddress">Activation</div>
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Landlord</th>
                <th scope="col">Apartment</th>
                <th scope="col">City, Neighborhood</th>
                <th scope="col">ID</th>
                <th scope="col">isActive</th>
                <th scope="col">isFeatured</th>
              </tr>
            </thead>
            <tbody>{this.renderListItems()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ActivationPage;
