import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/message-reducer';
import { connect } from 'react-redux';

/* const DialogsContainer = (props) => {
  let state = props.store.getState().messagePage;

    let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());

    }
    let onNewMessageChange = (body) => {
        
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs
        messagePage={state}
        sendMessage={onSendMessageClick} 
        updateNewMessageBody={onNewMessageChange}/>
    );
} */

let mapStateToProps = (state) => {
  return {
      messagePage: state.messagePage
  }
}

let mapDispachToProps = (dispatch) => {
    return {
      sendMessage: () => {
        dispatch(sendMessageCreator());
      },
      updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}


const DialogsContainer = connect (mapStateToProps,mapDispachToProps)(Dialogs);

export default DialogsContainer;

