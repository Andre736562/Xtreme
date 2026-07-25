function Servicios() {
  const servicios = [
    ["💻", "Venta de computadoras", "Laptops y PCs gamer"],
    ["🛠", "Mantenimiento técnico", "Limpieza y reparación"],
    ["🎧", "Accesorios", "Periféricos y gadgets"],
  ]

  return (
    <section id="servicios">
      <div className="section-label">Lo que hacemos</div>
      <h2 className="title">NUESTROS<br />SERVICIOS</h2>
      <div className="services-grid">
        {servicios.map(([icono, titulo, detalle]) => (
          <div className="service-item" key={titulo}>
            <span className="service-icon">{icono}</span>
            <div className="service-text">
              <strong>{titulo}</strong>
              <span>{detalle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Servicios
