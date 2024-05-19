import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: {
    user_email: "",
    username: "",
    password: "",
    confirm: "",
  },
  login: {
    user_email: "",
    password: "",
  },
};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    updateRegister: (state, action) => {
      const { name, value } = action.payload;
      state.register = { ...state.register, [name]: value };
    },
    clearRegister: (state) => {
        state.register = initialState.register
    },
    clearLogin: (state) => {
        state.login = initialState.login
    },
    updateLogin: (state, action) => {
        const {name, value} = action.payload
        state.login = {...state.login, [name]: value}
    }
  },
});
export default formSlice.reducer;
export const {updateLogin, clearLogin, clearRegister, updateRegister} = formSlice.actions