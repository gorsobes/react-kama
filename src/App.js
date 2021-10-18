import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import {Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
const App = (props)=> {
  return (
    
   <div className='app-wrapper'>
     <HeaderContainer />
    

     <Navbar /> 

     <div className="app-wrapper-content">
     
     <Route path='/dialogs' render={()=> <DialogsContainer/>} />
     <Route path='/profile/:userId?' render={()=> <ProfileContainer/>} />
     <Route path='/users' render={()=> <UsersContainer/>} />
     <Route path='/news' render={()=> <News/>} />
     </div>
   </div>
   
  );
}

export default App;
