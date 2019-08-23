import React from 'react';
import Navigation from './Navigation'
import Logo from './Logo'

const Navbar = (props) => {
    return ( 
    <div className="navbar">
        <Logo />
        <Navigation auth={props.auth} handleLogout={props.handleLogout}/>
    </div>
     );
}
 
export default Navbar;