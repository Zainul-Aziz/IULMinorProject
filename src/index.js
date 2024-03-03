import React from "react";
import ReactDOM from "react-dom/client";
//import SignUp from './SignUp';
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import store from "../src/store/index";
import { Provider } from "react-redux";
// ReactDOM.render(<SignUp />,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
