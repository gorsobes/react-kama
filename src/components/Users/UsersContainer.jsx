import React from 'react';
import Users from "./Users";
import { connect } from 'react-redux';
import { followAC,unfollowAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
   
    return {
        users: state.usersPage.users
    }
}

let mapDispachToProps = (dispatch) => {
        return {
            follow:(userId) => {
                dispatch(followAC(userId));
            },
            unfollow:(userId) => {
                dispatch(unfollowAC(userId));
            },
            setUsers:(users) => {
                dispatch(setUsersAC(users));
            }
        }
}

const UsersContainer = connect (mapStateToProps,mapDispachToProps)(Users);

export default UsersContainer;


