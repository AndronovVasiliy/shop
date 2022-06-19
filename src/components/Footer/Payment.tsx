import styles from "./Footer.module.scss"

export const Payment = () => {
    return (
        <div className={styles.payment}>
            <section>
                <h3>Принимаем к оплате:</h3>
                <ul>
                    <li className={styles.footer_pay_systems_paypal}></li>
                    <li className={styles.footer_pay_systems_master_card}></li>
                    <li className={styles.footer_pay_systems_visa}></li>
                    <li className={styles.footer_pay_systems_yandex}></li>
                    <li className={styles.footer_pay_systems_webmoney}></li>
                    <li className={styles.footer_pay_systems_qiwi}></li>
                </ul>
            </section>
                <div className = {styles.footer_copyright}>
                    2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все права защищены.
                    <br />
                    Доставка по всей России!
                </div>
        </div>
    )
}
