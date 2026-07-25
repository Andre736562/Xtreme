import { useState } from "react"

function Contacto() {
  const [estado, setEstado] = useState("")
  const [esError, setEsError] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const enviarFormulario = async (event) => {
    event.preventDefault()

    const formulario = event.currentTarget
    const datos = new FormData(formulario)

    setEnviando(true)
    setEstado("")
    setEsError(false)

    try {
      const respuesta = await fetch(
        "http://localhost/xtreme/guardar.php",
        {
          method: "POST",
          body: datos,
        }
      )

      const texto = await respuesta.text()

      let resultado

      try {
        resultado = JSON.parse(texto)
      } catch {
        throw new Error(
          "El servidor no devolvió una respuesta válida."
        )
      }

      if (!respuesta.ok || !resultado.ok) {
        throw new Error(
          resultado.mensaje ||
          "No se pudo guardar la inscripción."
        )
      }

      setEstado(
        "¡Inscripción registrada correctamente! Ya puedes reclamar tu promoción."
      )

      formulario.reset()
    } catch (error) {
      setEsError(true)
      setEstado(`Error: ${error.message}`)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section id="contacto">
      <div className="section-label">
        Reclama tu promoción
      </div>

      <h2 className="title">
        INSCRÍBETE
        <br />
        Y OBTÉN
        <br />
        TU DESCUENTO
      </h2>

      <div className="contact-layout">
        <div className="contact-info">
          <p>
            Completa el formulario para acceder al 50%
            de descuento en tu primera compra.
          </p>

          <div className="contact-detail">
            <div className="icon">🎁</div>
            Promoción válida para nuevos clientes
          </div>

          <div className="contact-detail">
            <div className="icon">📱</div>
            Atención rápida por WhatsApp
          </div>

          <div className="contact-detail">
            <div className="icon">✅</div>
            Llena todos los campos para reclamar tu promoción
          </div>
        </div>

        <form
          className="contact-form"
          id="formulario-promocion"
          onSubmit={enviarFormulario}
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            required
          />

          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            required
          />

          <textarea
            name="mensaje"
            placeholder="¿En qué podemos ayudarte?"
            required
          />

          <button type="submit" disabled={enviando}>
            {enviando
              ? "Enviando..."
              : "Enviar inscripción"}
          </button>
{estado && (
  esError ? (
    <p className="form-message error">
      {estado}
    </p>
  ) : (
    <div className="promo-success">
      <div className="promo-success-icon">
        🎉
      </div>

      <h3>
        ¡Inscripción registrada!
      </h3>

      <p>
        Tus datos se guardaron correctamente.
      </p>

      <strong>
        Ya puedes reclamar tu 50% de descuento.
      </strong>

      <a
        href="https://wa.me/593982080543"
        target="_blank"
        rel="noreferrer"
        className="promo-success-btn"
      >
        Reclamar promoción por WhatsApp
      </a>
    </div>
  )
)}
        </form>
      </div>
    </section>
  )
}

export default Contacto