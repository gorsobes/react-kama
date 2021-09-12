const FOLOLOW = 'FOLLOW';
const UNFOLOLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = { users:[]
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
                 return {...state, users:[...state.users, ...action.users]}
             }           
        default:
            return state;
    }

}

export const followAC  = (userId) => ({type: FOLOLOW, userId})
export const unfollowAC  = (userId) => ({type: UNFOLOLOW, userId})
export const setUsersAC  = (users) => ({type: SET_USERS, users})
export default usersReducer;