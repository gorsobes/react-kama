import * as axios from 'axios';


const instance = axios.create({
  withCredentials:true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "7f5fd326-fff1-4b0e-92b1-ec5070fdf68b"
}


});

export const usersAPI = {
  getUsers(currentPage=1,pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
     .then(response =>{
          return response.data;
      });
 
 }


}


export const getUsers2 = (currentPage=1,pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
   .then(response => response.data);

}


