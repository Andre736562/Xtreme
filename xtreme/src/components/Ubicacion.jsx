function Ubicacion() {
  return (
    <section id="ubicacion">
      <div className="section-label">Encuéntranos</div>
      <h2 className="title">NUESTRA<br />UBICACIÓN</h2>
      <div className="map-wrap">
        <iframe
          src="https://www.google.com/maps?q=calle+sucre+juan+leon+mera+salcedo+cotopaxi&output=embed"
          loading="lazy"
          title="Ubicación de Xtreme Technology"
        />
      </div>
      <div className="map-tag">📍 Salcedo, Cotopaxi — Ecuador</div>
    </section>
  )
}
export default Ubicacion
