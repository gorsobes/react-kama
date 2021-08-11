import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPoststContainer = (props) => {

let state = props.store.getState();

 let addPost = ()=> {

   props.store.dispatch(addPostActionCreator());

 }
 
 let onPostChange = (text) => {
  //let text = newPostsElement.current.value;
  //props.updateNewPostText (text);
  let action = updateNewPostTextActionCreator(text);
  props.store.dispatch(action);
 }


 
    return  (
      <MyPosts 
      updateNewPostText={onPostChange} 
      addPost={addPost} 
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      />
    );
}

export default MyPoststContainer;