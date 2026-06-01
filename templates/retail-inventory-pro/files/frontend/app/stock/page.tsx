import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockPage = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api/mock'}/stock`);
        setStocks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Stock</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="w-1/4 px-4 py-2">Producto</th>
            <th className="w-1/4 px-4 py-2">Talla</th>
            <th className="w-1/4 px-4 py-2">Cantidad</th>
            <th className="w-1/4 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td className="border px-4 py-2">{stock.producto}</td>
              <td className="border px-4 py-2">{stock.talla}</td>
              <td className="border px-4 py-2">{stock.cantidad}</td>
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

export default StockPage;
