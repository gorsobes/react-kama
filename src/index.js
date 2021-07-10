import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let postData = [
  {id:'1', massage:'Привет как дела?' , like:'12'},
  {id:'2', massage:'жу жуж жу жу жу', like:'3'},
  {id:'3', massage:'жу жуж жу жу жу', like:'33'}
  
]
let dialogsData = [
  {id:'1', name:'Dimasik'},
  {id:'2', name:'Nikiya'},
  {id:'3', name:'Liza'},
  {id:'4', name:'Sveta'},
  {id:'5', name:'Max'},
  {id:'6', name:'Joni'},
]
let messageData = [
  {id:'1', message:'Dimasik fg ff'},
  {id:'2', message:'Nikiya dfdfdf'},
  {id:'3', message:'Liza gfgf '},
  {id:'4', message:'Sveta'},
  {id:'5', message:'Хаха ха'},
  {id:'6', message:'Yo'},
]

ReactDOM.render(
  <App posts={postData} dialogsData={dialogsData} messageData={messageData}/>,document.getElementById('root')
);


