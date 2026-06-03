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
  { id: 1, nombre: "Calzado", skus: 84, valor: 41200, estado: "Activa" },
  { id: 2, nombre: "Ropa", skus: 126, valor: 38900, estado: "Activa" },
  { id: 3, nombre: "Accesorios", skus: 71, valor: 18400, estado: "Activa" },
  { id: 4, nombre: "Deportes", skus: 48, valor: 22700, estado: "Activa" },
  { id: 5, nombre: "Outlet", skus: 13, valor: 3100, estado: "Inactiva" },
];

const tone = (e: string) => (e === "Activa" ? "success" : "neutral");

export default function Page() {
  const router = useRouter();
  const [rows] = useState(MOCK);

  const columns = [
    {
      key: "nombre",
      header: "Categoría",
      render: (r: any) => (
        <div className="flex items-center gap-3">
          <Avatar name={r.nombre} />
          <span className="font-medium text-slate-900">{r.nombre}</span>
        </div>
      ),
    },
    { key: "skus", header: "SKUs", align: "right" as const, render: (r: any) => <span className="text-slate-600">{r.skus}</span> },
    { key: "valor", header: "Valor inventario", align: "right" as const, render: (r: any) => <span className="font-medium text-slate-900">${r.valor.toLocaleString()}</span> },
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
        title="Categorías"
        subtitle="Organiza el catálogo por líneas de producto"
        action={<Button variant="primary" className="cursor-pointer" onClick={() => router.push("/categor-a/create")}><Plus size={16} /> Nueva categoría</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} />
      </Card>
    </div>
  );
}
