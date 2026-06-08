"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function VentasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Ventas" subtitle="Registro de ventas y facturación del punto." />
      <CrudTable
        title="Ventas"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "producto", label: "Producto" },
          { key: "cantidad", label: "Cantidad", type: "number" },
          { key: "total", label: "Total", type: "number", render: (r: any) => `$${r.total}` },
        ]}
        initial={[
          { id: 1, cliente: "María Gómez", producto: "Cien años de soledad", cantidad: 1, total: 65000 },
          { id: 2, cliente: "Carlos Ruiz", producto: "Cuaderno argollado 100h", cantidad: 5, total: 60000 },
          { id: 3, cliente: "Laura Díaz", producto: "Set de acuarelas 24u", cantidad: 2, total: 96000 },
          { id: 4, cliente: "Andrés Peña", producto: "Kit escolar primaria", cantidad: 1, total: 35000 },
        ]}
      />
    </div>
  );
}
