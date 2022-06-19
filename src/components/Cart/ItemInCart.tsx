import { ItemInCartType } from "../../common/commonTypes"
import style from "./Cart.module.scss"

interface PropsType {
    numInList: number
}


const ItemInCart = ({numInList, product, number, size}: PropsType & ItemInCartType) => {
  return (
    <tr className={style.tr_item_cart}>
        <td>{numInList + 1}</td>
        <td>{product.title}</td>
        <td>{size}</td>
        <td>{number}</td>
        <td>{product.price}</td>
        <td>{number * product.price}</td>
        <td>Удалить</td>
    </tr>
  )
}

export default ItemInCart