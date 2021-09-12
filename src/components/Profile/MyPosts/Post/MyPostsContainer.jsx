import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


/* const MyPoststContainer = (props) => {

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
} */

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

let mapDispachToProps = (dispatch) => {
    return {
      updateNewPostText: (text) => {
        let action = updateNewPostTextActionCreator(text);
                      dispatch(action);
      },
      addPost: () => {
        dispatch(addPostActionCreator());
    }
  }
}


const MyPoststContainer = connect (mapStateToProps,mapDispachToProps)(MyPosts);

export default MyPoststContainer;