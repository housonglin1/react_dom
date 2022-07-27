import React from 'react';//引入react核心库
import ReactDOM from 'react-dom/client';//引入reactDOM
import './index.css';//引入样式文件
import App from './App';  //引入App
import reportWebVitals from './reportWebVitals';
import {BrowserRouter}from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
