"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function ProductosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Productos" subtitle="Inventario de monturas, lentes, gafas y accesorios." />
      <CrudTable
        title="Productos"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "categoria", label: "Categoría" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <span>${Number(r.precio).toLocaleString("es-CO")}</span> },
          { key: "stock", label: "Stock", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Montura Ray-Ban Clásica", categoria: "Monturas", precio: 320000, stock: 14 },
          { id: 2, nombre: "Lentes de contacto Acuvue", categoria: "Lentes de contacto", precio: 85000, stock: 60 },
          { id: 3, nombre: "Gafas de sol Polarizadas", categoria: "Gafas de sol", precio: 180000, stock: 22 },
          { id: 4, nombre: "Estuche rígido premium", categoria: "Accesorios", precio: 25000, stock: 48 },
        ]}
      />
    </div>
  );
}
