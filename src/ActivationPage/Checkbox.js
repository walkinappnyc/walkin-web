import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { apiRoot } from '../apis';

import './styles.scss';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.company,
      id: props.id,
      type: props.type,
      value: props.checked
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateActive = this.updateActive.bind(this);
    this.updateFeatured = this.updateFeatured.bind(this);
  }

  handleChange() {
    this.state.type === 'isActive'
      ? this.updateActive({
          xml_id: this.state.id,
          isActive: !this.state.value
        })
      : this.updateFeatured({
          xml_id: this.state.id,
          isFeatured: !this.state.value
        });
    this.setState({ value: !this.state.value });
  }

  updateActive(opts) {
    fetch(`${apiRoot}/properties/isActive`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(opts)
    });
  }

  updateFeatured(opts) {
    fetch(`${apiRoot}/properties/isFeatured`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(opts)
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={this.state.value}
            onChange={this.handleChange}
          />
          {this.props.type}
        </label>
      </form>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  company: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Checkbox;
