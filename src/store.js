import { configureStore } from "@reduxjs/toolkit";
import VendorReducer from "./Redux/vendorSlice"

export default configureStore({
    reducer: {
        VendorInfo: VendorReducer,
    }
})