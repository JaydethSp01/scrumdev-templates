"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";

type Pedido = { id: number; mesa: string; cliente: string; estado: string; total: number };

const MOCK: Pedido[] = [
  { id: 1, mesa: "Mesa 1", cliente: "Juan Pérez", estado: "Servido", total: 45.5 },
  { id: 2, mesa: "Mesa 3", cliente: "María López", estado: "En cocina", total: 78.0 },
  { id: 3, mesa: "Mesa 5", cliente: "Carlos García", estado: "Pendiente", total: 32.2 },
  { id: 4, mesa: "Mesa 2", cliente: "Ana Torres", estado: "En cocina", total: 56.1 },
  { id: 5, mesa: "Mesa 7", cliente: "Diego Ruiz", estado: "Cancelado", total: 14.0 },
];

const tone = (e: string) =>
  e === "Servido" ? "success" : e === "En cocina" ? "info" : e === "Pendiente" ? "warning" : "danger";

export default function PedidosPage() {
  const router = useRouter();
  const [pedidos] = useState(MOCK);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pedidos"
        subtitle="Visualiza y gestiona los pedidos del servicio actual."
        action={
          <Button onClick={() => router.push("/pedidos/create")}>
            <Plus size={16} /> Nuevo pedido
          </Button>
        }
      />
      <Card className="!p-0">
        <DataTable<Pedido>
          rows={pedidos}
          columns={[
            { key: "mesa", header: "Mesa", render: (r) => (
              <div className="flex items-center gap-3">
                <Avatar name={r.mesa} />
                <span className="font-medium text-slate-900">{r.mesa}</span>
              </div>
            ) },
            { key: "cliente", header: "Cliente", render: (r) => <span className="text-slate-700">{r.cliente}</span> },
            { key: "estado", header: "Estado", render: (r) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
            { key: "total", header: "Total", align: "right", render: (r) => (
              <span className="font-semibold text-slate-900">${r.total.toFixed(2)}</span>
            ) },
            { key: "acciones", header: "", align: "right", render: () => (
              <div className="flex justify-end gap-2">
                <Button variant="ghost" className="cursor-pointer">Editar</Button>
                <Button variant="danger" className="cursor-pointer">Eliminar</Button>
              </div>
            ) },
          ]}
        />
      </Card>
    </div>
  );
}
