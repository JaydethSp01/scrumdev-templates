"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function PagosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pagos" subtitle="Registro de pagos de servicios y planes con trato discreto." />
      <CrudTable
        title="Pagos"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "monto", label: "Monto", type: "number", render: (r: any) => <span>${Number(r.monto).toLocaleString("es-CO")}</span> },
          { key: "metodo", label: "Método" },
          { key: "fecha", label: "Fecha" },
        ]}
        initial={[
          { id: 1, cliente: "Marta Díaz", monto: 1200000, metodo: "Transferencia", fecha: "2026-06-05" },
          { id: 2, cliente: "Andrés Ríos", monto: 2400000, metodo: "Tarjeta", fecha: "2026-06-06" },
          { id: 3, cliente: "Patricia Mejía", monto: 800000, metodo: "Efectivo", fecha: "2026-06-07" },
          { id: 4, cliente: "Camilo Vargas", monto: 3600000, metodo: "Transferencia", fecha: "2026-06-08" },
        ]}
      />
    </div>
  );
}
