import React from 'react';
import n from './Navbar.module.css';


const Navbar = () => {
    return  <nav className={n.nav}>
    <div className={n.item}>
      <a href="#">Profile</a> 
    </div>
    <div className={n.item}>
    <a href="#">Messages</a> 
     
    </div>
    <div className={n.item}>
    <a href="#">News</a> 
     
    </div>
    <div className={n.item}>
    <a href="#">Music</a> 
     
    </div>
    <div className={n.item}>
    <a href="#">Setings</a> 
     
    </div>
    
  </nav>
}

export default Navbar;