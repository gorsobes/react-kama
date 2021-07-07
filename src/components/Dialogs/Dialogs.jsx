import React from 'react';
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
let pach = "/dialogs/" + props.id;

    return  <div className={d.dialog}>
    <NavLink to={pach}>{props.name}</NavLink> 
 </div>
}

let Message = (props) => {
    return  <div className={d.message}>{props.message}, {props.id}</div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id:'1', name:'Dimasik'},
        {id:'2', name:'Nikiya'},
        {id:'3', name:'Liza'},
        {id:'4', name:'Sveta'},
        {id:'5', name:'Max'},
        {id:'6', name:'Joni'},
    ]
    let dialogsElemets = dialogsData.map(dialog => {
      return  <DialogItem name={dialog.name} id={dialog.id}/>
    });

    let messageData = [
        {id:'1', message:'Dimasik fg ff'},
        {id:'2', message:'Nikiya dfdfdf'},
        {id:'3', message:'Liza gfgf '},
        {id:'4', message:'Sveta'},
        {id:'5', message:'Хаха ха'},
        {id:'6', message:'Yo'},
    ]
    let messageElements = messageData.map(m =>{
      return  <Message message={m.message} id={m.id}/> 
    });
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
            {dialogsElemets}
            </div>
            <div className={d.massages}>
              {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;

