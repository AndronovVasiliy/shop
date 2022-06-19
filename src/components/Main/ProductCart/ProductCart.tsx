import { NavLink } from 'react-router-dom'
import { ShortDescriptionProductType } from '../../../common/commonTypes'
import styles from './ProductCart.module.scss'

const ProductCart = (props: ShortDescriptionProductType) => {
  return (
    <li className={styles.poduct_cart}>
      <div className={styles.border}>
        <div className={styles.holder_img}>
          <img className={styles.img_product} src={props.images[0]} alt={props.title} />
        </div>
        <div className={styles.description}>
          <p>{props.title}</p>
          <p>{props.price} руб.</p>
          <NavLink className={styles.order_button} to={`/cartproduct/${props.id}`}>Заказать</NavLink>
        </div>
      </div>
    </li>
  )
}

export default ProductCart