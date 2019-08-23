import React from 'react';
import search from './images/search.png'
import cart from './images/cart.png'
import './Navbar.css'
import {Link, withRouter} from 'react-router-dom';

const Navigation = (props) => {
  return ( <div className="navigation-wrap">
  <div className="navigation">
    <Link to="/" className="nav-link-text">
      <div className="nav-link"><p >Home</p></div>
    </Link>
    <Link to="#" className="nav-link-text">
      <div className="nav-link"><p>Boardgames</p></div>
    </Link>
    <Link to="#" className="nav-link-text">
      <div className="nav-link"><p>New Arrivals</p></div>
    </Link>
    <Link to="#" className="nav-link-text">
      <div className="nav-link">Accessories</div>
    </Link>
    <Link to="#" className="nav-link-text">
      <div className="nav-link"><p>Contact</p></div>
    </Link>
    {props.auth.user.id ?
      <a onClick={() => {
        props.handleLogout()
        props.history.push('/')
      }}>
      <div className="nav-link"><p>Log out</p></div>
    </a>
    :
    <Link to="/login" className="nav-link-text">
      <div className="nav-link"><p>Sign In</p></div>
    </Link>
  }
  </div>
  <div className="nav-buttons">
  <Link to="/cart" >
    <img className="cart" src={cart} style={{width: '30px'}}/>
  </Link>
    <img className="search" src={search} style={{width: '30px'}}/>
  </div>
</div>
);
}
 
export default withRouter(Navigation)