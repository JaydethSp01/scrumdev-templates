"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = [
  { id: 1, nombre: "Zapatilla Runner Pro", categoria: "Calzado", precio: 89.99, stock: 0, estado: "Agotado" },
  { id: 2, nombre: "Camiseta Oversize Negra", categoria: "Ropa", precio: 24.5, stock: 6, estado: "Stock bajo" },
  { id: 3, nombre: "Mochila Urban 24L", categoria: "Accesorios", precio: 59.0, stock: 4, estado: "Stock bajo" },
  { id: 4, nombre: "Gorra Trucker Índigo", categoria: "Accesorios", precio: 19.99, stock: 87, estado: "En stock" },
  { id: 5, nombre: "Pantalón Cargo Slim", categoria: "Ropa", precio: 44.9, stock: 132, estado: "En stock" },
  { id: 6, nombre: "Sudadera Tech Fleece", categoria: "Deportes", precio: 64.0, stock: 41, estado: "En stock" },
];

const tone = (e: string) => (e === "En stock" ? "success" : e === "Stock bajo" ? "warning" : "danger");

export default function Page() {
  const router = useRouter();
  const [rows] = useState(MOCK);

  const columns = [
    {
      key: "nombre",
      header: "Producto",
      render: (r: any) => (
        <div className="flex items-center gap-3">
          <Avatar name={r.nombre} />
          <div>
            <p className="font-medium text-slate-900">{r.nombre}</p>
            <p className="text-sm text-slate-500">{r.categoria}</p>
          </div>
        </div>
      ),
    },
    { key: "precio", header: "Precio", align: "right" as const, render: (r: any) => <span className="font-medium text-slate-900">${r.precio.toFixed(2)}</span> },
    { key: "stock", header: "Stock", align: "right" as const, render: (r: any) => <span className="text-slate-600">{r.stock} uds</span> },
    { key: "estado", header: "Estado", render: (r: any) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
    {
      key: "acciones",
      header: "",
      align: "right" as const,
      render: () => (
        <div className="flex justify-end gap-2">
          <Button variant="ghost" className="cursor-pointer">Editar</Button>
          <Button variant="danger" className="cursor-pointer">Eliminar</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Productos"
        subtitle="Catálogo completo de SKUs con stock y precios"
        action={<Button variant="primary" className="cursor-pointer" onClick={() => router.push("/producto/create")}><Plus size={16} /> Nuevo producto</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} />
      </Card>
    </div>
  );
}
