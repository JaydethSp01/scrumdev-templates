"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ServiciosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Servicios" subtitle="Catálogo de servicios, precios y tiempos de entrega." />
      <CrudTable
        title="Servicios"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => `$${Number(r.precio).toLocaleString("es-CO")}` },
          { key: "unidad", label: "Unidad" },
          { key: "tiempo", label: "Tiempo" },
        ]}
        initial={[
          { id: 1, nombre: "Lavado", precio: 3000, unidad: "Prenda", tiempo: "24 h" },
          { id: 2, nombre: "Planchado", precio: 2500, unidad: "Prenda", tiempo: "12 h" },
          { id: 3, nombre: "Lavado en seco", precio: 12000, unidad: "Prenda", tiempo: "48 h" },
          { id: 4, nombre: "Tintorería", precio: 14000, unidad: "Prenda", tiempo: "72 h" },
        ]}
      />
    </div>
  );
}
