import React from 'react';
import  styles from './users.module.css';
import fotoUser from '../../../src/assets/images/ava.jpg';

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
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : fotoUser} className={styles.userPhoto} />
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
        )

}

export default Users;