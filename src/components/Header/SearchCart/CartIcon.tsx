import styles from "./SearchCart.module.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelector } from "../../../hooks/hooks";
import { NavLink } from "react-router-dom";

export const CartIcon = () => {

    const { cart } = useAppSelector(state => state.product)
    

    return (
        <NavLink to="/cart">
            <div className={styles.cart}>
                {cart.length > 0 && <i></i>}
                <ShoppingCartIcon style={{ color: 'rgba(0, 0, 0, .5)' }} fontSize='large' />
            </div>
        </NavLink>
    )
}
