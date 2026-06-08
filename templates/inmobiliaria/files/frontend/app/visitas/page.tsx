"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Confirmada: "success", Pendiente: "warning", Cancelada: "danger", Realizada: "info" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Visitas" subtitle="Agenda de visitas a inmuebles con su estado." />
      <CrudTable
        title="Visitas"
        fields={[
          { key: "propiedad", label: "Propiedad" },
          { key: "cliente", label: "Cliente" },
          { key: "agente", label: "Agente" },
          { key: "fecha", label: "Fecha / hora" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, propiedad: "Apto 302 · Laureles", cliente: "Juan Pérez", agente: "Camila Ríos", fecha: "08 jun 2026 · 10:00", estado: "Confirmada" },
          { id: 2, propiedad: "Casa Campestre · Llanogrande", cliente: "Ana Gómez", agente: "Diego Mora", fecha: "08 jun 2026 · 11:30", estado: "Pendiente" },
          { id: 3, propiedad: "Local 14 · El Poblado", cliente: "Carlos Ruiz", agente: "Valentina Soto", fecha: "08 jun 2026 · 14:00", estado: "Confirmada" },
          { id: 4, propiedad: "Lote 7 · Rionegro", cliente: "Laura Martínez", agente: "Camila Ríos", fecha: "09 jun 2026 · 16:30", estado: "Cancelada" },
          { id: 5, propiedad: "Apto 1201 · Envigado", cliente: "Pedro Sánchez", agente: "Diego Mora", fecha: "09 jun 2026 · 09:15", estado: "Realizada" },
        ]}
      />
    </div>
  );
}
