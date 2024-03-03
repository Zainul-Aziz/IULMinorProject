import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };

const authSlice = createSlice({
  name: "authenticate",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logoff(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: { authenticate: authSlice.reducer },
});

export const authActions = authSlice.actions;
export default store;
