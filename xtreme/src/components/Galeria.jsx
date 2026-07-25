function Galeria() {
  const imagenes = ["1.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]

  return (
    <section id="galeria">
      <div className="section-label">Galería</div>
      <h2 className="title">INSTALACIONES</h2>
      <div className="gallery-grid">
        {imagenes.map((imagen, index) => (
          <div className="gallery-item" key={imagen}>
            <img src={`/imagenes/${imagen}`} alt={`Instalación ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Galeria
