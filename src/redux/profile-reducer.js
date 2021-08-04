    const ADD_POST = 'ADD-POST';
    const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
          id:'4', 
          massage:state.newPostText, 
          like:'0'
        };
        state.posts.push(newPost);
        state.newPostText='';
        
      } else if (action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.text;
        
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