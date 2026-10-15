import ContactoForm from '../components/ContactoForm';

const Contacto = () => {
  return (
    <div className="page-container">
      <h2>Comunicate con nosotros</h2>
      <p>Envianos tu consulta o encontranos en el campus.</p>
      
      <div className="contacto-wrapper">
        <div className="mapa-container">
          <iframe
            title="Mapa UCASAL"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.674996963493!2d-65.39414272460298!3d-24.737489578074987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc4eb10118671%3A0xc3b832b3bf7dbd!2sUniversidad%20Cat%C3%B3lica%20de%20Salta%20(UCASAL)!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '8px', minHeight: '400px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="formulario-container">
          <ContactoForm />
        </div>
      </div>
    </div>
  );
};

export default Contacto;