import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import catalogtSlice from '../../../store/reducers/catalogReduxer';
import styles from "./Catalog.module.scss"

interface IFormInput {
    querySearch: string
}

const CatalogSearch = () => {

    const { register, handleSubmit } = useForm<IFormInput>();
    const dispatch = useAppDispatch()
    const {query} = useAppSelector(state => state.catalog.catalogCategories)

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        dispatch(catalogtSlice.actions.addQuerySearch(data.querySearch))
    }   
    
    return (
        <>
            <form className={styles.catalog_search} onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={query}  {...register("querySearch")} />
            </form>
        </>
    )
}

export default CatalogSearch
