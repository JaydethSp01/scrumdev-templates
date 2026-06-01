import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TallaPage = () => {
  const [tallas, setTallas] = useState([]);

  useEffect(() => {
    const fetchTallas = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api/mock'}/talla`);
        setTallas(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTallas();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tallas</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2">Talla</th>
            <th className="w-1/2 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tallas.map((talla) => (
            <tr key={talla.id}>
              <td className="border px-4 py-2">{talla.talla}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">Editar</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TallaPage;
