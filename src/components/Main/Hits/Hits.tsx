import axios from 'axios'
import { useEffect, useState } from 'react'
import { ShortDescriptionProductType } from '../../../common/commonTypes'
import ListProducts from '../ListProducts'
import styles from "./Hits.module.scss"

const Hits = () => {

    const [hit, setHit] = useState<ShortDescriptionProductType[]>([])

    useEffect(() => {
        axios.get('http://localhost:7070/api/top-sales').then(res => setHit(res.data))
    }, [])

    return (
        <article className={styles.hits}>
            <h2>Хиты продаж!</h2>
            <ListProducts product={hit} />
        </article>
    )
}

export default Hits