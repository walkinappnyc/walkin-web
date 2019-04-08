import React from 'react';
import { buildHtmlTemplate } from './htmlEmailTemplate';
import { toast } from 'react-toastify';

class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleChange(event, type) {
    this.setState({ [`${type}`]: event.target.value });
  }

  sendEmail = (e, opts) => {
    e.preventDefault();
    if (
      opts.to === '' ||
      opts.from === '' ||
      opts.subject === '' ||
      this.state.firstName === '' ||
      this.state.lastName === '' ||
      this.state.email === '' ||
      this.state.phoneNumber === '' ||
      this.state.message === ''
    )
      return toast.error(
        'Please ensure you have filled out all the fields correctly.'
      );
    fetch('https://walkinapp-236920.appspot.com/mail', {
      method: 'post',
      headers: {
        Origin: 'http://localhost:3000',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'content-type',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: opts.to,
        from: opts.from,
        subject: opts.subject,
        text: buildHtmlTemplate(opts),
        html: buildHtmlTemplate(opts)
      })
    })
      .then(function() {
        if (document.getElementsByClassName('modal-backdrop')[0]) {
          document.getElementById('contact').classList.remove('show');
          document.getElementById('contact').style.display = 'none';
          document
            .getElementById('contact')
            .setAttribute('aria-hidden', 'true');
          document.querySelector('body').classList.remove('modal-open');
          document.getElementsByClassName('modal-backdrop')[0].remove();
        }
        toast.info('Email sent!');
      })
      .catch(() => {
        toast.error(
          'An error has occurred! We apologize for the inconvenience, please try again later.'
        );
      });
  };

  render() {
    const { address, emailTo } = this.props;
    return (
      <div
        className="modal fade"
        id="contact"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="form-group text-left">
                        <label
                          for="formGroupExampleInput"
                          className="bmd-label-floating"
                        >
                          First Name
                        </label>
                        <input
                          onChange={e => this.handleChange(e, 'firstName')}
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="form-group text-left">
                        <label
                          for="formGroupExampleInput3"
                          className="bmd-label-floating"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput3"
                          onChange={e => this.handleChange(e, 'lastName')}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="form-group text-left">
                        <label
                          for="formGroupExampleInput4"
                          className="bmd-label-floating"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="formGroupExampleInput4"
                          onChange={e => this.handleChange(e, 'email')}
                        />
                        <span className="bmd-help">
                          We'll contact you at this e-mail address
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="form-group text-left">
                        <label
                          for="formGroupExampleInput5"
                          className="bmd-label-floating"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="formGroupExampleInput5"
                          onChange={e => this.handleChange(e, 'phoneNumber')}
                        />
                        <span className="bmd-help">
                          Please dont add any special characters (-.*)
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12">
                      <div className="form-group text-left">
                        <label
                          for="formGroupExampleInput6"
                          className="bmd-label-floating"
                        >
                          Add your message here
                        </label>
                        <textarea
                          className="form-control"
                          id="formGroupExampleInput6"
                          rows="3"
                          onChange={e => this.handleChange(e, 'message')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="col-sm-12 col-md-12">
                  <span className="form-group">
                    <button
                      onClick={e =>
                        this.sendEmail(e, {
                          to: emailTo,
                          from: this.state.email,
                          address,
                          name: `${this.state.firstName} ${
                            this.state.lastName
                          }`,
                          phoneNumber: `${this.state.phoneNumber}`,
                          subject: `${this.state.firstName} ${
                            this.state.lastName
                          } has an inquiry about ${address}`,
                          text: this.state.message
                        })
                      }
                      className="btn btn-outline-primary"
                    >
                      Send Message
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactModal;
