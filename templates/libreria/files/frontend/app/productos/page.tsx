"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function ProductosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Productos" subtitle="Catálogo de libros y artículos de papelería." />
      <CrudTable
        title="Productos"
        fields={[
          { key: "titulo", label: "Título" },
          { key: "categoria", label: "Categoría" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => `$${r.precio}` },
          { key: "stock", label: "Stock", type: "number" },
        ]}
        initial={[
          { id: 1, titulo: "Cien años de soledad", categoria: "Libros", precio: 65000, stock: 18 },
          { id: 2, titulo: "Cuaderno argollado 100h", categoria: "Papelería", precio: 12000, stock: 240 },
          { id: 3, titulo: "Set de acuarelas 24u", categoria: "Arte", precio: 48000, stock: 9 },
          { id: 4, titulo: "Kit escolar primaria", categoria: "Escolar", precio: 35000, stock: 52 },
        ]}
      />
    </div>
  );
}
