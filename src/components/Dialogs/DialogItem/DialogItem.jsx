import React from 'react';
import d from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
let pach = "/dialogs/" + props.id;

    return  <div className={d.dialog}>
    <NavLink to={pach}>{props.name}</NavLink> 
 </div>
}



export default DialogItem;

