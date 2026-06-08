"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function InventarioPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Inventario" subtitle="Insumos de la cafetería y alertas de stock mínimo." />
      <CrudTable
        title="Inventario"
        fields={[
          { key: "insumo", label: "Insumo" },
          { key: "stock", label: "Stock", type: "number", render: (r: any) => <Badge tone={r.stock <= r.minimo ? "danger" : "success"}>{r.stock}</Badge> },
          { key: "unidad", label: "Unidad" },
          { key: "minimo", label: "Mínimo", type: "number" },
        ]}
        initial={[
          { id: 1, insumo: "Café en grano", stock: 25, unidad: "kg", minimo: 10 },
          { id: 2, insumo: "Leche entera", stock: 8, unidad: "L", minimo: 12 },
          { id: 3, insumo: "Azúcar", stock: 30, unidad: "kg", minimo: 8 },
          { id: 4, insumo: "Vasos desechables", stock: 150, unidad: "und", minimo: 100 },
        ]}
      />
    </div>
  );
}
