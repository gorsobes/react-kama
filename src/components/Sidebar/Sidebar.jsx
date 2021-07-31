import React from 'react';
import si from './Sidebar.module.css';
const Sidebar = (props) => {
  let sidebarFriends = props.sidebar.map(s => {
    return  <div className={si.sidebarFlex}>

    <img src={s.url} alt={s.id} />
    <h3 className={si.sibebbarName}>{s.name}</h3>
  </div>
  });

    return (
      <div>
        <h1>Friends</h1>
<div>
  {sidebarFriends}
</div>
      </div>
    )
}

export default Sidebar;