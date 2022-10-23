import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './mainSlice'

export default configureStore({
    reducer: {
        app_data: mainReducer,
    }
})