"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function PaquetesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Paquetes" subtitle="Paquetes promocionales con sesiones, precio y vigencia." />
      <CrudTable
        title="Paquetes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <>${Number(r.precio).toLocaleString("es-CO")}</> },
          { key: "sesiones", label: "Sesiones", type: "number" },
          { key: "vigencia", label: "Vigencia" },
        ]}
        initial={[
          { id: 1, nombre: "Relax total", precio: 320000, sesiones: 4, vigencia: "3 meses" },
          { id: 2, nombre: "Piel radiante", precio: 280000, sesiones: 4, vigencia: "2 meses" },
          { id: 3, nombre: "Depilación completa", precio: 200000, sesiones: 5, vigencia: "4 meses" },
          { id: 4, nombre: "Novia perfecta", precio: 450000, sesiones: 6, vigencia: "6 meses" },
          { id: 5, nombre: "Manos y pies", precio: 150000, sesiones: 3, vigencia: "2 meses" },
        ]}
      />
    </div>
  );
}
