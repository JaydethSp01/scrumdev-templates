"use client";
import { useState } from 'react';

const MOCK_DATA = {
  productos: [
    { id: 1, nombre: 'Camiseta Básica', precio: 19.99, categoria: 'Ropa Casual', stock: { S: 20, M: 15, L: 10 }, proveedor: 'Proveedor A' },
    { id: 2, nombre: 'Pantalón Jeans', precio: 49.99, categoria: 'Ropa Casual', stock: { S: 10, M: 5, L: 2 }, proveedor: 'Proveedor B' },
    { id: 3, nombre: 'Chaqueta de Cuero', precio: 99.99, categoria: 'Ropa Formal', stock: { S: 5, M: 2, L: 1 }, proveedor: 'Proveedor C' },
    { id: 4, nombre: 'Vestido de Verano', precio: 39.99, categoria: 'Ropa de Verano', stock: { S: 8, M: 10, L: 5 }, proveedor: 'Proveedor D' },
  ],
  alertas: [
    { producto: 'Camiseta Básica', talla: 'L', stock: 10 },
    { producto: 'Pantalón Jeans', talla: 'L', stock: 2 },
  ],
};

export default function InventorySystem() {
  const [data] = useState(MOCK_DATA);

  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Sistema de Inventario</h1>
        <p className="text-neutral-500 mt-1">Control y gestión de stock</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.productos.map((producto) => (
          <div key={producto.id} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
            <p className="text-sm text-neutral-500 mt-1">Precio: ${producto.precio.toFixed(2)}</p>
            <p className="text-sm text-neutral-500">Categoría: {producto.categoria}</p>
            <p className="text-sm text-neutral-500">Proveedor: {producto.proveedor}</p>
            <div className="mt-3">
              <p className="text-sm font-semibold">Stock por Talla:</p>
              <ul className="list-disc pl-5">
                {Object.entries(producto.stock).map(([talla, cantidad]) => (
                  <li key={talla} className="text-sm text-neutral-500">{talla}: {cantidad}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold mb-4">Alertas de Bajo Stock</h2>
        <ul className="list-disc pl-5 text-sm">
          {data.alertas.map((alerta, index) => (
            <li key={index} className="text-neutral-500">{alerta.producto} - Talla {alerta.talla}: {alerta.stock} unidades</li>
          ))}
        </ul>
      </div>
    </div>
  );
}