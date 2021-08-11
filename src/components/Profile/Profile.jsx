import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPoststContainer from './MyPosts/Post/MyPostsContainer';

const Profile = (props) => {

  
    return  (
    <div>
      <ProfileInfo  />
       <MyPoststContainer 
       store= {props.store}/> 
    </div>
    )
}

export default Profile;