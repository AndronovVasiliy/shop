import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.scss"

const Navbar = () => {
    return (
        <nav className = {styles.nav}>
            <ul>
                <li><NavLink to = "/">Главная</NavLink></li>
                <li><NavLink to = "/catalog">Каталог</NavLink></li>
                <li><NavLink to = "/about">О магазине</NavLink></li>
                <li><NavLink to = "/">Контакты</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar