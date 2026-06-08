"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import type { Tone } from "@/components/ui/Badge";

const ESTADO_TONE: Record<string, Tone> = {
  Recibida: "info",
  "En proceso": "warning",
  Lista: "brand",
  Entregada: "success",
};
const toneFor = (e: string): Tone => ESTADO_TONE[e] ?? "neutral";

export default function OrdenesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Órdenes" subtitle="Gestiona las órdenes de lavandería y su estado." />
      <CrudTable
        title="Órdenes"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "servicio", label: "Servicio" },
          { key: "prendas", label: "Prendas", type: "number" },
          { key: "total", label: "Total", type: "number", render: (r: any) => `$${Number(r.total).toLocaleString("es-CO")}` },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, cliente: "María López", servicio: "Lavado", prendas: 8, total: 24000, estado: "Recibida" },
          { id: 2, cliente: "Carlos Ruiz", servicio: "Planchado", prendas: 5, total: 15000, estado: "En proceso" },
          { id: 3, cliente: "Ana Gómez", servicio: "Lavado en seco", prendas: 3, total: 36000, estado: "Lista" },
          { id: 4, cliente: "Pedro Sánchez", servicio: "Tintorería", prendas: 2, total: 28000, estado: "Entregada" },
          { id: 5, cliente: "Laura Martínez", servicio: "Lavado", prendas: 12, total: 36000, estado: "Recibida" },
        ]}
      />
    </div>
  );
}
