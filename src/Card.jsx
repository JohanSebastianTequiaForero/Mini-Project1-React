import { useState, useEffect } from "react";

export default function Card() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const bgColor = darkMode ? "#222" : "#fff";
  const textColor = darkMode ? "#fff" : "#000";
  const boxColor = darkMode ? "#333" : "#f2f2f2";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Contenedor principal */}
      <div
        style={{
          border: "2px solid gray",
          borderRadius: "10px",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* Encabezado */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid gray",
            }}
          ></div>
          <div>
            <a href="#" style={{ margin: "0 10px", color: textColor }}>
              INICIO
            </a>
            <a href="#" style={{ margin: "0 10px", color: textColor }}>
              PROGRAMAS
            </a>
            <a href="#" style={{ margin: "0 10px", color: textColor }}>
              CONTACTO
            </a>
          </div>
        </div>

        {/* Título principal */}
        <div style={{ textAlign: "center", margin: "30px 0" }}>
          <h3>SERVICIO NACIONAL DE APRENDIZAJE</h3>
          <h4>CENTRO DE GESTIÓN DE MERCADOS</h4>
          <h4>BOGOTÁ</h4>
        </div>

        <hr />

        {/* Cuadros de programas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            margin: "30px 0",
            textAlign: "center",
          }}
        >
          {["ADSO", "REDES DE DATOS", "ANIMACIÓN 3D", "LOGÍSTICA", "MERCADÉO", "SISTEMAS"].map(
            (programa) => (
              <div
                key={programa}
                style={{
                  backgroundColor: boxColor,
                  border: "1px solid gray",
                  borderRadius: "10px",
                  padding: "30px 10px",
                }}
              >
                <strong>{programa}</strong>
              </div>
            )
          )}
        </div>

        <hr />

        {/*Formulario*/}
        <div
          style={{
            width: "300px",
            margin: "30px auto",
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: boxColor,
          }}
        >
          <label>NOMBRES:</label>
          <input
            type="text"
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "5px",
            }}
          />
          <label>CORREO:</label>
          <input
            type="email"
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "5px",
            }}
          />
          <label>MENSAJE:</label>
          <textarea
            style={{
              width: "100%",
              height: "70px",
              marginBottom: "10px",
              padding: "5px",
            }}
          ></textarea>
          <button
            style={{
              width: "100%",
              padding: "8px",
              backgroundColor: darkMode ? "#4a90e2" : "#ccc",
              color: darkMode ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ENVIAR
          </button>
        </div>

        {/*Botón cambiar tema */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button
            onClick={toggleTheme}
            style={{
              padding: "8px 15px",
              backgroundColor: darkMode ? "#4a90e2" : "#ddd",
              color: darkMode ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            CAMBIAR TEMA
          </button>
        </div>
      </div>
    </div>
  );
}
