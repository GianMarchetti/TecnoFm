import styles from './home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import bannerCel from '../app/assets/imgs/bannerCel.jpeg'
import bannerNote from '../app/assets/imgs/repuestos/limpiezaProcesador.jpeg'
import bannerAbout from '../app/assets/imgs/team.jpg'
import bannerFlyer from '../app/assets/imgs/flyer1.jpeg'
import profile from '../app/assets/icons/perfil.jpg'

export default function HomePage () {
  return (
    <>
      <div className={styles.main} >
        
        <div className={styles.presu} >
          <h2 className={styles.sub}>¿Tenes que reparar un dispositivo?</h2>
          <p className={styles.title}>En TecnoFm entendemos lo importante que son tus dispositivos electrónicos en tu vida diaria, y estamos aquí para ayudarte a resolver cualquier problema que puedas tener.</p>
          <p>Tu consulta no molesta!</p>
          <a href='../form'>
                <button className={styles.button}>Pedir Presupuesto</button>
            </a>
        </div>

        <Image src={bannerFlyer} className={styles.bannerFlyer} alt='Flyer de reparaciones'/>

        <a href='./phones/' >
          <div className={styles.bannerDiv}>
            <Image src={bannerCel} className={styles.banner} alt='banner de celulares'/>
            <h3 className={styles.h3}>Reparación de Celulares</h3>
          </div>
        </a>

        <a href='./notebooks' >
          <div className={styles.bannerDiv} >
            <Image src={bannerNote} className={styles.banner} alt='banner de computadoras'/>
            <h3 className={styles.h3}>Reparación de Notebooks</h3>
          </div>
        </a>

        <a href='./about' >
          <div className={styles.bannerDiv} >
            <Image src={bannerAbout} className={styles.banner} alt='banner del equipo tecnoFm'/>
            <h3 className={styles.h3}>Nuestro Equipo</h3>
          </div>
        </a>
      
        <div className={styles.valoraciones} >

          <p className={styles.valP}>La opinión de nuestros clientes nos importa</p>

          <div className={styles.valDiv}>

            <div className={styles.valInd} >
              <Image src={profile} width={50} height={50} className={styles.valImg} alt='imagen de perfil predeterminada'/>
              <p className={styles.valP}>Gian Marchetti</p>
              <div className={styles.valText}>El equipo de reparación hizo un trabajo fantástico con mi computadora. La repararon en un tiempo récord y ahora funciona mejor que nunca. ¡Gracias por su excelente servicio!</div>
              <div>⭐⭐⭐⭐⭐</div>
            </div>

            <div className={styles.valInd} >
              <Image src={profile} width={50} height={50} className={styles.valImg} alt='imagen de perfil predeterminada'/>
              <p className={styles.valP}>María Fernández</p>
              <div className={styles.valText}>Increíble servicio al cliente y resultados impecables en la reparación de mi tableta. Los técnicos son conocedores y se nota que se preocupan por la satisfacción del cliente. ¡Muy recomendado!</div>
              <div>⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className={styles.valInd} >
              <Image src={profile} width={50} height={50} className={styles.valImg} alt='imagen de perfil predeterminada'/>
              <p className={styles.valP}>Carlos Méndez</p>
              <div className={styles.valText}>Muy buen trabajo en la reparación de mi laptop. Fueron rápidos y eficientes, y el precio fue justo. Definitivamente volveré si necesito otra reparación.</div>
              <div>⭐⭐⭐⭐✰</div>
            </div> 

          </div>

            <div className={styles.butVal} >
                <p>Agradeceriamos que nos dejes tu Valoracion sobre la pagina y el servicio Otorgado!</p>
              <a href='./ratingForm' >
                <button className={styles.btn} type="button">
                  <strong className={styles.strong} >Valorar</strong>
                  <div className={styles.containerStars}>
                    <div className={styles.stars}></div>
                  </div>

                  <div className={styles.glow}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                  </div>
                </button>
              </a>
            </div>

        </div>

      </div>
    </>
  )
}
