import { createSlice } from "@reduxjs/toolkit";


const initialState={searchQuery:""};

const carSlice=createSlice({
    name:"cars",
    initialState,
    reducers:{
        search(state,action){
            return state={...state,searchQuery:action.payload};
        }
    }
})

export const {search} = carSlice.actions;
export default carSlice.reducer;