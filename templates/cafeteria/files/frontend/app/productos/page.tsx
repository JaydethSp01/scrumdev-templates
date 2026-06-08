"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function ProductosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Productos" subtitle="Carta de la cafetería: cafés, pastelería, sándwiches y bebidas." />
      <CrudTable
        title="Productos"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "categoria", label: "Categoría" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <span>${r.precio.toLocaleString("es-CO")}</span> },
          { key: "stock", label: "Stock", type: "number", render: (r: any) => <Badge tone={r.stock > 0 ? "success" : "danger"}>{r.stock}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Capuchino", categoria: "Café", precio: 7500, stock: 80 },
          { id: 2, nombre: "Croissant", categoria: "Pastelería", precio: 5500, stock: 24 },
          { id: 3, nombre: "Sándwich de pollo", categoria: "Sándwiches", precio: 12000, stock: 15 },
          { id: 4, nombre: "Frappé de mocca", categoria: "Bebidas frías", precio: 9800, stock: 0 },
        ]}
      />
    </div>
  );
}
