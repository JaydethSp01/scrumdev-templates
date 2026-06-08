"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function VentasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Ventas" subtitle="Registro de ventas con cliente, producto y total." />
      <CrudTable title="Ventas"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "producto", label: "Producto" },
          { key: "cantidad", label: "Cantidad", type: "number" },
          { key: "total", label: "Total", type: "number", render: (r: any) => <span>${Number(r.total).toLocaleString("es-CO")}</span> },
        ]}
        initial={[
          { id: 1, cliente: "Juan Pérez", producto: "Acetaminofén 500mg", cantidad: 2, total: 9000 },
          { id: 2, cliente: "Ana Gómez", producto: "Amoxicilina 500mg", cantidad: 1, total: 12800 },
          { id: 3, cliente: "Carlos Ruiz", producto: "Vitamina C 1g", cantidad: 3, total: 29700 },
          { id: 4, cliente: "Laura Martínez", producto: "Jabón antibacterial", cantidad: 4, total: 28800 },
        ]} />
    </div>
  );
}
