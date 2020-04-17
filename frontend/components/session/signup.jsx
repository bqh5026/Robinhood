import React from 'react';
import {Link} from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
        }

        this.handleSubmit= this.handleSubmit.bind(this); 
    }

    handleInput(type) {
       return e => this.setState({[type]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
        .then( () => this.props.history.push('/dashboard')); 
    }

    render() {
        return (
          <div className="signup-form">
            <div className="signup-navbar">
              <Link to="/">
                <img className="signup-logo" src={roberthoodHatURL} />
              </Link>
              <Link className="active" to="#">Account</Link>
              <Link className="signup-navbar-item" to="#">Basic Info</Link>
              <Link className="signup-navbar-item" to="#">Identity</Link>
              <Link className="signup-navbar-item" to="#">Funding</Link>
              <Link className="signup-navbar-item" to="#">Submit</Link>
            </div>
            <h1 className="signup-header">Make Your Money Move</h1>
            <h3 className="signup-subheader">
              Robinhood lets you invest in companies you love, commission-free.
            </h3>
            <form>
              <div className="firstname-lastname">
                <input
                  className='input'
                  type="text"
                  value={this.state.first_name}
                  onChange={this.handleInput("first_name")}
                  placeholder="First name"
                />
                <input
                  className='input'
                  type="text"
                  value={this.state.last_name}
                  onChange={this.handleInput("last_name")}
                  placeholder="Last name"
                />
              </div>

              <br />

              <input
                className="input"
                type="text"
                value={this.state.username}
                onChange={this.handleInput("username")}
                placeholder="Username"

              />

              <br />
      
              <input
                className="input"
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
                placeholder="Username"
              />
              <br />
              <button className="signup-btn" onClick={this.handleSubmit}>
                Continue
              </button>
            </form>
          </div>
        ); 
    }
}

export default Signup; 