import React, { Component } from "react";
import { Formik } from "formik";
import { Alert } from "reactstrap";

import { auth, authFailed } from "../../redux/actionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (email, password, mode) => dispatch(auth(email, password, mode)),
  };
};

const mapStateToProps = (state) => {
  return {
    authFailedMsg: state.authFailedMsg,
  };
};

class Auth extends Component {
  state = {
    mode: "Sign Up",
  };
  handleModel = () => {
    this.setState({
      mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up",
    });
  };
  render() {
    let err = null;
    if (this.props.authFailedMsg !== null) {
      err = <Alert color="danger">{this.props.authFailedMsg}</Alert>;
    }
    let form = (
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={(values) => {
          this.props.auth(values.email, values.password, this.state.mode);
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required !";
          } else if (
            !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
              values.email
            )
          ) {
            errors.email = "Invalid email address !";
          }
          if (!values.password) {
            errors.password = "Required !";
          } else if (values.password.length < 4) {
            errors.password = "Must be atleast 4 characters!";
          }
          if (this.state.mode === "Sign Up") {
            if (!values.passwordConfirm) {
              errors.passwordConfirm = "Required !";
            } else if (values.password !== values.passwordConfirm) {
              errors.passwordConfirm = "Password field doesnot match";
            }
          }

          return errors;
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <div
            style={{
              border: "1px gray solid",
              marginTop: "30px",
              padding: "25px",
              borderRadius: "10px",
            }}
            className="container"
          >
            <button
              style={{
                height: "35px",
                width: "50%",
                border: "1px",
                backgroundColor: "#068888",
                borderRadius: "5px",
                marginBottom: "10px",
                color: "white",
              }}
              className="btn btn-success"
              onClick={this.handleModel}
            >
              Switch to {this.state.mode === "Sign Up" ? "Login" : "Sign Up"}
            </button>
            <br />
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                placeholder="Enter your email"
                className="form-control"
                value={values.email}
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>{errors.email}</span>
              <br />
              <input
                name="password"
                placeholder="Enter your password"
                className="form-control"
                value={values.password}
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>{errors.password}</span>
              <br />
              {this.state.mode === "Sign Up" ? (
                <div>
                  <input
                    name="passwordConfirm"
                    placeholder="Confirm password"
                    className="form-control"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                  />
                  <span style={{ color: "red" }}>{errors.passwordConfirm}</span>
                  <br />
                </div>
              ) : null}

              <button type="submit" className="btn btn-success">
                {this.state.mode === "Sign Up" ? "Sign Up" : "Login"}
              </button>
            </form>
          </div>
        )}
      </Formik>
    );
    return (
      <div>
        {err}
        {form}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
