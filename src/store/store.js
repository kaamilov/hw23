

import { configureStore } from "@reduxjs/toolkit";
import todSlice from "../slices/todSlice";
export const store = configureStore({
    reducer:{
        todo:todSlice
    }
})