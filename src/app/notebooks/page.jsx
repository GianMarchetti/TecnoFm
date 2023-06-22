import styles from './notebooks.module.css'
import Image from 'next/image'
import banner1 from '../assets/imgs/repuestos/desbloqueoNetbook.jpeg'
import banner2 from '../assets/imgs/repuestos/actualizacionNetbook.jpeg'
import banner3 from '../assets/imgs/repuestos/desbloqueoNoteG5.jpeg'
import banner4 from '../assets/imgs/repuestos/ramNote.jpeg'
import banner5 from '../assets/imgs/repuestos/formateoNetbook.jpeg'
import banner6 from '../assets/imgs/repuestos/limpiezaProcesador.jpeg'

export default function PhonesPage (){
    return (
        <div className={styles.main} >
            <h2 className={styles.h2} >Notebooks</h2>
            <h3 className={styles.h3} >Reparamos, Formateamos, limpiamos e instalamos programas en todo tipo de PC, notebooks o netbooks</h3>
            <div className={styles.gallery} >
                <div className={styles.reparacion} >
                    <Image src={banner1} className={styles.banner}/>
                    <p className={styles.banText}>Reparación de g27: cambio de chip de carga, bateria y pantalla. Reparación de g27: cambio de chip de carga, bateria y pantalla. </p>
                </div>
                <div className={styles.reparacion} >
                    <Image src={banner2} className={styles.banner}/>
                    <p className={styles.banText}>Reparación de g27: cambio de chip de carga, bateria y pantalla. Reparación de g27: cambio de chip de carga, bateria y pantalla. </p>
                </div>
                <div className={styles.reparacion} >
                    <Image src={banner3} className={styles.banner}/>
                    <p className={styles.banText}>Reparación de g27: cambio de chip de carga, bateria y pantalla. Reparación de g27: cambio de chip de carga, bateria y pantalla. </p>
                </div>
                <div className={styles.reparacion} >
                    <Image src={banner4} className={styles.banner}/>
                    <p className={styles.banText}>Reparación de g27: cambio de chip de carga, bateria y pantalla. Reparación de g27: cambio de chip de carga, bateria y pantalla. </p>
                </div>
                <div className={styles.reparacion} >
                    <Image src={banner5} className={styles.banner}/>
                    <p className={styles.banText}>Reparación de g27: cambio de chip de carga, bateria y pantalla. Reparación de g27: cambio de chip de carga, bateria y pantalla. </p>
                </div>
                <div className={styles.reparacion} >
                    <Image src={banner6} className={styles.banner}/>
                    <p className={styles.banText}>Reparación de g27: cambio de chip de carga, bateria y pantalla. Reparación de g27: cambio de chip de carga, bateria y pantalla. </p>
                </div>
            </div>
            <a href='../form' >
                <button className={styles.button} >Arreglar mi Computadora</button>
            </a>
        </div>
        )
} 