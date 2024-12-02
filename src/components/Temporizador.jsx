import React, { useState, useEffect } from "react";
import "./temporizador.css";

const Temporizador = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Ejecutar cálculo al inicio
    calculateTimeLeft();

    // Intervalo para actualizar cada segundo
    const timer = setInterval(calculateTimeLeft, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <h3>¡Prepárate! Faltan...</h3>
      <div className="countdown">
        <div className="time-box">
          <div>
            <p className="time">{timeLeft.days}</p>
            <span>Días</span>
          </div>
          <div>
            <p className="time">{timeLeft.hours}</p>
            <span>Horas</span>
          </div>
          <div>
            <p className="time">{timeLeft.minutes}</p>
            <span>Minutos</span>
          </div>
          <div>
            <p className="time">{timeLeft.seconds}</p>
            <span>Segundos</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temporizador;
