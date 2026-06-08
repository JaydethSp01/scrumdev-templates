"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function PagosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pagos" subtitle="Registro de pagos por cliente, monto y método." />
      <CrudTable
        title="Pagos"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "monto", label: "Monto", type: "number", render: (r: any) => <span>${Number(r.monto).toLocaleString()}</span> },
          { key: "metodo", label: "Método", render: (r: any) => <Badge tone="info">{r.metodo}</Badge> },
          { key: "fecha", label: "Fecha" },
        ]}
        initial={[
          { id: 1, cliente: "Laura Méndez", monto: 35000, metodo: "Efectivo", fecha: "2026-06-08" },
          { id: 2, cliente: "Carlos Ríos", monto: 18000, metodo: "Tarjeta", fecha: "2026-06-08" },
          { id: 3, cliente: "Ana Salas", monto: 90000, metodo: "Transferencia", fecha: "2026-06-07" },
          { id: 4, cliente: "Diego Torres", monto: 30000, metodo: "Nequi", fecha: "2026-06-07" },
        ]}
      />
    </div>
  );
}
