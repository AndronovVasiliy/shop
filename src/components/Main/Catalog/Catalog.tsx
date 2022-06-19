import styles from './Catalog.module.scss'
import ListProducts from '../ListProducts'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getCatalogList, getcatalogCategories, getNewPortion } from '../../../store/reducers/ActionCatalog'
import CatalogCategories from './CatalogCategories'
import CatalogSearch from './CatalogSearch'

interface PropsType {
    catalog?: boolean
}

const Catalog = (props: PropsType) => {

    const dispatch = useAppDispatch()
    const {categories, selectedCategory, portionNumber, isLoading, query } = useAppSelector(state => state.catalog.catalogCategories)
    const { catalogItems } = useAppSelector(state => state.catalog.catalog)

    const loadNewPortion = () => {
        dispatch(getNewPortion({selectedCategory, portion: portionNumber * 6, q: query}))
    }

    useEffect(() => {        
        dispatch(getcatalogCategories())
        dispatch(getCatalogList({id: selectedCategory, q: query}))
    }, [dispatch, selectedCategory, query])

    return (
        <article className={styles.catalog}>
            <h2>Каталог</h2>
            {!props.catalog && <CatalogSearch />}
            <CatalogCategories categories = {categories}/>
            <ListProducts product={catalogItems} />
            <button disabled = {!isLoading} onClick={() => loadNewPortion()}>Загрузить еще</button>
        </article>
    )
}

export default Catalog
