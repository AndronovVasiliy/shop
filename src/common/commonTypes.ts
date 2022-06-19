export interface DetailProductType {
    category: number
    color: string
    heelSize: string
    id: number
    images: Array<string>
    manufacturer: string
    material: string
    price: number
    reason: string
    season: string
    sizes: SizeType[]
    sku: string
    title: string
}

export interface ShortDescriptionProductType {
    category: number
    id: number
    images: string[]
    price: number
    title: string
}

export interface SizeType {
    size: string
    avalible: boolean
}

export interface ItemInCartType {
    size: string
    product: DetailProductType
    number: number
}

export interface CatalogItemType {
    category: number
    id: number
    images: string[]
    price: number
    title: string
}

export interface CatalogCategoriesType {
    id: number,
    title: string
}
