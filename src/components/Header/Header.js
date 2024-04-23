import React from "react";
import {
    Nav, NavItem ,
    NavbarBrand
} from 'reactstrap';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header= () => {
    return (
        <div className="navigation container">
            <div className="with-margin">
            <NavbarBrand style={{fontSize:'x-large' ,color :'white'}} >Contact Manager</NavbarBrand>
            </div>
                <Nav className="">
                    <NavItem >
                        <NavLink to ="/" style={{color:'white',textDecoration: 'none'}} className="inactive">Profile</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto">
                        <NavLink to="/login" style={{color:'white' ,textDecoration: 'none'}} >Login</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink to="/" style={{color:'white',textDecoration: 'none'}}>Log Out</NavLink>
                    </NavItem>

                </Nav>

        </div>
    )
}
export default Header