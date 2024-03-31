import { createSlice, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
const initialAuthState = { isAuth: false, adminID: "" };
const userLoggedInState = { userlogin: false, username: "" };

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const authSlice = createSlice({
  name: "authenticate",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.adminID = action.payload;
    },
    logoff(state) {
      state.isAuth = false;
      state.adminID = "";
    },
  },
});

const userLoginSlice = createSlice({
  name: "authenticateUser",
  initialState: userLoggedInState,
  reducers: {
    login(state, action) {
      state.userlogin = true;
      state.username = action.payload;
    },
    logoff(state) {
      state.userlogin = false;
      state.username = "";
    },
  },
});

const reducer = combineReducers({
  authenticate: authSlice.reducer,
  authenticateUser: userLoginSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const authActions = authSlice.actions;
export const userLoginActions = userLoginSlice.actions;
export default store;
