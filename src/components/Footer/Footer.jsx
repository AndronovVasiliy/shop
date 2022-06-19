import Contacts from "./Contacts"
import styles from "./Footer.module.scss"
import Information from "./Information"
import { Payment } from "./Payment"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <Information />
        <Payment />
        <Contacts />
    </div>
  )
}

export default Footer