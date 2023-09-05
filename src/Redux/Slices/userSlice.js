import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    info: {},
    token: null,
    payment: false
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginCtrl: (state, {payload}) =>{
            state.login = !state.login
            state.token = payload
        },
        
        infoCtrl: (state, {payload}) =>{
            state.info = payload
        },
        activatePayment: (state) =>{
            state.payment = true
        }
    }
})


export default userSlice.reducer
export const {loginCtrl, infoCtrl, activatePayment} = userSlice.actions