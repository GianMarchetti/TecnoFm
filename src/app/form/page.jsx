import styles from './form.module.css'
import Image from 'next/image'
import Presentacion from '../assets/imgs/flyer1.jpeg'

export default function FormPage () {
    return(
        <div className={styles.divForm} >
            <form className={styles.form}>
                <h2 className={styles.h2} >¡Formulario de Reparación!</h2>
                <p className={styles.p} >Dejanos en el siguiente formulario tu información personal, el modelo de celular/tablet/computadora y el problema que estas teniendo. Nos contactaremos a la brevedad</p>               
                <Image src={Presentacion} width={300} height={300} className={styles.img} />
                <button type="submit" className={styles.button} >
                    <a href='https://whatsform.com/EG_Qxs' >
                        Formulario
                    </a>                   
                </button>
            </form>
        </div>
    )
}
