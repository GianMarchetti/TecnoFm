import styles from './home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import bannerCel from '../app/assets/imgs/bannerCel.jpeg'
import bannerNote from '../app/assets/imgs/repuestos/limpiezaProcesador.jpeg'
import bannerAbout from '../app/assets/imgs/team.jpg'
import bannerFlyer from '../app/assets/imgs/flyer1.jpeg'

export default function HomePage () {
  return (
    <>
      <div className={styles.main} >
        
        
        <div className={styles.presu} >
          <h2 className={styles.title}>En TecnoFm entendemos lo importante que son tus dispositivos electrónicos en tu vida diaria, y estamos aquí para ayudarte a resolver cualquier problema que puedas tener.</h2>
          <p>Tu consulta no molesta!</p>
          <a href='../form'>
                <button className={styles.button}>Pedir Presupuesto</button>
            </a>
        </div>

        <a href='./phones/' >
          <div className={styles.bannerDiv}>
            <Image src={bannerCel} className={styles.banner} />
            <h3 className={styles.h3}>Reparación de Celulares</h3>
          </div>
        </a>

        <a href='./notebooks' >
          <div className={styles.bannerDiv} >
            <Image src={bannerNote} className={styles.banner} />
            <h3 className={styles.h3}>Reparación de Notebooks</h3>
          </div>
        </a>

        <a href='./about' >
          <div className={styles.bannerDiv} >
            <Image src={bannerAbout} className={styles.banner} />
            <h3 className={styles.h3}>Nuestro Equipo</h3>
          </div>
        </a>

        <Image src={bannerFlyer} className={styles.bannerFlyer} />
      
      </div>
    </>
  )
}
