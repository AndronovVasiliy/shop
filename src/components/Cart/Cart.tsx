import { useAppSelector } from "../../hooks/hooks"
import style from "./Cart.module.scss"
import ItemInCart from "./ItemInCart"

const Cart = () => {

  const { cart } = useAppSelector(state => state.product)

  let totalAmount = 0;
  cart.forEach(item => {
    totalAmount += item.number * item.product.price
  })

  return (
    <div className={style.cart}>
      <h2>Корзина</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Размер</th>
            <th>Кол-во</th>
            <th>Стоимость</th>
            <th>Итого</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => <ItemInCart key={item.product.id} numInList={index}  {...item} />)}
          <tr className={style.tr_item_cart}>
            <td colSpan={5} style = {{textAlign: 'right'}}>Общая стоимость:</td>
            <td>{totalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Cart