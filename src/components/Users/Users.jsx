import React from 'react';
import  styles from './users.module.css';
import * as axios from 'axios';

let Users = (props) => {
  
 if (props.users.length === 0){
axios.get("https://social-network.samuraijs.com/api/1.0/users")
.then(response => {
   
    props.setUsers(response.data.items);
 
});

 }


return <div>
                {
                   props.users.map(u => 
                        <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : "https://stuki-druki.com/aforizms/Avril-Lavigne-01.jpg"} className={styles.userPhoto} />
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.followed ? <button onClick= { () => {props.unfollow(u.id)}}>Follow</button> :
                                <button onClick= { () => {props.follow(u.id)}}>unFollow</button>
                                }
                                
                            </div>
                        </span>
                        <span><div>{u.name}</div>
                        <div>{u.status}</div></span>
                         <div>{"u.location.country"}</div> 
                        <div>{"u.location.city"}</div> 
                        </div>)


                }

    </div>
}

export default Users;