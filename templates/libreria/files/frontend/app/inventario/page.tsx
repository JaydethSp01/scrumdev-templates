"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function InventarioPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Inventario" subtitle="Control de existencias, mínimos y ubicación en bodega." />
      <CrudTable
        title="Inventario"
        fields={[
          { key: "producto", label: "Producto" },
          { key: "stock", label: "Stock", type: "number" },
          { key: "minimo", label: "Mínimo", type: "number" },
          { key: "ubicacion", label: "Ubicación" },
        ]}
        initial={[
          { id: 1, producto: "Cien años de soledad", stock: 18, minimo: 5, ubicacion: "Estante A1" },
          { id: 2, producto: "Cuaderno argollado 100h", stock: 240, minimo: 50, ubicacion: "Estante B3" },
          { id: 3, producto: "Set de acuarelas 24u", stock: 9, minimo: 10, ubicacion: "Estante C2" },
          { id: 4, producto: "Kit escolar primaria", stock: 52, minimo: 20, ubicacion: "Bodega D1" },
        ]}
      />
    </div>
  );
}
