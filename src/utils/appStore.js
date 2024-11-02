import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/useSlice";

const appStore=configureStore({
    reducer:{
        user:userSlice
    }
});
export default appStore;