import {configureStore} from "@reduxjs/toolkit";
import cartSystem from "./redux/cartSystem";
import filterList from "./redux/filterList";
const store=configureStore({
    reducer:{
        hot:cartSystem,
        filter:filterList
    }
})

export default store;