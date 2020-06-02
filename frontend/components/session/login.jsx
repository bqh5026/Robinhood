import React from 'react';
import { Link } from 'react-router-dom'; 

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/dashboard'));
  }

  handleDemo(e) {
    e.preventDefault();
    this.props
      .login(
        this.state = {
          username: "bqh5026",
          password: 'password'
        })
      .then(() => this.props.history.push("/dashboard"));
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="sign-in-container">
          <div className="image-container"></div>

              <div className="sign-in-form">
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br className="break" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <form className="login-form">
                  <h1 className="sign-in-header">Welcome to Roberthood</h1>
                  <span className="label">Username</span>
                  <br />
                  <br />
                  <input
                    className="input"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInput("username")}
                  />
                  <br />
                  <br />
                  <span className="label">Password</span>
                  <br />
                  <br />
                  <input
                    className="input"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput("password")}
                  />
                  <br />
                  <br />
                  <Link to="/signup">
                    <span className="signup_link">
                      Sign up for a new account if not already have one
                    </span>
                  </Link>
                  <br />
                  <br />
                  <button className="sign-in-btn" onClick={this.handleSubmit}>
                    Sign In
                  </button>
                  <br />
                  <br />
                </form>
                <div className="demo-user">
                  <form>
                    <input type="hidden" value="" />
                    <input type="hidden" value="" />
                    <button className="demo-user-btn" onClick={this.handleDemo}>
                      Demo User
                    </button>
                  </form>
                </div>

              </div>

        </div>
      </div>
    );
  }
}

export default Login 



