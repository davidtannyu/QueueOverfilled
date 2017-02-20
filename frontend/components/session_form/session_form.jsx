import React from 'react';
import { Link, withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display_name: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleField = this.handleField.bind(this);
    this.clearPassword = this.clearPassword.bind(this);
    this.logInAsGuest = this.logInAsGuest.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    let promise;
    if (this.props.formType === "signUp") {
      promise = this.props.signup(user);
    }
    else {
      promise = this.props.login(user);
    }
    promise.then(() => {
      this.props.clearErrors();
      this.props.router.goBack();
    }, err => this.clearPassword());
  }

  clearPassword() {
    this.setState({password:""});
  }

  handleField(field) {
    return (e) => {
      this.setState( {[field]: e.target.value});
    };
  }

  logInAsGuest(e) {
    this.setState({email: "guest@email.queueoverfilled.com", password: "111111"});
  }

  componentWillReceiveProps(newProps) {
    if (newProps.formType != this.props.formType) {
      this.setState({ display_name: "", email: "", password: ""});
      this.props.clearErrors(this.props.formType);
    }
  }

  render() {
    const { formType, errors, loggedIn } = this.props;
    let display_name_field = null;
    let buttonText = "Log In";
    let signUpClass = (formType === "signUp") ? "selected-form" : "unselected-form";
    let logInClass = (formType !== "signUp") ? "selected-form" : "unselected-form";
    let passwordErrors = errors.filter( (error) => {
      return error.split(" ")[0] === "Password";
    });
    let emailErrors = errors.filter( (error) => {
      return error.split(" ")[0] === "Email";
    });
    let displayNameErrors = errors.filter( (error) => {
      return error.split(" ")[0] === "Display";
    });
    let logInErrors = errors.map((error,idx) => (
      <h4 className="error-text" key={idx}>{error}</h4>
    ));
    let guestButton = (
      <div>
        <button className="blue-button" onClick={this.logInAsGuest}>
          Login as a guest
        </button>
      </div>
    );
    let topText = "QueueOverfilled is part of a growing community of Q&As!";
    if (formType === "signUp") {
      buttonText = "Sign Up";
      logInErrors = null;
      guestButton = null;
      topText = "Create your Queue Overfilled account today! It's free and only takes a minute.";
      display_name_field = (
        <div className="input-field">
          <label htmlFor="display_name"><strong>Display Name</strong></label>
          <br />
          <input id="display_name" type="text"
            onChange={this.handleField("display_name")}
            placeholder="J. Doe"
            value={this.state.display_name} />
          <br />
          {displayNameErrors.map((el, idx) => (
              <h4 className="error-text" key={idx}>{el}</h4>
          ))}
        </div>
      );
    }




    return (
      <div className="session-div">
        <div className="form-tabs clearfix">
            <div className="logIn-link">
              <Link className={logInClass} to="/login">
                Log In
              </Link>
            </div>
            <div className="signUp-link">
              <Link className={signUpClass} to="/signUp">
                Sign Up
              </Link>
            </div>
        </div>
        <div className="form-container">
          <div className="form-header">
            <h1>{topText}</h1>
          </div>
          <div className="session-form">
            <div className="other-auth">
              <button className="google">
                Google
              </button>
              <button className="facebook">
                Facebook
              </button>
            </div>
            <div className="or-container">
              <span>OR</span>
            </div>
            <form onSubmit={this.handleSubmit}>
              {display_name_field}
              <label htmlFor="email"><strong>Email</strong></label>
              <div className="input-field">
                <input id="email" type="text"
                  onChange={this.handleField("email")}
                  placeholder="you@email.com"
                  value={this.state.email} />
                {emailErrors.map((el, idx) => (
                    <h4 className="error-text" key={idx}>{el}</h4>
                  ))}
                {logInErrors}
              </div>
              <label htmlFor="password"><strong>Password</strong></label>
              <div className="input-field">
                <input id="password" type="password"
                  onChange={this.handleField("password")}
                  placeholder="******"
                  value={this.state.password} />
                {passwordErrors.map((el, idx) => (
                  <h4 className="error-text" key={idx}>{el}</h4>
                ))}
              </div>
              <button className="blue-button">{buttonText}</button>
              {guestButton}
            </form>
          </div>
        </div>
    </div>
    );
  }
}

export default withRouter(SessionForm);
