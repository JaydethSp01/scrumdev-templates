import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlertaPage = () => {
  const [alertas, setAlertas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlertas = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/alerta`);
        setAlertas(response.data);
      } catch (error) {
        console.error('Error fetching alertas:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAlertas();
  }, []);

  if (loading) return <div>Cargando alertas...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Alertas de Stock</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Producto</th>
            <th className="py-2">Talla</th>
            <th className="py-2">Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {alertas.map((alerta) => (
            <tr key={alerta.id}>
              <td className="border px-4 py-2">{alerta.producto}</td>
              <td className="border px-4 py-2">{alerta.talla}</td>
              <td className="border px-4 py-2">{alerta.mensaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertaPage;
