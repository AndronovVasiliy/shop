import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatalogItemType, CatalogCategoriesType } from "../../common/commonTypes";
import { getCatalogList, getcatalogCategories, getNewPortion } from "./ActionCatalog";

export interface CatalogType {
    catalog: {
        catalogItems: CatalogItemType[]
        isLoading: boolean
        error: string
    }
    catalogCategories: {
        categories: CatalogCategoriesType[]
        isLoading: boolean
        error: string
        selectedCategory: null | number
        portionNumber: number,
        query: string
    }

}

const initialState: CatalogType = {
    catalog: {
        catalogItems: [],
        isLoading: false,
        error: '',
    },
    catalogCategories: {
        categories: [],
        isLoading: false,
        error: '',
        selectedCategory: null,
        portionNumber: 1,
        query: ''
    }

}

const catalogtSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        selectCategory(state, action: PayloadAction<number | null>) {
            state.catalogCategories.selectedCategory = action.payload
            state.catalogCategories.portionNumber = 1
        },
        addQuerySearch(state, action: PayloadAction<string>){
            state.catalogCategories.query = action.payload
        }
    },
    extraReducers: {
        [getCatalogList.fulfilled.type]: (state, action: PayloadAction<CatalogItemType[]>) => {
            state.catalog.catalogItems = action.payload
        },
        [getCatalogList.pending.type]: (state) => {
            state.catalog.isLoading = true
        },
        [getCatalogList.rejected.type]: (state, action) => {
            state.catalog.isLoading = false
            state.catalog.error = action.payload
        },
        [getcatalogCategories.fulfilled.type]: (state, action: PayloadAction<CatalogItemType[]>) => {
            state.catalogCategories.categories = action.payload
        },
        [getcatalogCategories.pending.type]: (state) => {
            state.catalogCategories.isLoading = true
        },
        [getcatalogCategories.rejected.type]: (state, action) => {
            state.catalogCategories.isLoading = false
            state.catalogCategories.error = action.payload
        },
        [getNewPortion.fulfilled.type]: (state, action: PayloadAction<CatalogItemType[]>) => {
            state.catalogCategories.portionNumber += 1
            state.catalog.catalogItems = [...state.catalog.catalogItems, ...action.payload]
        },
        [getNewPortion.pending.type]: (state) => {
            state.catalog.isLoading = true
        },
        [getNewPortion.rejected.type]: (state, action) => {
            state.catalog.isLoading = false
            state.catalog.error = action.payload
        }
    }
})

export default catalogtSlice
