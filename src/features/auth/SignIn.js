import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    email: "kalyanisreddy@gmail.com",
    password: "kalyani#"
  };

  componentWillMount() {
    console.log("componentWillMount ", this.props, this.state);
  }

  componentDidMount() {
    console.log("componentDidMount ", this.props, this.state);
  }

  onSignInRequest = () => {
    console.log("~~~ onSignInRequest ", this.state);
  };

  render() {
    return (
      <div className="d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="offset-3 col-9">
          <div className="card">
            <div className="card-header">{this.props.appName} Login</div>
            <div className="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button className="btn btn-warning">Sign-Up</button>
              <button
                className="btn btn-primary"
                onClick={this.onSignInRequest}
              >
                Sign-In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
