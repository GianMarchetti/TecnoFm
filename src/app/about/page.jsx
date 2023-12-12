import styles from './about.module.css'
import Image from 'next/image'
import {MessageCircle} from 'lucide-react';
import Link from 'next/link'

export default function AboutPage () {
    return (
        <>
          <div className={styles.main} >
            
            <h2 className={styles.h2} >conocé sobre nuestro equipo</h2>

            <div className={styles.div}>
                <p className={styles.p} data-desktoptext="Somos un local de reparación de celulares y computadoras ubicado en Santa Fe Capital. Desde el 2019, nos hemos dedicado a brindar soluciones tecnológicas de calidad a nuestros clientes, con un equipo de profesionales altamente capacitados y comprometidos con su trabajo." data-phonetext="Somos un local de reparación de celulares y computadoras ubicado en Santa Fe Capital.En TECNO_FM nos enfocamos en ofrecer un servicio personalizado y eficiente."></p>
                <Image src='https://i.ibb.co/qmxRfff/logo.jpg' width={600}
                        height={600} className={styles.img} alt='Logo de TecnoFM'/>
            </div>

            <div className={styles.div2}>
                <p className={styles.p} data-desktoptext='En TECNO_FM nos enfocamos en ofrecer un servicio personalizado y eficiente, adaptado a las necesidades de cada uno de nuestros clientes. Nos especializamos en la reparación de todo tipo de dispositivos, desde celulares y tablets hasta computadoras y laptops. Además, también ofrecemos servicios de mantenimiento preventivo.' data-phonetext='Nos especializamos en la reparación de todo tipo de dispositivos, desde celulares y tablets hasta computadoras y laptops.'></p>
                <Image src='https://i.ibb.co/XzGNrTY/about9.jpg' className={styles.img} width={600}
                        height={600} alt='Formateo de Notebook'/>
            </div>

            <div className={styles.div}>
                <p className={styles.p} data-desktoptext='En nuestro local, contamos con herramientas y tecnología de última generación para garantizar reparaciones rápidas y efectivas. Además, nos mantenemos actualizados en las últimas tendencias y avances tecnológicos, para poder ofrecer soluciones innovadoras y de calidad a nuestros clientes.' data-phonetext='En nuestro local, contamos con herramientas y tecnología de última generación para garantizar reparaciones rápidas y efectivas.'></p>
                <Image src='https://i.ibb.co/8mY0JNG/about8.jpg' className={styles.img} width={600}
                        height={600} alt='Reemplazo de tarjeta de memoria'/>
            </div>

            <div className={styles.div2}>
                <p className={styles.p} data-desktoptext='En TECNO_FM nos enorgullece ser un referente en el mercado tecnológico de Santa Fe Capital, y estamos comprometidos en seguir brindando un servicio de excelencia.' data-phonetext='Además, nos mantenemos actualizados en las últimas tendencias y avances tecnológicos, para poder ofrecer soluciones innovadoras y de calidad a nuestros clientes.'></p>
                <Image src='https://i.ibb.co/BZb6VjY/about7.jpg' className={styles.img} width={600}
                        height={600} alt='Reemplazo de chip de carga'/>
            </div>

            <div className={styles.div3}>
                <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6294766772844!2d-60.72196832270661!3d-31.589207104630262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b507084c99501f%3A0xe2c0101e00d15dc4!2sPasaje%202%207948%2C%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1702317172394!5m2!1ses!2sar"
                width="100%" height="100%"              
                loading="lazy"></iframe>
                <p className={styles.p}>¡No dude en visitarnos para cualquier consulta o reparación! Estamos a su disposición para ayudarlo en todo lo que necesite. Tambien podes hablarnos para una consulta o presupuesto</p>
                <Link href='https://api.whatsapp.com/send?phone=543425422001&text=Hola%20%F0%9F%91%8B!%20Estoy%20teniendo%20un%20problema%20con%20'>
                    <button className={styles.btnPresu}>
                        Consultar
                        <MessageCircle className={styles.wsp} />
                    </button>
                </Link> 
            </div>
          </div>
        </>
    )
}