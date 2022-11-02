import {createSlice} from "@reduxjs/toolkit";

const initialState={
    roomType:JSON.parse(localStorage.getItem('selectedFilter')) ? JSON.parse(localStorage.getItem('selectedFilter')):[],
    min:[],
    max:[]

}
const filterList=createSlice({
    name:"filter",
    initialState,
    reducers:{
        AddRoomType:(state,action)=>{
            state.roomType.push(action.payload)
        },

        AddMin:(state,action)=>{
            state.min.push(action.payload)
        },

        AddMax:(state,action)=>{
            state.max.push(action.payload)
        }
    }
})

export const {AddRoomType}=filterList.actions;
export const {AddMin}=filterList.actions;
export const {AddMax}=filterList.actions;
export default filterList.reducer;