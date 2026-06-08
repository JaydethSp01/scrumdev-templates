"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function InventarioPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Inventario" subtitle="Control de lotes, vencimientos y existencias por producto." />
      <CrudTable title="Inventario"
        fields={[
          { key: "producto", label: "Producto" },
          { key: "lote", label: "Lote" },
          { key: "vencimiento", label: "Vencimiento" },
          { key: "stock", label: "Stock", type: "number", render: (r: any) => <Badge tone={Number(r.stock) <= 10 ? "danger" : "success"}>{r.stock}</Badge> },
        ]}
        initial={[
          { id: 1, producto: "Amoxicilina 500mg", lote: "L-2231", vencimiento: "2026-06-20", stock: 8 },
          { id: 2, producto: "Ibuprofeno 400mg", lote: "L-1890", vencimiento: "2026-07-03", stock: 60 },
          { id: 3, producto: "Vitamina C 1g", lote: "L-3045", vencimiento: "2026-07-18", stock: 45 },
          { id: 4, producto: "Loratadina 10mg", lote: "L-2778", vencimiento: "2026-06-16", stock: 6 },
        ]} />
    </div>
  );
}
