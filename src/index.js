import React from "react";
import ReactDOM from "react-dom/client";
//import SignUp from './SignUp';
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import store from "../src/store/index";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
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

const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </CookiesProvider>
);
