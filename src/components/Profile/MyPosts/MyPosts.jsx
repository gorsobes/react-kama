import React from 'react';
import m from './MyPosts.module.css';
import Posts from './Post/Posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';


const MyPostst = (props) => {

 let postElement = props.posts.map((p) => 
 {return <>
 <Posts message={p.massage} like={p.like} />
 </>
 }
 );

 let newPostsElement = React.createRef();
 let addPost = ()=> {
   
   props.dispatch(addPostActionCreator());

 }
 
 let onPostChange = () => {
  let text = newPostsElement.current.value;
  let action = updateNewPostTextActionCreator(text);
  props.dispatch(action);
 }


 
    return  (
      <div>
  <div>
my post
  </div>
  <div>
<textarea
value={props.newPostText}
onChange={onPostChange}
ref={newPostsElement}/>
</div>
 <button onClick={addPost}>Add post</button>
 
 
  <div className={m.posts}>

{postElement}

  </div>
  
  </div>
    ); 
}

export default MyPostst;