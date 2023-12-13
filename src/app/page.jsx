
import styles from './home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage () {
  return (
    <>
      <div className={styles.main} >
        
        <div className={styles.bannerDivPresu} >
          <div className={styles.presu} >
            <h2 className={styles.title}>¿Tenes que reparar un dispositivo?</h2>
            <p className={styles.subT}>En TecnoFm estamos para ayudarte a resolver cualquier problema que puedas tener.</p>        
            <p>Tu consulta no molesta!</p>
            <Link href='https://whatsform.com/EG_Qxs'>
              <button className={styles.btnPresu}>Pedir Presupuesto</button>
            </Link>
          </div>
          <Image src='https://i.ibb.co/kqH6Cr8/fondo-Phone.png' width="500" height="500" className={styles.bannerFlyer} alt='Flyer de reparaciones'/>
        </div>
  
        <div className={styles.bannerDiv}>
          <h3 className={styles.h3}>Reparación de Computadoras</h3>
          <Image src='https://i.ibb.co/qkF3n08/RepPC.png' width='500' height='500' className='w-full h-full' alt='banner de computadoras'/>
        </div>
        
        <div className={styles.soluciones}>
          <p>Reparar tu dispositivo nunca fue más facíl</p>
          <h3>Tenemos soluciones para todos</h3>
          <p>Sea cual sea tu problema te podemos ayudar</p>
          <Link href='https://show.forms.app/gianmarchetti/untitled-form?draftId=a8a56511' className='mt-4 mb-8'>
            <button className={styles.btnPresu}>Reparar mi dispositivo</button>
          </Link>
          <div className='mt-8 flex flex-col justify-center items-center'>
            <Image src='https://i.ibb.co/BLj4p1L/cel.png' className={styles.cel} width='300' height='200' alt='celular'/>
          </div>
        </div>

          <div className={styles.bannerDiv2} >
            <Image src='https://i.ibb.co/QYFVZfB/fondo-Equipo.png' width='800' height='800' className={styles.banner} alt='banner del equipo tecnoFm'/>
            <div className={styles.divEM}>
                  <Link href='./about'>
                    <Image src='https://i.ibb.co/hRKLw8q/fondo-EMTop.png' width='800' height='800' className={styles.bannerEM} alt='banner del equipo tecnoFm'/>
                    <Image src='https://i.ibb.co/B6qBCdJ/fondo-EMBot.png' width='800' height='800' className={styles.bannerEM} alt='banner del equipo tecnoFm'/>
                  </Link>
            </div>
            <div className={styles.divEquipo}>
              <Link href='./about'>
                <h3>Conoce a Nuestro Equipo</h3>
              </Link>
              <Link href='./about' className={styles.linkE}>
                <Image src='https://i.ibb.co/61CXxPM/team.jpg' width='800' height='800' className={styles.bannerE} alt='banner del equipo tecnoFm'/>
              </Link>
            </div>
          </div>
      
        <div className={styles.valoraciones} >
          <p className={styles.valP}>La opinión de nuestros clientes nos importa</p>
          <div className={styles.valDiv}>

            <div className={styles.valInd} >
              <Image src='https://i.ibb.co/Pg4Qy2j/perfil.png' width={50} height={50} className={styles.valImg} alt='imagen de perfil predeterminada'/>
              <p className={styles.valP}>Juan Ramirez</p>
              <div className={styles.valText}>El equipo de reparación hizo un trabajo fantástico con mi computadora. La repararon en un tiempo récord y ahora funciona mejor que nunca. ¡Gracias por su excelente servicio!</div>
              <div>⭐⭐⭐⭐⭐</div>
            </div>

            <div className={styles.valInd} >
              <Image src='https://i.ibb.co/Pg4Qy2j/perfil.png' width={50} height={50} className={styles.valImg} alt='imagen de perfil predeterminada'/>
              <p className={styles.valP}>María Fernández</p>
              <div className={styles.valText}>Increíble servicio al cliente y resultados impecables en la reparación de mi tableta. Los técnicos son conocedores y se nota que se preocupan por la satisfacción del cliente. ¡Muy recomendado!</div>
              <div>⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className={styles.valInd} >
              <Image src='https://i.ibb.co/Pg4Qy2j/perfil.png' width={50} height={50} className={styles.valImg} alt='imagen de perfil predeterminada'/>
              <p className={styles.valP}>Carlos Méndez</p>
              <div className={styles.valText}>Muy buen trabajo en la reparación de mi laptop. Fueron rápidos y eficientes, y el precio fue justo. Definitivamente volveré si necesito otra reparación.</div>
              <div>⭐⭐⭐⭐✰</div>
            </div> 

          </div>

            <div className={styles.divVal} >
                <p>Agradeceriamos que nos dejes tu Valoracion sobre la pagina y el servicio Otorgado!</p>
              <Link href='https://www.google.com/maps/place/TecnoFm/@-31.6217195,-60.8273896,11z/data=!3m1!4b1!4m12!1m5!8m4!1e1!2s111999663874161867033!3m1!1e1!3m5!1s0x49031690aada134f:0x95a28137b5354b9f!8m2!3d-31.6221177!4d-60.6625862!16s%2Fg%2F11ksbd14y6?authuser=0&entry=ttu' >
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
              </Link>
            </div>

        </div>
        
      </div>
    </>
  )
}
