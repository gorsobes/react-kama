import React from 'react';
import n from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';


const Navbar = (props) => {
    return  (
    <nav className={n.nav}>
    <div className={n.item}>
      <NavLink to="/profile" activeClassName={n.active}>Profile</NavLink> 
    </div>
    <div className={n.item}>
    <NavLink to="/dialogs" activeClassName={n.active}>Messages</NavLink> 
     
    </div>
    <div className={n.item}>
    <NavLink to="/users" activeClassName={n.active}>Users</NavLink> 
     
    </div>
    <div className={n.item}>
    <NavLink to="/news" activeClassName={n.active}>News</NavLink> 
     
    </div>
    <div className={n.item}>
    <a href="#">Music</a> 
     
    </div>
    <div className={n.item}>
    <a href="#">Setings</a> 
     
    </div>
   {/*  <Sidebar sidebar={props.sidebar}/> */}
    
  </nav>
    )
}

export default Navbar;