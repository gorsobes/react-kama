import React from 'react';
import h from './Header.module.css';
import {NavLink} from 'react-router-dom';



const Header = (props) => {
  
    return <header className={h.header}>
    <img src="https://e7.pngegg.com/pngimages/1024/68/png-clipart-lego-logo-icons-logos-emojis-iconic-brands.png" alt="" />
  
  <div className={h.loginBlock}>
    {props.isAuth ? props.login :<NavLink to={'/login'}>Login</NavLink>}
    
  </div>
  </header>
}

export default Header;