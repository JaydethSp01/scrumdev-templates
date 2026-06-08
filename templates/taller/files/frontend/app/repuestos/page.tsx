"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Repuestos" subtitle="Inventario de repuestos, stock disponible y proveedores." />
      <CrudTable
        title="Repuestos"
        fields={[
          { key: "nombre", label: "Repuesto" },
          { key: "stock", label: "Stock", type: "number" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => `$${Number(r.precio).toLocaleString("es-CO")}` },
          { key: "proveedor", label: "Proveedor" },
        ]}
        initial={[
          { id: 1, nombre: "Pastillas de freno", stock: 24, precio: 85000, proveedor: "AutoPartes SAS" },
          { id: 2, nombre: "Filtro de aceite", stock: 6, precio: 32000, proveedor: "Lubricantes del Caribe" },
          { id: 3, nombre: "Bujías (juego)", stock: 18, precio: 60000, proveedor: "AutoPartes SAS" },
          { id: 4, nombre: "Amortiguador delantero", stock: 4, precio: 240000, proveedor: "Suspensiones Pro" },
          { id: 5, nombre: "Correa de distribución", stock: 9, precio: 175000, proveedor: "MotorParts" },
        ]}
      />
    </div>
  );
}
