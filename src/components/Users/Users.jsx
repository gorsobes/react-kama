import React from 'react';
import  styles from './users.module.css';
import fotoUser from '../../../src/assets/images/ava.jpg';
import {NavLink} from "react-router-dom";


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
                                   props.unfollow(u.id)}}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id =>id === u.id)} onClick= { () => {
                                    props.follow(u.id)}}>Follow</button>
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