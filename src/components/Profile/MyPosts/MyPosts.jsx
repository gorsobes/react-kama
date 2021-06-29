import React from 'react';
import m from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPostst = () => {
    return  (
      <>
  <div>
my post
  </div>
  <div>
<textarea name="" id="" cols="30" rows="10"></textarea>
 <button>Add post</button>
 
  </div>
  <div className="{m.posts}">
<Posts message="Привет как дела?" like="10" />
<Posts message="жу жуж жу жу жу" like="40"/>


  </div>
  
  </>
    ); 
}

export default MyPostst;