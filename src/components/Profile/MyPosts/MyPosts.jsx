import React from 'react';
import m from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPostst = () => {

  let postData = [
    {id:'1', massage:'Привет как дела?' , like:'12'},
    {id:'2', massage:'жу жуж жу жу жу', like:'3'},
    {id:'3', massage:'жу жуж жу жу жу', like:'33'}
    
]

let postElement = postData.map(p => <Posts message={p.massage} like={p.like} />)

    return  (
      <>
  <div>
my post
  </div>
  <div>
<textarea name="" id="" cols="30" rows="10"></textarea>
</div>
 <button>Add post</button>
 
 
  <div className={m.posts}>

{postElement}

  </div>
  
  </>
    ); 
}

export default MyPostst;