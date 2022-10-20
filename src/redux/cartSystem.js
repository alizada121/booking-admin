import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cart:JSON.parse(localStorage.getItem('reserved')) ? JSON.parse(localStorage.getItem('reserved')):[],
    startDate:JSON.parse(localStorage.getItem('start')) ? JSON.parse(localStorage.getItem('start')):[],
    endDate:JSON.parse(localStorage.getItem('end')) ? JSON.parse(localStorage.getItem('end')):[]
}
const cartSystem=createSlice({
    name:"hot",
    initialState,
    reducers:{
        AddCard:(state,action)=>{
            state.cart.push(action.payload)
        },

        AddStartDate:(state,action)=>{
            state.startDate.push(action.payload)
        },

        AddEndDate:(state,action)=>{
            state.endDate.push(action.payload)
        }
    }
})

export const {AddCard}=cartSystem.actions;
export const {AddStartDate}=cartSystem.actions;
export const {AddEndDate}=cartSystem.actions;
export default cartSystem.reducer;