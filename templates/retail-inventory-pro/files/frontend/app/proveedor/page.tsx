import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProveedorPage = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api/mock'}/proveedor`);
        setProveedores(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProveedores();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Proveedores</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="w-1/3 px-4 py-2">Nombre</th>
            <th className="w-1/3 px-4 py-2">Contacto</th>
            <th className="w-1/3 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor.id}>
              <td className="border px-4 py-2">{proveedor.nombre}</td>
              <td className="border px-4 py-2">{proveedor.contacto}</td>
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

export default ProveedorPage;
