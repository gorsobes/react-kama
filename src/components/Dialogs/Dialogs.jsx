import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/message-reducer';

const Dialogs = (props) => {

  let state = props.store.getState().messagePage;
    /* let dialogsData = [
        {id:'1', name:'Dimasik'},
        {id:'2', name:'Nikiya'},
        {id:'3', name:'Liza'},
        {id:'4', name:'Sveta'},
        {id:'5', name:'Max'},
        {id:'6', name:'Joni'},
    ] */
    let dialogsElemets = props.dialogsData.map(dialog => {
      return  <DialogItem name={dialog.name} id={dialog.id}/>
    });

    /* let messageData = [
        {id:'1', message:'Dimasik fg ff'},
        {id:'2', message:'Nikiya dfdfdf'},
        {id:'3', message:'Liza gfgf '},
        {id:'4', message:'Sveta'},
        {id:'5', message:'Хаха ха'},
        {id:'6', message:'Yo'},
    ] */
    let messageElements = props.messageData.map(m =>{
      return  <Message message={m.message} id={m.id}/> 
    });
   /* let newDialogElement = React.createRef();*/
  // debugger;
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
            {dialogsElemets}
            </div>
            <div className={d.massages}>
              {messageElements}
            </div>
            <div>
<textarea value={newMessageBody} 
placeholder='enter your message'
onChange={onNewMessageChange}></textarea>
</div>
 <button className={d.dialodsButton} onClick={onSendMessageClick}>Add dialogs</button>
        </div>
    )
}

export default Dialogs;

