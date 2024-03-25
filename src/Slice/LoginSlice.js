import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name : 'slice',
    initialState:false,
    reducers:{
        login(state){
            return true;
           
        },
        logout(state){
            return false;
        }
    }
})
export default LoginSlice.reducer;
export const { actions ,reducer} =LoginSlice