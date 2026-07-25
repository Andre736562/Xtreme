function Productos() {
  const productos = [
    ["2.jpg", "Smartwatch", "⌚", "Smartwatch Ultra", "Reloj inteligente moderno con diseño premium y funciones avanzadas."],
    ["7.jpg", "iPhone", "📱", "iPhone", "Equipos modernos y accesorios tecnológicos de última generación."],
    ["audifonos.jpg", "Audífonos", "🎧", "Audífonos Gamer", "Sonido profesional y diseño moderno para gaming y música."],
    ["cable 2.jpg", "Cable", "🔌", "Cables Premium", "Cables resistentes y de alta velocidad para múltiples dispositivos."],
    ["cargador 1.jpg", "Cargador", "🔋", "Cargadores", "Carga rápida y segura para celulares y equipos tecnológicos."],
    ["control.jpg", "Control", "🎮", "Controles Gamer", "Controles ergonómicos y modernos para consolas y PC."],
    ["parlante.jpg", "Parlante", "🔊", "Parlantes", "Audio potente y diseño elegante para cualquier espacio."],
    ["parlante2.jpg", "Audio Bluetooth", "🎵", "Audio Bluetooth", "Tecnología inalámbrica y sonido envolvente de alta calidad."],
  ]

  return (
    <section id="productos">
      <div className="section-label">Catálogo</div>
      <h2 className="title">NUESTROS<br />PRODUCTOS</h2>
      <div className="products-grid">
        {productos.map(([imagen, alt, emoji, nombre, descripcion]) => (
          <div className="product-card" key={nombre}>
            <div className="product-img">
              <img src={`/imagenes/${imagen}`} alt={alt} />
            </div>
            <span className="product-emoji">{emoji}</span>
            <h3>{nombre}</h3>
            <p className="desc">{descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Productos
