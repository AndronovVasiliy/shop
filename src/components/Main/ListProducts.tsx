import { ShortDescriptionProductType } from '../../common/commonTypes'
import styles from './ListProducts.module.scss'
import ProductCart from './ProductCart/ProductCart'

interface PropsType {
    product: ShortDescriptionProductType[]
}

const ListProducts = (props: PropsType) => {
    return (
        <ul className={styles.list_produkts}>
            {props.product.map(i => <ProductCart key={i.id} {...i} />)}
        </ul>
    )
}

export default ListProducts