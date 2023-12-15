import { configureStore} from "@reduxjs/toolkit";
import  cartReducer from "../Store/cartReducer";

export default configureStore({
    reducer:{
        cart:cartReducer

    }
})

