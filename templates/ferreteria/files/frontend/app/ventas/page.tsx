"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function VentasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Ventas" subtitle="Registro de ventas realizadas en la ferretería." />
      <CrudTable
        title="Ventas"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "producto", label: "Producto" },
          { key: "cantidad", label: "Cantidad", type: "number" },
          { key: "total", label: "Total", type: "number", render: (r: any) => <span>${Number(r.total).toLocaleString("es-CO")}</span> },
        ]}
        initial={[
          { id: 1, cliente: "Juan Pérez", producto: "Taladro percutor 750W", cantidad: 1, total: 285000 },
          { id: 2, cliente: "Constructora Andina", producto: "Pintura blanca 1gal", cantidad: 12, total: 816000 },
          { id: 3, cliente: "Ana Gómez", producto: "Cable THHN #12 (metro)", cantidad: 50, total: 160000 },
          { id: 4, cliente: "Carlos Ruiz", producto: "Tubo PVC media pulgada", cantidad: 8, total: 76000 },
        ]}
      />
    </div>
  );
}
