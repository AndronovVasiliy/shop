import { CartIcon } from './CartIcon'
import Search from './Search'
import styles from './SearchCart.module.scss'

const SearchCart = () => {
  return (
    <div className={styles.search_cart}>
        <Search />
        <CartIcon />
    </div>
  )
}

export default SearchCart