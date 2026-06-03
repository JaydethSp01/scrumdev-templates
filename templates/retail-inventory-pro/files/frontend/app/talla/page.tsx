"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const MOCK = [
  { id: 1, talla: "S", tipo: "Ropa", skus: 58, estado: "Activa" },
  { id: 2, talla: "M", tipo: "Ropa", skus: 72, estado: "Activa" },
  { id: 3, talla: "L", tipo: "Ropa", skus: 64, estado: "Activa" },
  { id: 4, talla: "XL", tipo: "Ropa", skus: 39, estado: "Activa" },
  { id: 5, talla: "42", tipo: "Calzado", skus: 21, estado: "Activa" },
  { id: 6, talla: "Única", tipo: "Accesorios", skus: 47, estado: "Inactiva" },
];

const tone = (e: string) => (e === "Activa" ? "success" : "neutral");

export default function Page() {
  const router = useRouter();
  const [rows] = useState(MOCK);

  const columns = [
    { key: "talla", header: "Talla", render: (r: any) => <Badge tone="brand">{r.talla}</Badge> },
    { key: "tipo", header: "Tipo", render: (r: any) => <span className="font-medium text-slate-900">{r.tipo}</span> },
    { key: "skus", header: "SKUs", align: "right" as const, render: (r: any) => <span className="text-slate-600">{r.skus}</span> },
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
        title="Tallas"
        subtitle="Curva de tallas disponible por tipo de producto"
        action={<Button variant="primary" className="cursor-pointer" onClick={() => router.push("/talla/create")}><Plus size={16} /> Nueva talla</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} />
      </Card>
    </div>
  );
}
