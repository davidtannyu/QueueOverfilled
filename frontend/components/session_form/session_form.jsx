import React from 'react';
import { Link, withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display_name: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleField = this.handleField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(() => {
      this.props.router.push('/');
    });
  }

  handleField(field) {
    return (e) => {
      this.setState( {[field]: e.target.value});
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.formType != this.props.formType) {
      this.setState({ display_name: "", email: "", password: ""});
    }
  }

  render() {
    const { formType, errors, loggedIn } = this.props;
    let display_name_field = null;
    if (formType === "signUp") {
      display_name_field = (
        <div>
          <label htmlFor="display_name">Display Name</label>
          <input id="display_name" type="text"
            onChange={this.handleField("display_name")}
            value={this.state.display_name} />
          <br />
        </div>
    );}
    let header = formType === "signUp" ? "Sign up" : "Log in";
    return (
      <div className="session-form">
        <h1>{header}</h1>
        <Link to={ `/${formType}`}></Link>
        { errors.map(el => <h4>{el}</h4>) }
        <form onSubmit={this.handleSubmit}>
          {display_name_field}
          <label htmlFor="email">Email</label>
          <input id="email" type="text"
            onChange={this.handleField("email")}
            value={this.state.email} />
          <br />
          <label htmlFor="password">Password</label>
          <input id="password" type="password"
            onChange={this.handleField("password")}
            value={this.state.password} />
          <button>{header}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
