import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import {Route} from "react-router-dom";
const App = (props)=> {
  return (
    
   <div className='app-wrapper'>
     <Header />
     <Navbar sidebar={props.state.sidebar.friends} />
     <div className="app-wrapper-content">
     
     <Route path='/dialogs' render={()=> <DialogsContainer store = {props.store} />} />
     <Route path='/profile' render={()=> <Profile store = {props.store} />} />
     <Route path='/news' render={()=> <News/>} />
     </div>
   </div>
   
  );
}

export default App;
