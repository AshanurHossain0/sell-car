import { configureStore } from "@reduxjs/toolkit";

import carSlice from "./carSlice";

const store=configureStore({
    reducer:{
        car:carSlice
    }
})

export default store;