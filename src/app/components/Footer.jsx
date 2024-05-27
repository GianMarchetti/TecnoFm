import styles from './Navigation.module.css'
import { Instagram } from 'lucide-react';
import Link from 'next/link';

const links = [{
  label: 'Inicio',
  route: '/'
}, {
  label: 'Nuestro Equipo',
  route: '/about'
}, {
  label: 'Contacto',
  route: '/form'
}]

export function Footer () {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.footerRow}>
          <div className='text-left sm:text-center sm:p-2'>
            <h2 className='pb-2'>TECNO_FM</h2>
            <p>Su soporte tecnológico de confianza</p>
          </div>
          <div className='text-right sm:text-center sm:p-2'>
            <div className={styles.redes}>
              <p>Encontranos en
                <a href='https://www.instagram.com/tecno_fm/'> 
                  <Instagram className={styles.ig} />
                </a>
              </p>
            </div>
            <nav className='w-52 sm:w-full sm:p-2'>
              <ul className='w-full flex flex-col justify-between sm:justify-center'>
                {links.map(({ label, route }) => (
                  <li key={route} className='sm:ml-2'>
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
        <marquee className={styles.aLink}>Page created by  
          <a href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/' > Gian Marchetti</a>
        </marquee>
      </footer>
    </>
  )
}
