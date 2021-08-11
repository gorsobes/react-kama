import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/message-reducer';

const Dialogs = (props) => {

  let state = props.messagePage;
    
    let dialogsElemets = state.dialogsData.map(dialog => {
      return  <DialogItem name={dialog.name} id={dialog.id}/>
    });

    
    let messageElements = state.messageData.map(m =>{
      return  <Message message={m.message} id={m.id}/> 
    });
   /* let newDialogElement = React.createRef();*/
  // debugger;
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
      props.sendMessage();
      

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        
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

