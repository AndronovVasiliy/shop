import styles from "./Header.module.scss"
import logo from "./logo.png"
import Navbar from "./NavBar/Navbar"
import SearchCart from "./SearchCart/SearchCart"

export const Header = () => {
  return (
    <div className= {styles.header}>
        <img width="185px" height="60px" src={logo} alt="logo" />
        <div className= {styles.navSearchCart}>
            <Navbar />
            <SearchCart />
        </div>
    </div>
  )
}
