import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import {Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
const App = (props)=> {
  return (
    
   <div className='app-wrapper'>
     <Header />
     {/* <Navbar sidebar={props.state.sidebar.friends} /> */}

     <Navbar /> 

     <div className="app-wrapper-content">
     
     <Route path='/dialogs' render={()=> <DialogsContainer store = {props.store} />} />
     <Route path='/profile' render={()=> <Profile store = {props.store} />} />
     <Route path='/users' render={()=> <UsersContainer/>} />
     <Route path='/news' render={()=> <News/>} />
     </div>
   </div>
   
  );
}

export default App;
