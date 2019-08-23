import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () => {
  return ( 
    <div className="logo-container">
    <Link to="/" >
      <img className="logo" src="https://cdn3.iconfinder.com/data/icons/brain-games/1042/Board-Games-grey.png"/>
      <h1 className="title">Analog</h1>
    </Link>
  </div>
   );
}
 
export default Logo;