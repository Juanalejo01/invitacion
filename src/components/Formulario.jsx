import "./formulario.css";

const Formulario = () => {
  return (
    <div className="form-container">
      <h2>Rellena este Formulario</h2>
      <form
        action="https://formsubmit.co/vivirodas.cumple@gmail.com"
        method="POST"
      >
        {/* Nombre */}
        <div className="form-group">
          <label htmlFor="nombre">Tu Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        {/* Opción */}
        <div className="form-group">
          <label>¿Cual opción escoges?:</label>
          <div className="horizontal-group">
            <input
              type="radio"
              id="sobre"
              name="opcion"
              value="Sobre"
              required
            />
            <label htmlFor="sobre">Sobre</label>
            <input
              type="radio"
              id="regalo"
              name="opcion"
              value="Regalo"
              required
            />
            <label htmlFor="regalo">Regalo</label>
          </div>
        </div>

        {/* Confirmación de asistencia */}
        <div className="form-group">
          <label>Confirma tu asistencia:</label>
          <div className="horizontal-group">
            <input
              type="radio"
              id="voy"
              name="asistencia"
              value="Voy"
              required
            />
            <label htmlFor="voy">Voy</label>
            <input
              type="radio"
              id="no-voy"
              name="asistencia"
              value="No voy"
              required
            />
            <input
              type="hidden"
              name="_next"
              value="https://mis-quince-viviana.netlify.app/"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>

            <label htmlFor="no-voy">No voy</label>
          </div>
        </div>

        {/* Dedicatoria */}
        <div className="form-group">
          <label htmlFor="dedicatoria">
            ¿Quieres dedicar algunas palabras?:
          </label>
          <textarea
            id="dedicatoria"
            name="dedicatoria"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Botón */}
        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
