import React from 'react';
import ReactDOM from 'react-dom';
//import SignUp from './SignUp';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
// ReactDOM.render(<SignUp />,
//   document.getElementById('root')
// )
ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);

