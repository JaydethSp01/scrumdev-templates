"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import type { Tone } from "@/components/ui/Badge";
const estadoTone: Record<string, Tone> = {
  "Agendado": "info",
  "En curso": "warning",
  "Listo": "success",
};
export default function ExamenesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Exámenes" subtitle="Exámenes visuales y optométricos realizados." />
      <CrudTable
        title="Exámenes"
        fields={[
          { key: "paciente", label: "Paciente" },
          { key: "optometra", label: "Optómetra" },
          { key: "fecha", label: "Fecha" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={estadoTone[r.estado] ?? "neutral"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, paciente: "Juan Pérez", optometra: "Dra. Rodríguez", fecha: "2026-06-07", estado: "Listo" },
          { id: 2, paciente: "Ana Gómez", optometra: "Dr. Fernández", fecha: "2026-06-07", estado: "En curso" },
          { id: 3, paciente: "Carlos Ruiz", optometra: "Dra. López", fecha: "2026-06-08", estado: "Agendado" },
          { id: 4, paciente: "Laura Martínez", optometra: "Dr. Gómez", fecha: "2026-06-08", estado: "Agendado" },
        ]}
      />
    </div>
  );
}
