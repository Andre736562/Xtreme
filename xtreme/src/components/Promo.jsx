function Promo() {
  return (
    <section className="promo">
      <div className="promo-box">
        <div className="promo-left">
          <span className="promo-tag">PROMOCIÓN ESPECIAL</span>
          <h2>50% DE DESCUENTO</h2>
          <p>
            En tu primera compra o inscripción obtén el 50% de descuento
            en cualquier producto seleccionado.
          </p>
          <a href="#contacto" className="promo-btn">Reclamar promoción</a>
        </div>
        <div className="promo-right">
          <div className="discount-circle">50%</div>
        </div>
      </div>
    </section>
  )
}
export default Promo
