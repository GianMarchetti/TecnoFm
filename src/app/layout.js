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
  description: 'Somos un emprendimiento de reparación de celulares, de tablets, de notebooks, netbooks y computadoras de escritorio. Tambien hacemos desbloqueo, limpieza, instalación de programas y mucho mas',
  keywords: 'Reparación, celulares, tablets, notebooks, netbooks, PC, limpieza, desbloqueo, formateo, instalación',
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
