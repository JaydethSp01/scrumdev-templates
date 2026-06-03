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
  { id: 1, producto: "Zapatilla Runner Pro", talla: "42", cantidad: 0, estado: "Agotado" },
  { id: 2, producto: "Camiseta Oversize Negra", talla: "L", cantidad: 6, estado: "Stock bajo" },
  { id: 3, producto: "Mochila Urban 24L", talla: "Única", cantidad: 4, estado: "Stock bajo" },
  { id: 4, producto: "Gorra Trucker Índigo", talla: "Única", cantidad: 87, estado: "En stock" },
  { id: 5, producto: "Pantalón Cargo Slim", talla: "M", cantidad: 132, estado: "En stock" },
  { id: 6, producto: "Sudadera Tech Fleece", talla: "XL", cantidad: 41, estado: "En stock" },
];

const tone = (e: string) => (e === "En stock" ? "success" : e === "Stock bajo" ? "warning" : "danger");

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
          <span className="font-medium text-slate-900">{r.producto}</span>
        </div>
      ),
    },
    { key: "talla", header: "Talla", render: (r: any) => <Badge tone="info">{r.talla}</Badge> },
    { key: "cantidad", header: "Cantidad", align: "right" as const, render: (r: any) => <span className="font-medium text-slate-900">{r.cantidad} uds</span> },
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
        title="Stock"
        subtitle="Existencias por producto y talla"
        action={<Button variant="primary" className="cursor-pointer" onClick={() => router.push("/stock/create")}><Plus size={16} /> Ajustar stock</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} />
      </Card>
    </div>
  );
}
