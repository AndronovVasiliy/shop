import { CatalogCategoriesType } from '../../../common/commonTypes'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import catalogtSlice from '../../../store/reducers/catalogReduxer'
import styles from './Catalog.module.scss'

interface PropsType {
    categories: CatalogCategoriesType[]
}

const CatalogCategories = ({ categories }: PropsType) => {

    const dispatch = useAppDispatch()
    const { selectCategory } = catalogtSlice.actions

    return (
        <ul>
            <li onClick={() => dispatch(selectCategory(null))} key={0}>Все</li>
            {categories.map(i => <li onClick={() => dispatch(selectCategory(i.id))} key={i.id}>{i.title}</li>)}
        </ul>
    )
}

export default CatalogCategories