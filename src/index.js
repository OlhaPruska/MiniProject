import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


const buttn =document.querySelector('button')
const tble=document.getElementById("table")

buttn.addEventListener('click',()=>{
  const root =ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App />
  );
  tble.classList.add('displayTrue')
})


