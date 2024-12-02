import React, { useEffect, useState } from "react"; // Solo esta línea es suficiente
import "./App.css";
import Temporizador from "./components/Temporizador";
import Foto from "./assets/IMG-20241127-WA0024.jpg"; // Importa la imagen SVG
import Formulario from "./components/Formulario";
import Cards from "./components/Cards";

function App() {
  const targetDate = new Date("2024-12-13T00:00:00"); // Fecha objetivo

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imageHeight = document.querySelector(".foto").offsetHeight; // Obtener la altura de la imagen
      const scrollPosition = window.scrollY; // Obtener la posición actual del scroll
      if (scrollPosition > imageHeight) {
        setIsHidden(true); // Oculta el h1 cuando el scroll pasa la altura de la imagen
      } else {
        setIsHidden(false); // Muestra el h1 mientras está sobre la imagen
      }
    };

    window.addEventListener("scroll", handleScroll); // Agregar el event listener para el scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpiar el event listener cuando el componente se desmonte
    };
  }, []);
  return (
    <div className="app">
      <header className="header">
        <h1 className={isHidden ? "hidden" : ""}>Viviana Rodas</h1>
      </header>

      {/* Foto de la cumpleañera */}
      <div className="foto-section">
        <img src={Foto} alt="Foto de Viviana" className="foto" />
      </div>
      <p className="descripcion">DIOS TE BENDIGA!</p>
      <p className="descripcion2">
        ¡Quiero que estés conmigo en un día muy especial! Ven a celebrar mis
        quince años, será una fiesta increíble, llena de alegría y buenos
        momentos. ¡Te espero con mucho cariño
      </p>
      <main className="main">
        <div className="content">
          <Temporizador targetDate={targetDate} />
          <button
            className="btn"
            onClick={() =>
              (window.location.href =
                "https://calendar.app.google/GY4279kQvsvAXDrq6")
            }
          >
            Añadir recordatorio
          </button>
        </div>
      </main>

      <h5>Lugar</h5>
      <button
        className="btn"
        onClick={() =>
          (window.location.href =
            "https://www.google.com/maps/place/IPUE+Tona+-+Iglesia+Pentecostal+Unida+en+Europa,+Carrer+Joan+Maragall,+17,+Local+2,+08551+Tona,+Barcelona/data=!4m2!3m1!1s0x12a4d9b9d6cf8e7f:0xcd1f049cd3400b7?entry=gps&coh=192189&g_ep=CAESBzI0LjQ3LjQYACDXggMqfiw5NDIyNjA0Miw5NDI0MjYwNCw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICRVM%3D")
        }
      >
        Ubicacion!
      </button>
      <h4>Código de Vestimenta</h4>
      <p className="descripcion">
        Si vas a asisitir, recuerda venir de acorde al codigo de vestimenta! a
        continuación podrás verlo...
      </p>
      <Cards />

      <p className="descripcion">
        Los hombres deberán ir de Blanco y Negro, acorde al código de
        vestimenta!
      </p>

      <main className="main">
        <Formulario />
      </main>

      <footer className="footer">
        <p>© 2024 Mis Quince. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
