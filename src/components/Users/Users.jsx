import React from 'react';
import  styles from './users.module.css';
import fotoUser from '../../../src/assets/images/ava.jpg';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages =[];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }
    

    return(

        <div>  
            <div>
            {pages.map(p => {
               return <span className={props.currentPage === p && styles.userPage}
               onClick={ (e) => { props.onPageChanged(p); }}>{p}</span>
            })}     
                
            </div>

                {
                    
                   
                   props.users.map(u => 
                        <div key={u.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : fotoUser} className={styles.userPhoto} />
                                </NavLink>  </div>
                        </div>
                        <div>
                            
                                {u.followed 
                                ? <button disabled={props.followingInProgress.some(id =>id === u.id)} onClick= { () => {
                                  
                                    props.togglefollowingInProgress(true,u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{ 
                                        withCredentials:true,
                                        headers: {
                                            "API-KEY": "7f5fd326-fff1-4b0e-92b1-ec5070fdf68b"
                                        }
                                    
                                    })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.unfollow(u.id);
                                
                                        }
                                        props.togglefollowingInProgress(false,u.id);
                                    });

                                   
                                
                                }}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id =>id === u.id)} onClick= { () => {
                                    props.togglefollowingInProgress(true,u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{ 
                                        withCredentials:true,
                                        headers: {
                                            "API-KEY": "7f5fd326-fff1-4b0e-92b1-ec5070fdf68b"
                                        }
                                    
                                    })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.follow(u.id);
                                        }
                                        props.togglefollowingInProgress(false,u.id);
                                    });

                                    
                                
                                }}>Follow</button>
                                }
                                
                            
                        </div>
                        <div><div>{u.name}</div>
                        <div>{u.status}</div></div>
                         <div>{"u.location.country"}</div> 
                        <div>{"u.location.city"}</div> 
                        </div>)

                            }
                

    </div>
        )

}

export default Users;