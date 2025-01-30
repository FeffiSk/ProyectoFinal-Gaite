const About = () => (
    <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>Acerca de Nosotros</h1>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#555", maxWidth: "800px", margin: "0 auto" }}> Bienvenido a nuestra tienda de perfumes masculinos. Aquí encontrarás las mejores fragancias para cualquier ocasión.
        Nuestro compromiso es ofrecer productos de alta calidad que destaquen por su aroma y elegancia. Explora nuestra
        selección cuidadosamente curada para encontrar el perfume perfecto que se adapte a tu estilo y personalidad.</p>
        <div style={{ marginTop: "2rem" }}>
        <img src="/src/assets/images/about-perfume.jpg" alt="Perfumes" style={{ maxWidth: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} />
      </div>
    </div>
  );
  
  export default About;