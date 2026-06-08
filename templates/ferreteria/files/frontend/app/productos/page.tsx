"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function ProductosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Productos" subtitle="Catálogo de herramientas, pinturas, eléctricos y plomería." />
      <CrudTable
        title="Productos"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "categoria", label: "Categoría" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <span>${Number(r.precio).toLocaleString("es-CO")}</span> },
          { key: "stock", label: "Stock", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Taladro percutor 750W", categoria: "Herramientas", precio: 285000, stock: 14 },
          { id: 2, nombre: "Pintura blanca 1gal", categoria: "Pinturas", precio: 68000, stock: 40 },
          { id: 3, nombre: "Cable THHN #12 (metro)", categoria: "Eléctricos", precio: 3200, stock: 320 },
          { id: 4, nombre: "Tubo PVC media pulgada", categoria: "Plomería", precio: 9500, stock: 85 },
        ]}
      />
    </div>
  );
}
