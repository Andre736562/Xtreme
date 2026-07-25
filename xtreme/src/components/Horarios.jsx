function Horarios() {
  return (
    <section id="horarios">
      <div className="section-label">Atención</div>
      <h2 className="title center">HORARIOS</h2>

      <div className="horarios-diagonal">
        <div className="horario-card card1">
          <div className="horario-icon">☀️</div>
          <h3>Mañana</h3>
          <p>08:00 AM</p>
          <span>Apertura del local</span>
        </div>

        <div className="horario-card destaque card2">
          <div className="horario-icon">🕒</div>
          <h3>Atención General</h3>
          <p>Domingo a Domingo</p>
          <span>08:00 AM — 08:00 PM</span>
        </div>

        <div className="horario-card card3">
          <div className="horario-icon">🌙</div>
          <h3>Noche</h3>
          <p>08:00 PM</p>
          <span>Cierre del local</span>
        </div>
      </div>
    </section>
  )
}
export default Horarios
