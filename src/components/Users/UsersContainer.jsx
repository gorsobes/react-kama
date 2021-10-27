import React from 'react';
import { connect } from 'react-redux';
import { follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,togglefollowingInProgress} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {
   
    componentDidMount(){
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                });
    }
      
                
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{ withCredentials:true})
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
         
        });
        
        
    }
    

 
    


    render() {

        return <>
        {this.props.isFetching ? <Preloader />: null}
     
       
         <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        togglefollowingInProgress={this.props.togglefollowingInProgress}
        followingInProgress={this.props.followingInProgress}
        />
</>
    }
}

let mapStateToProps = (state) => {
   
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}

let mapDispachToProps =  {
            follow,
            unfollow,
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            toggleIsFetching,
            togglefollowingInProgress
            }


const UsersContainer = connect (mapStateToProps,mapDispachToProps)(UsersAPIComponent);

export default UsersContainer;


