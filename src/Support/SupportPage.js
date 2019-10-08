import React, { Component } from 'react';
import { sendMsgToSupport } from '../apis';

class SupportPage extends Component {
  constructor(...args) {
    super(...args);

    this.handleChange = this.handleChange.bind(this);
    this.handleSendClick = this.handleSendClick.bind(this);

    this.state = {
      isSubmitted: false,
      isFormValid: false,
      email: '',
      subject: '',
      text: ''
    };

    this.validity = {
      email: false,
      subject: false,
      text: false
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.validity[name] = target.checkValidity();

    const isFormValid = Object.keys(this.validity).reduce((res, key) => {
      if (!this.validity[key]) {
        res = false;
      }

      return res;
    }, true);

    this.setState({ [name]: value, isFormValid });
  }

  async handleSendClick() {
    this.setState({ isSubmitted: true });

    const { email, subject, text } = this.state;

    await sendMsgToSupport({ email, subject, text }).catch(() => {});
  }

  shouldComponentUpdate(nextProps, { isSubmitted, isFormValid }) {
    return (
      this.state.isSubmitted !== isSubmitted ||
      this.state.isFormValid !== isFormValid
    );
  }

  render() {
    const supportForm =
      <form>
        <div className="form-group">
          <label htmlFor="support-subject">Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            id="support-subject"
            placeholder=""
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="support-email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="support-email"
            placeholder="example@email.com"
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="support-message">Message</label>
          <textarea
            name="text"
            className="form-control"
            rows="3"
            id="support-message"
            required
            onChange={this.handleChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary"
          disabled={!this.state.isFormValid}
          onClick={this.handleSendClick}
        >
          Send
        </button>
      </form>

    const successMessage =
      <div className="alert alert-success" role="alert">
        Email sent. We'll get back to you later.
      </div>

    const toShow = this.state.isSubmitted ? successMessage : supportForm;

    return (
      <div className="support">
      <div
        className="container-fluid"
        style={{
          backgroundColor: '#6d5b97',
          padding: '27px 0',
          marginBottom: '39px'
        }}>
        <div className="heroAddress"
          style={{
            color: '#fff',
          fontSize: '52px'
        }}>Support</div>
      </div>
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="offset-md-3 col-md-6 col-sm-12">
            {toShow}
          </div>
        </div>
      </div>
    );
  }
}

export default SupportPage;
