import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactoForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El Nombre y Apellido son obligatorios.';
    } else if (formData.nombre.trim().length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nuevosErrores.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.email)) {
      nuevosErrores.email = 'Ingrese un correo electrónico válido.';
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';
    } else if (formData.mensaje.length > 300) {
      nuevosErrores.mensaje = 'El mensaje no puede superar los 300 caracteres.';
    }

    return nuevosErrores;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar();

    if (Object.keys(erroresValidacion).length > 0) {
      setErrors(erroresValidacion);
      setEnviado(false);
    } else {
      setErrors({});
      
      const serviceID = 'service_flc4j0l';
      const templateID = 'template_mkplesq';
      const publicKey = '4EHGviXZRxfC9Os0p'; 

      const templateParams = {
        nombre: formData.nombre,
        email: formData.email,
        mensaje: formData.mensaje,
      };

      emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log('Correo enviado con éxito!', response.status, response.text);
          setEnviado(true);
          setFormData({ nombre: '', email: '', mensaje: '' });
          
          // Ocultar el cartel de éxito después de 5 segundos
          setTimeout(() => setEnviado(false), 5000);
        })
        .catch((error) => {
          console.log('Error al enviar el correo...', error);
          alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        });
    }
  };

  return (
    <div className="form-container">
      {enviado && (
        <div className="mensaje-exito">
          ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre y Apellido *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={errors.nombre ? 'input-error' : ''}
            placeholder="Ej. Juan Pérez"
          />
          {errors.nombre && <span className="error-text">{errors.nombre}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
            placeholder="ejemplo@correo.com"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <div className="label-counter">
            <label htmlFor="mensaje">Mensaje *</label>
            <span className="caracteres">{formData.mensaje.length}/300</span>
          </div>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            maxLength={300}
            value={formData.mensaje}
            onChange={handleChange}
            className={errors.mensaje ? 'input-error' : ''}
            placeholder="Escribe tu consulta aquí..."
          />
          {errors.mensaje && <span className="error-text">{errors.mensaje}</span>}
        </div>

        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactoForm;