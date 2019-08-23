import React from 'react';
import Header from './images/Header.png'
import '../HeaderContainer/header.css'

const HeaderWidget = () => {
  return ( 
    <div className="header">
      <img  className="header" src={Header} />
    </div>
   );
}
 
export default HeaderWidget;