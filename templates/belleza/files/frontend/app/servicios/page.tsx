"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function ServiciosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Servicios" subtitle="Catálogo de servicios, precios y duración." />
      <CrudTable
        title="Servicios"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <span>${Number(r.precio).toLocaleString()}</span> },
          { key: "duracion", label: "Duración" },
          { key: "categoria", label: "Categoría", render: (r: any) => <Badge tone="brand">{r.categoria}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Corte clásico", precio: 25000, duracion: "30 min", categoria: "Corte" },
          { id: 2, nombre: "Tinte completo", precio: 90000, duracion: "90 min", categoria: "Tinte" },
          { id: 3, nombre: "Barba y perfilado", precio: 18000, duracion: "25 min", categoria: "Barba" },
          { id: 4, nombre: "Manicure", precio: 30000, duracion: "45 min", categoria: "Manicure" },
        ]}
      />
    </div>
  );
}
