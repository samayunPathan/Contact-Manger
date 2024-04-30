import React from "react";
import { Nav, NavItem, NavbarBrand } from "reactstrap";
import "./Header.css";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const Header = (props) => {
  let links = null;
  if (props.token === null) {
    links = (
      <Nav className="">
        <NavItem className="ms-auto">
          <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
            Login
          </NavLink>
        </NavItem>
      </Nav>
    );
  } else {
    links = (
      <Nav className="justify-content-between">
        <NavItem>
          <NavLink
            to="/profile"
            style={{ color: "white", textDecoration: "none" }}
            className="inactive"
          >
            Profile
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="/logout"
            style={{ color: "white", textDecoration: "none" }}
          >
            Log Out
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
  return (
    <div className="navigation container">
      <div className="with-margin">
        <NavbarBrand>
          <NavLink
            to="/"
            style={{
              fontSize: "x-large",
              color: "white",
              textDecoration: "none",
            }}
            className="inactive"
          >
            Contact Manager
          </NavLink>
        </NavbarBrand>
      </div>
      {links}
    </div>
  );
};
export default connect(mapStateToProps)(Header);
