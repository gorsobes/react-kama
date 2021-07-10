import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import {BrowserRouter,Route} from "react-router-dom";
const App = (props)=> {
  return (
    <BrowserRouter>
   <div className='app-wrapper'>
     <Header />
     <Navbar />
     <div className="app-wrapper-content">
     {/* <Route path='/dialogs' component={Dialogs} />
     <Route path='/profile' component={Profile} />
     <Route path='/news' component={News} /> */}

     <Route path='/dialogs' render={()=> <Dialogs messageData={props.messageData} dialogsData={props.dialogsData} />} />
     <Route path='/profile' render={()=> <Profile posts={props.posts}/>} />
     <Route path='/news' render={()=> <News/>} />
     </div>
   </div>
   </BrowserRouter>
  );
}

export default App;
