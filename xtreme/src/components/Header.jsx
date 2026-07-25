function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/logo.jpg" alt="Logo Xtreme" />
        <div className="logo-text">XTREME<span>.</span></div>
      </div>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-btn">☰</label>

      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#video">Video</a>
        <a href="#galeria">Galería</a>
        <a href="#servicios">Servicios</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}
export default Header
