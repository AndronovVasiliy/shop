import styles from "./Footer.module.scss"

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <section>
                <h3>Контакты:</h3>
                <a href="tel:+7 495 79 03 5 03">+7 495 79 03 5 03</a>
                <span>Ежедневно: с 09-00 до 21-00</span>
                <a href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
                <div className={styles.footer_social_links}>
                    <a href="/#"><div className={styles.footer_social_link_twitter + " " + styles.footer_social_link}></div></a>
                    <a href="/#"><div className={styles.footer_social_link_vk + " " + styles.footer_social_link}></div></a>
                </div>
            </section>

        </div>
    )
}

export default Contacts