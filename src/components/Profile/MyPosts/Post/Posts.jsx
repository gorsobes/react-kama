import React from 'react';
import p from './Posts.module.css';

const Posts = (props) => {
    return  (
     
  <div className={p.item}>
    <img src="https://logos.flamingtext.com/Name-Logos/Ava-design-girls-name.png" alt="" />
{props.message}
<div>
<span>like {props.like}</span>
</div>
  </div>
  
    ); 
}

export default Posts;