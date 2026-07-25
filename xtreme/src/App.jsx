import Header from "./components/Header"
import Hero from "./components/Hero"
import Promo from "./components/Promo"
import Stats from "./components/Stats"
import Nosotros from "./components/Nosotros"
import Video from "./components/Video"
import Galeria from "./components/Galeria"
import Servicios from "./components/Servicios"
import Productos from "./components/Productos"
import Contacto from "./components/Contacto"
import Ubicacion from "./components/Ubicacion"
import Horarios from "./components/Horarios"
import Redes from "./components/Redes"
import Footer from "./components/Footer"
import "./style.css"

function Separador() {
  return <div className="red-line" />
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Promo />
        <Stats />
        <Separador />
        <Nosotros />
        <Separador />
        <Video />
        <Separador />
        <Galeria />
        <Separador />
        <Servicios />
        <Productos />
        <Separador />
        <Contacto />
        <Separador />
        <Ubicacion />
        <Separador />
        <Horarios />
        <Separador />
        <Redes />
      </main>
      <Footer />
    </>
  )
}

export default App
