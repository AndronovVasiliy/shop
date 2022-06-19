import { createAsyncThunk } from "@reduxjs/toolkit";
import { catalogApi } from "../../api/API";

export const getCatalogList = createAsyncThunk(
    'catalog/listproduct',
    async ({id, q}: {id: number | null, q: string}, thunkAPI) => {
        try {
            let response;
            id ? response = await catalogApi.getCatalogList(id, q) : response = await catalogApi.getCatalogList(id, q)
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить каталог")
        }

    }
)

export const getcatalogCategories = createAsyncThunk(
    'catalog/catigories',
    async (_, thunkAPI) => {
        try {
            const response = await catalogApi.getcatalogCategories()
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить")
        }

    }
)

export const getNewPortion = createAsyncThunk(
    'catalog/getNewPoritan',
    async ({ selectedCategory, portion, q }: { selectedCategory: number | null, portion: number, q: string }, thunkAPI) => {
        try {
            let response;
            selectedCategory ? response = await catalogApi.getNewPortion(portion, q, selectedCategory) : response = await catalogApi.getNewPortion(portion, q)
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить")
        }
    }
)