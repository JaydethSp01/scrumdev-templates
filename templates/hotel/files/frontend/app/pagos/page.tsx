"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function PagosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pagos" subtitle="Registro de pagos por huésped, monto y método." />
      <CrudTable title="Pagos"
        fields={[
          { key: "huesped", label: "Huésped" },
          { key: "monto", label: "Monto", type: "number", render: (r: any) => <span>${Number(r.monto).toLocaleString()}</span> },
          { key: "metodo", label: "Método", render: (r: any) => <Badge tone={r.metodo === "Efectivo" ? "success" : "info"}>{r.metodo}</Badge> },
          { key: "fecha", label: "Fecha" },
        ]}
        initial={[
          { id: 1, huesped: "Juan Pérez", monto: 240000, metodo: "Tarjeta", fecha: "2026-06-07" },
          { id: 2, huesped: "Ana Gómez", monto: 1140000, metodo: "Tarjeta", fecha: "2026-06-07" },
          { id: 3, huesped: "Carlos Ruiz", monto: 120000, metodo: "Efectivo", fecha: "2026-06-08" },
          { id: 4, huesped: "Laura Martínez", monto: 1600000, metodo: "Transferencia", fecha: "2026-06-07" },
        ]} />
    </div>
  );
}
