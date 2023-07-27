import styles from './phones.module.css'
import Image from 'next/image'
import banner1 from '../assets/imgs/repuestos/cambioG100.jpeg'
import banner2 from '../assets/imgs/repuestos/cambioG9.jpeg'
import banner3 from '../assets/imgs/repuestos/cambioPinJ2.jpeg'
import banner4 from '../assets/imgs/repuestos/repJ7.jpeg'
import banner5 from '../assets/imgs/repuestos/repFlexJ7.jpeg'
import banner6 from '../assets/imgs/repuestos/cambioCel.jpeg'


export default async function PhonesPage ({ params }){
    return (
        <div className={styles.main}>
            <h2 className={styles.h2}>Celulares</h2>
            <h3 className={styles.h3}>Reparamos todo tipos de Celulares Android. Acá algunos ejemplos de anteriores reparaciones</h3>
            <div className={styles.gallery}>
                <div className={styles.reparacion} >
                    <Image src={banner1} className={styles.banner} alt='imagen de celular en reparacion'/>
                    <p className={styles.banText}>Cambio de módulo Motorola G100 </p>
                </div>
                <div className={styles.reparacion} >
                    <Image src={banner2} className={styles.banner} alt='imagen de celular en reparacion'/>
                    <p className={styles.banText}>Cambio de Flex MAIN y Placa de Carga Motorola G9 power </p>
                </div>
                <div className={styles.reparacion} >
                    <Image src={banner3} className={styles.banner} alt='imagen de celular en reparacion'/>
                    <p className={styles.banText}>Cambio de pin de carga Samsung J2 </p>
                </div>
                <div className={styles.reparacion} >
                    <Image src={banner4} className={styles.banner} alt='imagen de celular en reparacion'/>
                    <p className={styles.banText}>Reparación por humedad de Samsung  J7 </p>
                </div>
                <div className={styles.reparacion} >
                    <Image src={banner5} className={styles.banner} alt='imagen de celular en reparacion'/>
                    <p className={styles.banText}>Reparación de Flex de pantalla J7 2015 </p>
                </div>
                <div className={styles.reparacion} >
                    <Image src={banner6} className={styles.banner} alt='imagen de celular en reparacion'/>
                    <p className={styles.banText}>Cambio modulo J7 2015</p>
                </div>
            </div>
            <a href='../form'>
                <button className={styles.button} >Arreglar mi Celular</button>
            </a>
        </div>
        )
} 