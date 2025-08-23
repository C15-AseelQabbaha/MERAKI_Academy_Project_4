import{configureStore}from "@reduxjs/toolkit"
import authReducer from"./authSlice"
import productReducer from "./productSlice";
import cartReducer from "./CartSlice";
export const store =configureStore({
reducer:{
       auth: authReducer,
      product: productReducer,
          cart: cartReducer,
}

})