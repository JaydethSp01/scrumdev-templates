"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Disponible: "success", Ocupada: "info", Reservada: "warning" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Mesas" subtitle="Vista general del salón: capacidad, mesero y estado en tiempo real." />
      <CrudTable
        title="Mesas"
        fields={[
          { key: "numero", label: "Mesa" },
          { key: "capacidad", label: "Capacidad", type: "number" },
          { key: "mesero", label: "Mesero" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, numero: "Mesa 1", capacidad: 4, mesero: "Lucía Ramos", estado: "Ocupada" },
          { id: 2, numero: "Mesa 2", capacidad: 2, mesero: "Pedro Salas", estado: "Disponible" },
          { id: 3, numero: "Mesa 3", capacidad: 6, mesero: "Lucía Ramos", estado: "Reservada" },
          { id: 4, numero: "Mesa 4", capacidad: 4, mesero: "Marta Díaz", estado: "Disponible" },
          { id: 5, numero: "Mesa 5", capacidad: 8, mesero: "Pedro Salas", estado: "Ocupada" },
        ]}
      />
    </div>
  );
}
