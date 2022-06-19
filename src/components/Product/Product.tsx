import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DetailProductType } from '../../common/commonTypes'
import FormAddProduct from './FormAddProduct'
import style from './Product.module.scss'

const Product = () => {

    const id = useParams()
    let [porductItem, setPorduct] = useState<DetailProductType>({} as DetailProductType)

    useEffect(() => {
        axios.get(`http://localhost:7070/api/items/${id.id}`).then(res => setPorduct(res.data))

    }, [id.id])

    return (
        <div className={style.wrapper}>
            {!porductItem.images ? <div>Загрузка</div> :
                <>
                    <h1>{porductItem.title}</h1>
                    <div className={style.productArea}>
                        <div className={style.imgwrapper}>
                            <img width="100%" src={porductItem.images[0]} alt="" />
                        </div>
                        <div className={style.description}>
                            <table className={style.table}>
                                <tbody>
                                    <tr>
                                        <td>Артикул</td>
                                        <td>{porductItem.sku}</td>
                                    </tr>
                                    <tr>
                                        <td>Производитель</td>
                                        <td>{porductItem.manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>{porductItem.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>{porductItem.manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td>Сезон</td>
                                        <td>{porductItem.season}</td>
                                    </tr>
                                    <tr>
                                        <td>Повод</td>
                                        <td>{porductItem.reason}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <FormAddProduct product = {porductItem} sizes = {porductItem.sizes}/>
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default Product