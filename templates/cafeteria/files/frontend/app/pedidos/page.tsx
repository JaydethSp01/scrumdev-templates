"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
const estadoTone = (e: string) =>
  e === "Entregado" ? "success" : e === "Listo" ? "info" : e === "Preparando" ? "brand" : "warning";
export default function PedidosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pedidos" subtitle="Comandas en curso, listas y entregadas." />
      <CrudTable
        title="Pedidos"
        fields={[
          { key: "mesa", label: "Mesa" },
          { key: "cliente", label: "Cliente" },
          { key: "total", label: "Total", type: "number", render: (r: any) => <span>${r.total.toLocaleString("es-CO")}</span> },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={estadoTone(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, mesa: "Mesa 4", cliente: "Laura Pérez", total: 20500, estado: "Preparando" },
          { id: 2, mesa: "Mesa 2", cliente: "Andrés Gómez", total: 19500, estado: "Listo" },
          { id: 3, mesa: "Para llevar", cliente: "Sofía Díaz", total: 15800, estado: "Pendiente" },
          { id: 4, mesa: "Mesa 7", cliente: "Camilo Ruiz", total: 22500, estado: "Entregado" },
        ]}
      />
    </div>
  );
}
