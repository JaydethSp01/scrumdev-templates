"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import type { Tone } from "@/components/ui/Badge";

const ESTADO_TONE: Record<string, Tone> = {
  Programada: "info",
  "En ruta": "warning",
  Entregada: "success",
  Cancelada: "danger",
};
const toneFor = (e: string): Tone => ESTADO_TONE[e] ?? "neutral";

export default function EntregasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Entregas" subtitle="Seguimiento de entregas por cliente y orden." />
      <CrudTable
        title="Entregas"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "orden", label: "Orden" },
          { key: "fecha", label: "Fecha" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, cliente: "María López", orden: "ORD-001", fecha: "08 jun 2026", estado: "Programada" },
          { id: 2, cliente: "Carlos Ruiz", orden: "ORD-002", fecha: "08 jun 2026", estado: "En ruta" },
          { id: 3, cliente: "Ana Gómez", orden: "ORD-003", fecha: "07 jun 2026", estado: "Entregada" },
          { id: 4, cliente: "Pedro Sánchez", orden: "ORD-004", fecha: "07 jun 2026", estado: "Cancelada" },
          { id: 5, cliente: "Laura Martínez", orden: "ORD-005", fecha: "09 jun 2026", estado: "Programada" },
        ]}
      />
    </div>
  );
}
