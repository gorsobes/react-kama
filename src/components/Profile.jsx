import React from 'react';
import p from './Profile.module.css';

const Profile = () => {
    return  (
    <div className={p.content}>
    <div>
     <img src="https://s1.1zoom.ru/big0/697/Love_Night_Moon_Trees_Silhouette_Two_Dating_576752_1280x853.jpg" alt="" />
     </div>
   <div>
    ava +
   </div>
  <div>
my post
  </div>
  <div>
new post
  </div>
  <div className={p.item}>
post 1
  </div>
  <div className={p.item}>
post 2
</div>
    </div>
    ); 
}

export default Profile;