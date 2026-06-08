"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function ProductosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Productos" subtitle="Catálogo de medicamentos y artículos con precio y stock." />
      <CrudTable title="Productos"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "categoria", label: "Categoría" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <span>${Number(r.precio).toLocaleString("es-CO")}</span> },
          { key: "stock", label: "Stock", type: "number", render: (r: any) => <Badge tone={Number(r.stock) <= 10 ? "danger" : "success"}>{r.stock}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Acetaminofén 500mg", categoria: "Analgésicos", precio: 4500, stock: 120 },
          { id: 2, nombre: "Amoxicilina 500mg", categoria: "Antibióticos", precio: 12800, stock: 8 },
          { id: 3, nombre: "Vitamina C 1g", categoria: "Vitaminas", precio: 9900, stock: 45 },
          { id: 4, nombre: "Jabón antibacterial", categoria: "Cuidado personal", precio: 7200, stock: 5 },
        ]} />
    </div>
  );
}
