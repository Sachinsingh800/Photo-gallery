import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes ,Navigate } from 'react-router-dom';
import Blog from './Components/Pages/Blog/Blog';
import Registration from './Registartion/Registration';
import Photo from './Components/Pages/Photo/Photo';
import Login from './Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
<Routes>
  <Route path={'/Home'} element={<App />} />
  <Route path={'/'} element={<Login />} />
  <Route path={'/Registration'} element={<Registration />} />
  <Route path={'/Photo'} element={<Photo />} />
  <Route path={'/Blog'} element={<Blog />} />
</Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

