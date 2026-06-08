"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function ServiciosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Servicios" subtitle="Catálogo de tratamientos con precio, duración y categoría." />
      <CrudTable
        title="Servicios"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <>${Number(r.precio).toLocaleString("es-CO")}</> },
          { key: "duracion", label: "Duración" },
          { key: "categoria", label: "Categoría" },
        ]}
        initial={[
          { id: 1, nombre: "Masaje relajante", precio: 90000, duracion: "60 min", categoria: "Masajes" },
          { id: 2, nombre: "Limpieza facial profunda", precio: 75000, duracion: "45 min", categoria: "Faciales" },
          { id: 3, nombre: "Depilación con cera", precio: 50000, duracion: "30 min", categoria: "Depilación" },
          { id: 4, nombre: "Manicure spa", precio: 35000, duracion: "40 min", categoria: "Manicure" },
          { id: 5, nombre: "Masaje con piedras calientes", precio: 120000, duracion: "75 min", categoria: "Masajes" },
        ]}
      />
    </div>
  );
}
