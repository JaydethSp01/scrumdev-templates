"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function ServiciosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Servicios" subtitle="Servicios adicionales del hotel y sus tarifas." />
      <CrudTable title="Servicios"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <span>${Number(r.precio).toLocaleString()}</span> },
          { key: "categoria", label: "Categoría", render: (r: any) => <Badge tone="info">{r.categoria}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Desayuno buffet", precio: 25000, categoria: "Alimentos" },
          { id: 2, nombre: "Spa y masajes", precio: 90000, categoria: "Bienestar" },
          { id: 3, nombre: "Lavandería", precio: 18000, categoria: "Limpieza" },
          { id: 4, nombre: "Transporte aeropuerto", precio: 60000, categoria: "Transporte" },
        ]} />
    </div>
  );
}
