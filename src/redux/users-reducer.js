const FOLOLOW = 'FOLLOW';
const UNFOLOLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = { 
    users:[],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching: false
 /* users:[
{id:'1',photoUrl:'https://stuki-druki.com/aforizms/Avril-Lavigne-01.jpg',followed: false, fullName:'Lima' , status:'boss',location:{city:'Minsk', country: 'Belarus'}},
{id:'2',photoUrl:'https://stuki-druki.com/aforizms/Avril-Lavigne-01.jpg',followed: true, fullName:'Fordit' , status:'full',location:{city:'Omsk', country: 'Россия'}},
{id:'3',photoUrl:'https://stuki-druki.com/aforizms/Avril-Lavigne-01.jpg',followed: true, fullName:'Ева' , status:'главный специалист',location:{city:'Москва', country: 'Россия'}},
{id:'4',photoUrl:'https://stuki-druki.com/aforizms/Avril-Lavigne-01.jpg',followed: false, fullName:'Дима' , status:'уборшик',location:{city:'Питер', country: 'Россия'}}
]  */

};

const usersReducer = (state = initialState, action) => {

    switch(action.type){
            case FOLOLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId){
                            return {...u, followed: true}
                        }
                        return u;
                    })
                }
            case UNFOLOLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId){
                            return {...u, followed: false}
                        }
                        return u;
                    })
                }
             case SET_USERS: {
                 return {...state, users:action.users}
             }   
             case SET_CURRENT_PAGE: {
                return {...state, currentPage:action.currentPage }
            }    
            case SET_TOTAL_USERS_COUNT: {
                return {...state, totalUsersCount:action.count }
            }      

            case TOGGLE_IS_FETCHING: {
                return {...state, isFetching:action.isFetching }
            }  
        default:
            return state;
    }

}

export const follow  = (userId) => ({type: FOLOLOW, userId})
export const unfollow = (userId) => ({type: UNFOLOLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage  = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount  = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT,count:totalUsersCount})
export const toggleIsFetching  = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default usersReducer;