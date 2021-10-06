import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPoststContainer from './MyPosts/Post/MyPostsContainer';

const Profile = (props) => {

  
    return  (
    <div>
      <ProfileInfo profile={props.profile} />
       <MyPoststContainer/> 
    </div>
    )
}

export default Profile;