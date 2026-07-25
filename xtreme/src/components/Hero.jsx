function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-tag">Tecnología de alto rendimiento</div>
        <h1>XTREME<br /><span>TECHNOLOGY</span></h1>
        <p className="hero-sub">Tecnología · Servicio · Rendimiento</p>
        <p className="hero-desc">
          Soluciones modernas en computadoras, accesorios,
          mantenimiento y soporte técnico profesional.
        </p>
        <div className="hero-actions">
          <a href="#productos" className="btn-primary">Ver Productos</a>
          <a href="https://wa.me/593982080543" target="_blank" rel="noreferrer" className="btn-outline">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-img-wrap">
          <img src="/logo.jpg" alt="Xtreme Technology" />
          <div className="hero-badge">TOP<br />TECH<br />2026</div>
        </div>
      </div>
    </section>
  )
}
export default Hero
