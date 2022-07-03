import { rejects } from 'assert'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ShortDescriptionProductType } from '../../../common/commonTypes'
import Preloader from '../../common/Preloader/Preloader'
import ListProducts from '../ListProducts'
import styles from "./Hits.module.scss"

const Hits = () => {

    const [hit, setHit] = useState<ShortDescriptionProductType[]>([])

    useEffect(() => {        
        axios.get('https://back-shop-shop.herokuapp.com/api/top-sales').then(res => setHit(res.data))
    }, [])

    return (
        <article className={styles.hits}>
            <h2>Хиты продаж!</h2>
            {hit.length < 1 ? <Preloader /> : <ListProducts product={hit} />}
        </article>
    )
}

export default Hits