import { NavLink } from "react-router-dom"
import styles from "./Footer.module.scss"

const Information = () => {
    return (
        <div className={styles.information}>
            <section>
                <h3>Информация</h3>
                <ul>
                    <li><NavLink to="/">Каталог</NavLink></li>
                    <li><NavLink to="/">О магазине</NavLink></li>
                    <li><NavLink to="/">Контакты</NavLink></li>
                </ul>
            </section>
        </div>
    )
}

export default Information