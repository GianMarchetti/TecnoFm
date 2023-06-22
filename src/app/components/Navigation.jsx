import Link from 'next/link'
import styles from './Navigation.module.css'
import Image from 'next/image'
import logoFm from '../assets/imgs/logo.jpeg'
import { Tilt_Prism } from 'next/font/google'

const Tilt = Tilt_Prism({
  weight: '400',
  subsets: ['latin']
})

const links = [{
  label: 'Inicio',
  route: '/'
}, {
  label: 'Nuestro Equipo',
  route: '/about'
}, {
  label: 'Reparación',
  route: '/form'
}]

export function Navigation () {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href='/' >
            <Image alt='logo TecnoFm' src={logoFm} className={styles.logoImg} />
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
      <marquee className={styles.marquee}><h1 className={Tilt.className}>¡Bienvenidos a TECNO_FM!</h1></marquee>
    </>
  )
}
