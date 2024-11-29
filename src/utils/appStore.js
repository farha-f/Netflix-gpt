import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/useSlice";
import movieSlice from "../utils/movieSLice";
const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice
    }
});
export default appStore;