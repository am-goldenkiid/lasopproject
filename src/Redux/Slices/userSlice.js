import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    info: {}
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginCtrl: (state, payload) =>{
            state.login = !state.login
        },

        infoCtrl: (state, {payload}) =>{
            state.info = payload
        }
    }
})


export default userSlice.reducer
export const {loginCtrl, infoCtrl} = userSlice.actions