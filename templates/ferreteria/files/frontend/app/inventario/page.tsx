"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function InventarioPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Inventario" subtitle="Control de existencias por ubicación y nivel mínimo." />
      <CrudTable
        title="Inventario"
        fields={[
          { key: "producto", label: "Producto" },
          { key: "ubicacion", label: "Ubicación" },
          { key: "stock", label: "Stock", type: "number" },
          { key: "minimo", label: "Mínimo", type: "number" },
        ]}
        initial={[
          { id: 1, producto: "Taladro percutor 750W", ubicacion: "Pasillo A-3", stock: 3, minimo: 5 },
          { id: 2, producto: "Pintura blanca 1gal", ubicacion: "Bodega B-1", stock: 6, minimo: 10 },
          { id: 3, producto: "Cable THHN #12 (metro)", ubicacion: "Pasillo C-2", stock: 320, minimo: 100 },
          { id: 4, producto: "Tubo PVC media pulgada", ubicacion: "Bodega B-4", stock: 2, minimo: 15 },
        ]}
      />
    </div>
  );
}
