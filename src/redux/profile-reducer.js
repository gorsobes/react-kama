    const ADD_POST = 'ADD-POST';
    const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts:[
    {id:'1', massage:'Привет как дела?' , like:'12'},
    {id:'2', massage:'жу жуж жу жу жу', like:'3'},
    {id:'3', massage:'жу жуж жу жу жу', like:'33'}
  ],
  newPostText:'Что скажешь, бро?'
};

    const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
          id:'4', 
          massage:state.newPostText, 
          like:'0'
        };
        return{
          ...state,
          posts:[...state.posts,newPost],
          newPostText:''
        };
       
        
      } else if (action.type === UPDATE_NEW_POST_TEXT){
        return{
          ...state,
          newPostText:action.text
        };
      
     }
    


    return state;
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT , text: text
  }
}

export default profileReducer;