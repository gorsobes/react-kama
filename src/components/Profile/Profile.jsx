import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return  (
    <div>
    <div>
     <img src="https://s1.1zoom.ru/big0/697/Love_Night_Moon_Trees_Silhouette_Two_Dating_576752_1280x853.jpg" alt="" />
     </div>
   <div>
    ava +
   </div>
 <MyPosts />
    </div>
    ); 
}

export default Profile;