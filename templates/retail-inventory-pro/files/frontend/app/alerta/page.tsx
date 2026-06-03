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
  { id: 1, producto: "Zapatilla Runner Pro", talla: "42", stock: 0, umbral: 10, estado: "Agotado" },
  { id: 2, producto: "Mochila Urban 24L", talla: "Única", stock: 4, umbral: 8, estado: "Crítico" },
  { id: 3, producto: "Camiseta Oversize Negra", talla: "L", stock: 6, umbral: 12, estado: "Stock bajo" },
  { id: 4, producto: "Chaqueta de Cuero", talla: "M", stock: 2, umbral: 6, estado: "Crítico" },
  { id: 5, producto: "Vestido de Verano", talla: "S", stock: 9, umbral: 10, estado: "Stock bajo" },
];

const tone = (e: string) => (e === "Agotado" || e === "Crítico" ? "danger" : "warning");

export default function Page() {
  const router = useRouter();
  const [rows] = useState(MOCK);

  const columns = [
    {
      key: "producto",
      header: "Producto",
      render: (r: any) => (
        <div className="flex items-center gap-3">
          <Avatar name={r.producto} />
          <div>
            <p className="font-medium text-slate-900">{r.producto}</p>
            <p className="text-sm text-slate-500">Talla {r.talla}</p>
          </div>
        </div>
      ),
    },
    { key: "stock", header: "Stock actual", align: "right" as const, render: (r: any) => <span className="font-medium text-slate-900">{r.stock} uds</span> },
    { key: "umbral", header: "Umbral", align: "right" as const, render: (r: any) => <span className="text-slate-500">{r.umbral} uds</span> },
    { key: "estado", header: "Estado", render: (r: any) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
    {
      key: "acciones",
      header: "",
      align: "right" as const,
      render: () => (
        <div className="flex justify-end gap-2">
          <Button variant="ghost" className="cursor-pointer">Reponer</Button>
          <Button variant="danger" className="cursor-pointer">Descartar</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Alertas de stock"
        subtitle="Productos que cruzaron su umbral mínimo de reposición"
        action={<Button variant="primary" className="cursor-pointer" onClick={() => router.push("/alerta/create")}><Plus size={16} /> Nueva alerta</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} />
      </Card>
    </div>
  );
}
