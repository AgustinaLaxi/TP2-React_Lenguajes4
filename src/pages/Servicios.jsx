const Servicios = () => {
  const tecnologias = [
    {
      id: 1,
      nombre: "Desarrollo en Java",
      descripcion: "Creación de estructuras de datos y algoritmos eficientes.",
      imagen: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
    },
    {
      id: 2,
      nombre: "Bases de Datos SQL",
      descripcion: "Diseño, gestión y consultas en bases de datos relacionales.",
      imagen: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png"
    },
    {
      id: 3,
      nombre: "Frontend con React",
      descripcion: "Desarrollo de interfaces de usuario dinámicas e interactivas.",
      imagen: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
    }
  ];

  return (
    <div className="page-container">
      <h2>Mis Habilidades Tecnológicas</h2>
      <p>Conocimientos y herramientas aplicadas en el desarrollo de software.</p>
      
      {/* Reutilizamos la clase crypto-container que armaste antes para mantener la misma grilla ocre */}
      <div className="crypto-container"> 
        {tecnologias.map((tech) => (
          <div key={tech.id} className="crypto-card">
            <img src={tech.imagen} alt={tech.nombre} className="crypto-img" />
            <h3>{tech.nombre}</h3>
            <p>{tech.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;