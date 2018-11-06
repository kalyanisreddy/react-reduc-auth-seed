import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    first_name: "Kalyani",
    last_name: "S",
    email: "kalyanisreddy@gmail.com",
    password: "kalyani#",
    confirm_password: "kalyani#"
  };

  componentWillMount() {
    console.log("componentWillMount ", this.props, this.state);
  }

  componentDidMount() {
    console.log("componentDidMount ", this.props, this.state);
  }

  onSignUpRequest = () => {
    console.log("~~~ onSignUpRequest ", this.state);
  };

  render() {
    return (
      <div className="d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="offset-3 col-9">
          <div className="card">
            <div className="card-header">{this.props.appName} Register</div>
            <div className="card-body">
              <div className="form-group">
                <div class="row">
                  <div className="col-6">
                    <input
                      type="text"
                      class="form-control"
                      name="first_name"
                      placeholder="First Name"
                      required="required"
                      value={this.state.first_name}
                      onChange={event =>
                        this.setState({ first_name: event.target.value })
                      }
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      class="form-control"
                      name="last_name"
                      placeholder="Last Name"
                      required="required"
                      value={this.state.last_name}
                      onChange={event =>
                        this.setState({ last_name: event.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email"
                  required="required"
                  value={this.state.email}
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  required="required"
                  value={this.state.password}
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  class="form-control"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required="required"
                  value={this.state.confirm_password}
                  onChange={event =>
                    this.setState({ confirm_password: event.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block"
                onClick={this.onSignUpRequest}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
