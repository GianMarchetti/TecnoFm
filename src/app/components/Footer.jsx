import styles from './Navigation.module.css'
import Image from 'next/image';
import Instagram from '../assets/icons/insta2.png'

export function Footer () {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.redes}>
          <p>Encontranos en
            <a href='https://www.instagram.com/tecno_fm/'> 
              <Image src={Instagram} alt='Instagram' width={20} height={20} className={styles.ig} />
            </a>
          </p>
        </div>
        <marquee className={styles.aLink}>Page created by  
          <a href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/' > Gian Marchetti</a>
        </marquee>
      </footer>
    </>
  )
}
