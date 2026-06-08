"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

const estadoTone = (e: string) =>
  e === "Confirmada" ? "success" : e === "Aplazada" ? "danger" : e === "Realizada" ? "neutral" : "warning";

export default function AudienciasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Audiencias" subtitle="Calendario de audiencias por caso y juzgado." />
      <CrudTable
        title="Audiencias"
        fields={[
          { key: "caso", label: "Caso" },
          { key: "juzgado", label: "Juzgado" },
          { key: "fecha", label: "Fecha", type: "date" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={estadoTone(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, caso: "Pérez vs. Aseguros SA", juzgado: "Juzgado 3 Civil", fecha: "2026-06-10", estado: "Programada" },
          { id: 2, caso: "Estado vs. Gómez", juzgado: "Juzgado Penal 1", fecha: "2026-06-11", estado: "Confirmada" },
          { id: 3, caso: "Despido López", juzgado: "Juzgado Laboral 2", fecha: "2026-06-12", estado: "Aplazada" },
          { id: 4, caso: "Custodia Díaz", juzgado: "Juzgado de Familia", fecha: "2026-06-05", estado: "Realizada" },
        ]}
      />
    </div>
  );
}
