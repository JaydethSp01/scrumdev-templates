import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriaPage = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api/mock'}/categoria`);
        setCategorias(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categorías</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2">Nombre</th>
            <th className="w-1/2 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td className="border px-4 py-2">{categoria.nombre}</td>
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

export default CategoriaPage;
