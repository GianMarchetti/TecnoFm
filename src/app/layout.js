import './globals.css'
import { Roboto_Condensed } from 'next/font/google'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Tilt_Prism } from 'next/font/google'

const robo = Roboto_Condensed({
  weight: '400',
  subsets: ['latin']
})

// import { HeaderPage } from './header/page'

export const metadata = {
  title: 'TecnoFm',
  description: 'Reparacion de Celulares, de tablets, de Notebooks, Desbloqueo, Limpieza, Instalacion de programas y mucho mas',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <head>
        <title>TecnoFm</title>
      </head>
      <body className={robo.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
