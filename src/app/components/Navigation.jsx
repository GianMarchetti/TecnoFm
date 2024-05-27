import Link from 'next/link'
import styles from './Navigation.module.css'
import Image from 'next/image'
import logoFm from '../assets/imgs/logo.jpeg'

const links = [{
  label: 'Inicio',
  route: '/'
}, {
  label: 'Nuestro Equipo',
  route: '/about'
}, {
  label: 'Contacto',
  route: '/contact'
}]

export function Navigation () {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href='/' >
            <Image alt='Logo de TecnoFm' src='https://i.ibb.co/Wx7XVFg/logo2.jpg' width='200' height='200' className={styles.logoImg} />
          </a>
        </div>
        <nav>
          <ul className={styles.navigation}>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
