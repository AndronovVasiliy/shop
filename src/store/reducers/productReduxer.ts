import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetailProductType, ItemInCartType } from "../../common/commonTypes";

export interface ItemCartType {
    cart: ItemInCartType[]
}

const initialState: ItemCartType = {
    cart: [],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{ size: string, product: DetailProductType, number: number }>) {
            let replay = state.cart.findIndex(item => item.product.id === action.payload.product.id)
            if (replay >= 0) {
                state.cart[replay].number = state.cart[replay].number + action.payload.number
            } else state.cart = [...state.cart, action.payload]
        }
    }
})

export default productSlice
