import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './comp/Sighln';
import Register from './comp/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blogcard from './comp/Blogcard';
import { Provider } from 'react-redux'
import store from './utils/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
   <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="login" element={<SignIn/>} />
      <Route path="register" element={<Register/>} />
      <Route path='rr' element={<Blogcard/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
