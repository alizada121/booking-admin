import {configureStore} from "@reduxjs/toolkit";
import cartSystem from "./redux/cartSystem";
const store=configureStore({
    reducer:{
        hot:cartSystem
    }
})

export default store;