"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import type { Tone } from "@/components/ui/Badge";

const estadoTone: Record<string, Tone> = {
  "En preparación": "warning",
  "En velación": "info",
  "Finalizado": "success",
};

export default function ServiciosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Servicios" subtitle="Registro de servicios funerarios con acompañamiento a cada familia." />
      <CrudTable
        title="Servicios"
        fields={[
          { key: "fallecido", label: "Fallecido" },
          { key: "tipo", label: "Tipo" },
          { key: "sala", label: "Sala" },
          { key: "responsable", label: "Responsable" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={estadoTone[r.estado] ?? "neutral"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, fallecido: "Sr. Roberto Díaz", tipo: "Velación", sala: "Sala Paz", responsable: "Familia Díaz", estado: "En velación" },
          { id: 2, fallecido: "Sra. Carmen Ríos", tipo: "Cremación", sala: "Sala Serenidad", responsable: "Familia Ríos", estado: "En preparación" },
          { id: 3, fallecido: "Sr. Jorge Mejía", tipo: "Velación", sala: "Sala Esperanza", responsable: "Familia Mejía", estado: "En velación" },
          { id: 4, fallecido: "Sra. Lucía Vargas", tipo: "Traslado", sala: "Sala Consuelo", responsable: "Familia Vargas", estado: "Finalizado" },
        ]}
      />
    </div>
  );
}
