const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
  messageData: [
    {id:'1', message:'Dimasik fg ff'},
    {id:'2', message:'Nikiya dfdfdf'},
    {id:'3', message:'Liza gfgf '},
    {id:'4', message:'Sveta'},
    {id:'5', message:'Хаха ха'},
    {id:'6', message:'Yo'}
  ],
  dialogsData: [
    {id:'1', name:'Dimasik'},
    {id:'2', name:'Nikiya'},
    {id:'3', name:'Liza'},
    {id:'4', name:'Sveta'},
    {id:'5', name:'Max'},
    {id:'6', name:'Joni'}
  ],
  newMessageBody: ""
};

 const messageReducer = (state = initialState, action) => {
  
 
  let stateCopy;
    switch(action.type){
      case UPDATE_NEW_MESSAGE_BODY:
        return {
          ...state,
          newMessageBody: action.body
        
        };
        
        case SEND_MESSAGE:
          let body = state.newMessageBody;
          
          return {
            ...state,
            newMessageBody: '',
            messageData: [...state.messageData, {id:'7', message:body}]
          };
      
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