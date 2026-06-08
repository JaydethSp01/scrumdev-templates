"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pagos" subtitle="Pagos recibidos por los servicios del autolavado." />
      <CrudTable
        title="Pagos"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "monto", label: "Monto", type: "number", render: (r: any) => `$${Number(r.monto).toLocaleString("es-CO")}` },
          { key: "metodo", label: "Método" },
          { key: "fecha", label: "Fecha" },
        ]}
        initial={[
          { id: 1, cliente: "Juan Pérez", monto: 18000, metodo: "Efectivo", fecha: "08 jun 2026" },
          { id: 2, cliente: "Ana Gómez", monto: 35000, metodo: "Tarjeta", fecha: "08 jun 2026" },
          { id: 3, cliente: "Carlos Ruiz", monto: 50000, metodo: "Nequi", fecha: "07 jun 2026" },
          { id: 4, cliente: "Laura Martínez", monto: 80000, metodo: "Transferencia", fecha: "07 jun 2026" },
          { id: 5, cliente: "Pedro Sánchez", monto: 18000, metodo: "Efectivo", fecha: "06 jun 2026" },
        ]}
      />
    </div>
  );
}
