import styles from './about.module.css'
import Image from 'next/image'
import Tec1 from '../assets/imgs/logo.jpeg'
import Tec2 from '../assets/imgs/repuestos/formateoNetbook.jpeg'
import Tec3 from '../assets/imgs/repuestos/ramNote.jpeg'
import Tec4 from '../assets/imgs/repuestos/cambioG9.jpeg'

export default function AboutPage () {
    return (
        <>
          <div className={styles.main} >
            
            <h2 className={styles.h2} >conocé sobre nuestro equipo</h2>

            <div className={styles.div}>
                <p className={styles.p} data-desktoptext="Somos un local de reparación de celulares y computadoras ubicado en Santa Fe Capital. Desde el 2019, nos hemos dedicado a brindar soluciones tecnológicas de calidad a nuestros clientes, con un equipo de profesionales altamente capacitados y comprometidos con su trabajo." data-phonetext="Somos un local de reparación de celulares y computadoras ubicado en Santa Fe Capital.En TECNO_FM nos enfocamos en ofrecer un servicio personalizado y eficiente."></p>
                <Image src={Tec1} className={styles.parrafo} alt='Logo de TecnoFM'/>
            </div>

            <div className={styles.div2}>
                <p className={styles.p} data-desktoptext='En TECNO_FM nos enfocamos en ofrecer un servicio personalizado y eficiente, adaptado a las necesidades de cada uno de nuestros clientes. Nos especializamos en la reparación de todo tipo de dispositivos, desde celulares y tablets hasta computadoras y laptops. Además, también ofrecemos servicios de mantenimiento preventivo.' data-phonetext='Nos especializamos en la reparación de todo tipo de dispositivos, desde celulares y tablets hasta computadoras y laptops.'></p>
                <Image src={Tec2} className={styles.parrafo} alt='Formateo de Notebook'/>
            </div>

            <div className={styles.div}>
                <p className={styles.p} data-desktoptext='En nuestro local, contamos con herramientas y tecnología de última generación para garantizar reparaciones rápidas y efectivas. Además, nos mantenemos actualizados en las últimas tendencias y avances tecnológicos, para poder ofrecer soluciones innovadoras y de calidad a nuestros clientes.' data-phonetext='En nuestro local, contamos con herramientas y tecnología de última generación para garantizar reparaciones rápidas y efectivas.'></p>
                <Image src={Tec3} className={styles.parrafo} alt='Reemplazo de tarjeta de memoria'/>
            </div>

            <div className={styles.div2}>
                <p className={styles.p} data-desktoptext='En TECNO_FM nos enorgullece ser un referente en el mercado tecnológico de Santa Fe Capital, y estamos comprometidos en seguir brindando un servicio de excelencia.' data-phonetext='Además, nos mantenemos actualizados en las últimas tendencias y avances tecnológicos, para poder ofrecer soluciones innovadoras y de calidad a nuestros clientes.'></p>
                <Image src={Tec4} className={styles.parrafo} alt='Reemplazo de chip de carga'/>
            </div>

            <div className={styles.div3}>
                <p className={styles.p} data-desktoptext='¡No dude en visitarnos para cualquier consulta o reparación! Estamos a su disposición para ayudarlo en todo lo que necesite.' data-phonetext='¡No dude en visitarnos para cualquier consulta o reparación! Estamos a su disposición para ayudarlo en todo lo que necesite.'></p>
            </div>
          </div>
        </>
    )
}