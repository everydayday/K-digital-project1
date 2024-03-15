import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // stylesheet도 import로 받아들임
import App from './App'; //.js 는 생략됨 // 우리가 만들 것
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  // 갖다끼운다  // 노드를 갖다끼움  
 // <React.StrictMode>    
    <App />         
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals(console.log);




