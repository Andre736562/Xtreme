function Nosotros() {
  const tarjetas = [
    ["⚡", "Tecnología confiable", "Equipos y accesorios modernos para cualquier necesidad.", "01"],
    ["🛠", "Soporte técnico", "Reparación, mantenimiento e instalación profesional.", "02"],
    ["🚀", "Atención rápida", "Soluciones adaptadas a cada cliente sin demoras.", "03"],
  ]

  return (
    <section id="nosotros">
      <div className="section-label">Sobre nosotros</div>
      <h2 className="title">¿POR QUÉ<br />ELEGIRNOS?</h2>
      <p className="title-desc">
        En XTREME TECHNOLOGY ofrecemos soluciones tecnológicas modernas
        para estudiantes, gamers, oficinas y negocios.
      </p>

      <div className="cards-grid">
        {tarjetas.map(([icono, titulo, texto, numero]) => (
          <div className="card" key={numero}>
            <span className="card-icon">{icono}</span>
            <h3>{titulo}</h3>
            <p>{texto}</p>
            <div className="card-num">{numero}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Nosotros
