import { configureStore } from "@reduxjs/toolkit";
export default configureStore
import { CryptoApi } from "../services/CryptoApi";
import { CryptoNewsApi } from "../services/CryptoNewsApi";
export const store = configureStore({
    reducer: {
        [CryptoApi.reducerPath] : CryptoApi.reducer,
        [CryptoNewsApi.reducerPath] : CryptoNewsApi.reducer
    },
    middleware : (getdefaultmiddlewar)=> getdefaultmiddlewar().concat(CryptoApi.middleware,CryptoNewsApi.middleware),
})