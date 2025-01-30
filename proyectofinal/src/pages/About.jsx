import React, { useState } from 'react';

const About = () => {
  const [consulta, setConsulta] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [exito, setExito] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (consulta.trim() === '') {
      setMensaje('Por favor, ingresa tu consulta.');
      setExito(false);
      return;
    }

    setEnviando(true);
    setMensaje('');
    
    setTimeout(() => {
      setEnviando(false);
      setExito(true);
      setMensaje('Tu consulta ha sido enviada con éxito. ¡Gracias!');
      setConsulta('');
    }, 2000); 
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>Acerca de Nosotros</h1>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#555", maxWidth: "800px", margin: "0 auto" }}>
        Bienvenido a nuestra tienda de perfumes masculinos. Aquí encontrarás las mejores fragancias para cualquier ocasión.
        Nuestro compromiso es ofrecer productos de alta calidad que destaquen por su aroma y elegancia. Explora nuestra
        selección cuidadosamente curada para encontrar el perfume perfecto que se adapte a tu estilo y personalidad.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <img 
          src="/src/assets/images/about-perfume.jpg" 
          alt="Perfumes" 
          style={{ maxWidth: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} 
        />
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>¿Tienes alguna consulta?</h2>

        <form onSubmit={manejarEnvio} style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
          <textarea
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            placeholder="Escribe tu consulta aquí..."
            rows="4"
            style={{ width: "100%", padding: "1rem", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }}
          />
          <br />
          <button 
            type="submit" 
            disabled={enviando}
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.5rem",
              border: "none",
              backgroundColor: "#5cb85c",
              color: "#fff",
              fontSize: "1rem",
              borderRadius: "4px",
              cursor: enviando ? "not-allowed" : "pointer"
            }}
          >
            {enviando ? 'Enviando...' : 'Enviar consulta'}
          </button>
        </form>

        {enviando && <p>Enviando tu consulta...</p>}
        
        {exito && !enviando && <p style={{ color: 'green' }}>{mensaje}</p>}
        
        {!exito && mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}
      </div>
    </div>
  );
};

export default About;