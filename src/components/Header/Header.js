import React from "react";
import {
    Nav, NavItem ,NavLink,
    NavbarBrand
} from 'reactstrap';
import './Header.css';
const Header= () => {
    return (
        <div className="navigation container">
            <NavbarBrand style={{fontSize:'x-large' ,color :'white'}}>Contact Manager</NavbarBrand>
                <Nav>
                    <NavItem >
                        <NavLink to="/"style={{color:'white'}} className="inactive" href="#">Profile</NavLink>
                        
                    </NavItem>
                    <NavItem className="ms-auto">
                    <NavLink to="/"style={{color:'white'}} className="ms-auto" href="#">Log Out</NavLink>
                    </NavItem>

                </Nav>

        </div>
    )
}
export default Header