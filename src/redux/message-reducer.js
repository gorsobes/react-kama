const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

 const messageReducer = (state, action) => {
    switch(action.type){
      case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
        return state;
        case SEND_MESSAGE:
          let body = state.newMessageBody;
      
      state.messageData.push({id:'7', message:body});
      state.newMessageBody = '';
      return state;
      default:
        return state;

    }
    
}
export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY , body: body
  }
}

export default messageReducer;