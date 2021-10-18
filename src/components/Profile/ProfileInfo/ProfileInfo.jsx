import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import p from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

if (!props.profile) {
  return <Preloader/>
}

    return  (
    <div>
   
    <div>
     <img id={p.fotoProfileInfo}  src="https://s1.1zoom.ru/big0/697/Love_Night_Moon_Trees_Silhouette_Two_Dating_576752_1280x853.jpg" alt="" />
     </div>
   <div>
     
     <img src={props.profile.photos.large}  />
    ava + description
   </div>
 
    </div>
    ); 
}

export default ProfileInfo;