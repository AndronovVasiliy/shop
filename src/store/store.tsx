import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catalogtSlice from "./reducers/catalogReduxer";
import productSlice from "./reducers/productReduxer";

const rootReducer = combineReducers({
    product: productSlice.reducer,
    catalog: catalogtSlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']