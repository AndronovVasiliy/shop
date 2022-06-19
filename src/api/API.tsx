import axios from "axios";

export const instance = axios.create({
    baseURL: "https://back-shop-shop.herokuapp.com/api/"
});

export const catalogApi = {
    getCatalogList(id?: number | null, q?: string){        
        return instance.get(id ? `items?categoryId=${id}${q ? `&q=${q}` : ``}`:`items${q ? `?q=${q}` : ``}`).then(res => res.data)
    },
    getcatalogCategories(){
        return instance.get('categories').then(res => res.data)
    },
    getNewPortion(portion: number,  q: string, selectedCategory?: number,){
        return instance.get(selectedCategory ? `/items?categoryId=${selectedCategory}&offset=${portion}${q ? `&q=${q}` : ``}` : `/items?offset=${portion}${q ? `&q=${q}` : ``}`).then(res => res.data)
    }
}