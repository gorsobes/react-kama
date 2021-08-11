import React from 'react';
import m from './../../MyPosts/MyPosts.module.css';
import Posts from './Posts';



const MyPostst = (props) => {

 let postElement = props.posts.map((p) => 
 {return <>
 <Posts message={p.massage} like={p.like} />
 </>
 }
 );

 let newPostsElement = React.createRef();
 let onAddPost = ()=> {

  props.addPost ();

   
   //props.dispatch(addPostActionCreator());

 }
 
 let onPostChange = () => {
  let text = newPostsElement.current.value;
  props.updateNewPostText (text);
  //let action = updateNewPostTextActionCreator(text);
 // props.dispatch(action);
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
 <button onClick={onAddPost}>Add post</button>
 
 
  <div className={m.posts}>

{postElement}

  </div>
  
  </div>
    ); 
}

export default MyPostst;