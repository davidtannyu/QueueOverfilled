import React from 'react';
import { Link, withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display_name: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleField = this.handleField.bind(this);
    this.clearPassword = this.clearPassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(() => {
      this.props.router.push('/');
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

  componentWillReceiveProps(newProps) {
    if (newProps.formType != this.props.formType) {
      this.setState({ display_name: "", email: "", password: ""});
      this.props.clearErrors(this.props.formType);
    }
  }

  render() {
    const { formType, errors, loggedIn } = this.props;
    let display_name_field = null;
    if (formType === "signUp") {
      display_name_field = (
        <div>
          <label htmlFor="display_name"><strong>Display Name</strong></label>
          <br />
          <input id="display_name" type="text"
            onChange={this.handleField("display_name")}
            value={this.state.display_name} />
          <br />
        </div>
    );}
    let signUpClass = (formType === "signUp") ? "selected-form" : "unselected-form";
    let logInClass = (formType !== "signUp") ? "selected-form" : "unselected-form";
    return (
      <div className="session-form">
        <h1>
          <div>
            <Link className={logInClass} to="/login">
              Log In
            </Link>
            <Link className={signUpClass} to="/signUp">
              Sign Up
            </Link>
          </div>
        </h1>
        <Link to={ `/${formType}`}></Link>
        { errors.map(el => <h4>{el}</h4>) }
        <form onSubmit={this.handleSubmit}>
          {display_name_field}
          <label htmlFor="email"><strong>Email</strong></label>
          <br />
          <input id="email" type="text"
            onChange={this.handleField("email")}
            value={this.state.email} />
          <br />
          <label htmlFor="password"><strong>Password</strong></label>
          <br />
          <input id="password" type="password"
            onChange={this.handleField("password")}
            value={this.state.password} />
          <button>{formType}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
