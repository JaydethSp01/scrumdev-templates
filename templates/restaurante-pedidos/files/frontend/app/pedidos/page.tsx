"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Servido: "success", "En cocina": "info", Pendiente: "warning", Cancelado: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pedidos" subtitle="Visualiza y gestiona los pedidos del servicio actual." />
      <CrudTable
        title="Pedidos"
        fields={[
          { key: "mesa", label: "Mesa" },
          { key: "cliente", label: "Cliente" },
          { key: "total", label: "Total", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, mesa: "Mesa 1", cliente: "Juan Pérez", total: 45500, estado: "Servido" },
          { id: 2, mesa: "Mesa 3", cliente: "María López", total: 78000, estado: "En cocina" },
          { id: 3, mesa: "Mesa 5", cliente: "Carlos García", total: 32200, estado: "Pendiente" },
          { id: 4, mesa: "Mesa 2", cliente: "Ana Torres", total: 56100, estado: "En cocina" },
          { id: 5, mesa: "Mesa 7", cliente: "Diego Ruiz", total: 14000, estado: "Cancelado" },
        ]}
      />
    </div>
  );
}
