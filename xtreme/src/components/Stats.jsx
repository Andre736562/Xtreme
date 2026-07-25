function Stats() {
  const datos = [
    ["500+", "Clientes satisfechos"],
    ["6+", "Servicios activos"],
    ["24H", "Respuesta rápida"],
    ["100%", "Atención profesional"],
  ]

  return (
    <div className="stats-bar">
      {datos.map(([numero, texto]) => (
        <div className="stat" key={texto}>
          <div className="stat-num">{numero}</div>
          <div className="stat-label">{texto}</div>
        </div>
      ))}
    </div>
  )
}
export default Stats
