
import styles from './form.module.css'
import Image from 'next/image'


export default function Contact () {
    return(
        <div className={styles.divForm} >
            <h2 className={styles.h2}>Contactanos</h2>
            <p className={styles.p}>Contactate con nosotros. Estamos listos para ayudarte a encontrar la mejor solucion</p>
            <form className={styles.form}>
                <div className={styles.col}>
                    <h3 className={styles.h3}>¿Necesitas Ayuda?</h3>
                    <p>Dejanos en el siguiente formulario tu información personal, el modelo de tu dispositivo y el problema que estas teniendo. Nos contactaremos a la brevedad</p>               
                    <button type="submit" className={styles.button} >
                        <a href='https://whatsform.com/EG_Qxs' >
                            Formulario
                        </a>                   
                    </button>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6294766772844!2d-60.72196832270661!3d-31.589207104630262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b507084c99501f%3A0xe2c0101e00d15dc4!2sPasaje%202%207948%2C%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1702317172394!5m2!1ses!2sar"
                    width="100%" height="400"              
                    loading="lazy"></iframe>
                </div>
                <div className={styles.col2}>
                    <Image width="800" height="800" alt='bannerInfo'
                    src="https://i.ibb.co/tz79GmS/cont-Banner.png" className={styles.contactBanner}/>
                </div>
            </form>
            <div className={styles.divInfo}>
                <div className={styles.info}>
                    <h4 className={styles.title}>WhatsApp:</h4>
                    <p>+54 9 342-5422001</p>
                </div>
                <div className={styles.info}>
                    <h4 className={styles.title}>Email:</h4>
                    <p>fabricio.marchetti@yahoo.com</p>
                </div>
                <div className={styles.info}>
                    <h4 className={styles.title}>Visitanos:</h4>
                    <p>Segundo Pasaje 7948, Santa Fe, Arg</p>
                </div>
                <div className={styles.info}>
                    <h4 className={styles.title}>Horarios:</h4>
                    <p>Lunes a Sabado, de 9.30hs a 18hs</p>
                </div>
            </div>
            <div className={styles.info}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6294766772844!2d-60.72196832270661!3d-31.589207104630262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b507084c99501f%3A0xe2c0101e00d15dc4!2sPasaje%202%207948%2C%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1702317172394!5m2!1ses!2sar"
                width="100%" height="400"              
                loading="lazy"></iframe>
            </div>             
        </div>
    )
}
