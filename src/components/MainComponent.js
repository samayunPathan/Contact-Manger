import React, { Component } from "react";
import Header from "./Header/Header";
import ContactTable from "./Body/ContactTable";
import Profile from "./Body/profile";
import Auth from "./AUTH/Auth";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { authCheck } from "../redux/actionCreators";
import Logout from "./AUTH/Logout";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authCheck: () => dispatch(authCheck()),
  };
};

class MainComponent extends Component {
  componentDidMount() {
    this.props.authCheck();
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
            {this.props.token === null ? (
              <Route path="/" element={<Auth />} />
            ) : (
              <>
                <Route path="/" element={<ContactTable />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Navigate replace to="/" />} />
              </>
            )}
          </Routes>
        </Router>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
