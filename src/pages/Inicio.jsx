import { useState, useEffect } from 'react';

const Inicio = () => {
  // Estados para guardar los datos de la API y controlar la pantalla de carga
  const [criptos, setCriptos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerCriptos = async () => {
      try {
        const respuesta = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const datos = await respuesta.json();
        setCriptos(datos);
        setCargando(false);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setCargando(false);
      }
    };

    obtenerCriptos();
  }, []);

  return (
    <div className="page-container">
      <h2>Mercado de Criptomonedas en Tiempo Real</h2>
      <p>Cotizaciones principales obtenidas desde la API de CoinGecko.</p>
      
      {cargando ? (
        <p>Cargando datos...</p>
      ) : (
        <div className="crypto-container">
          {criptos.map((cripto) => (
            <div key={cripto.id} className="crypto-card">
              <img src={cripto.image} alt={cripto.name} className="crypto-img" />
              <h3>{cripto.name} ({cripto.symbol.toUpperCase()})</h3>
              <div className="crypto-info">
                <p><strong>Precio:</strong> ${cripto.current_price}</p>
                <p><strong>Variación 24h:</strong> {cripto.price_change_percentage_24h}%</p>
                <p><strong>Rango de Mercado:</strong> #{cripto.market_cap_rank}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inicio;