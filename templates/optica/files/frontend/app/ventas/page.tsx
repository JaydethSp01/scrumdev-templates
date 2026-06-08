"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function VentasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Ventas" subtitle="Registro de ventas realizadas en la óptica." />
      <CrudTable
        title="Ventas"
        fields={[
          { key: "paciente", label: "Paciente" },
          { key: "producto", label: "Producto" },
          { key: "total", label: "Total", type: "number", render: (r: any) => <span>${Number(r.total).toLocaleString("es-CO")}</span> },
          { key: "fecha", label: "Fecha" },
        ]}
        initial={[
          { id: 1, paciente: "Juan Pérez", producto: "Montura Ray-Ban Clásica", total: 320000, fecha: "2026-06-07" },
          { id: 2, paciente: "Ana Gómez", producto: "Lentes de contacto Acuvue", total: 85000, fecha: "2026-06-07" },
          { id: 3, paciente: "Carlos Ruiz", producto: "Gafas de sol Polarizadas", total: 180000, fecha: "2026-06-06" },
          { id: 4, paciente: "Laura Martínez", producto: "Estuche rígido premium", total: 25000, fecha: "2026-06-05" },
        ]}
      />
    </div>
  );
}
