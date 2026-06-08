"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function PagosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pagos" subtitle="Registro de pagos de membresías y servicios." />
      <CrudTable title="Pagos"
        fields={[
          { key: "miembro", label: "Miembro" },
          { key: "monto", label: "Monto", type: "number", render: (r: any) => <span>${Number(r.monto).toLocaleString()}</span> },
          { key: "metodo", label: "Método" },
          { key: "fecha", label: "Fecha" },
        ]}
        initial={[
          { id: 1, miembro: "Pedro Ramírez", monto: 130000, metodo: "Tarjeta", fecha: "2026-06-01" },
          { id: 2, miembro: "María López", monto: 80000, metodo: "Efectivo", fecha: "2026-06-02" },
          { id: 3, miembro: "Andrés Gómez", monto: 330000, metodo: "Transferencia", fecha: "2026-06-03" },
          { id: 4, miembro: "Ruth Díaz", monto: 1100000, metodo: "Tarjeta", fecha: "2026-06-05" },
        ]} />
    </div>
  );
}
