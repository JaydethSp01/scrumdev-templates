"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function AsistenciaPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Asistencia" subtitle="Registro diario de asistencia de los niños." />
      <CrudTable title="Asistencia"
        fields={[
          { key: "nino", label: "Niño" },
          { key: "fecha", label: "Fecha" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Presente" ? "success" : r.estado === "Tarde" ? "warning" : "danger"}>{r.estado}</Badge> },
          { key: "observacion", label: "Observación" },
        ]}
        initial={[
          { id: 1, nino: "Mariana Torres", fecha: "2026-06-08", estado: "Presente", observacion: "Llegó puntual" },
          { id: 2, nino: "Samuel Rojas", fecha: "2026-06-08", estado: "Tarde", observacion: "Llegó 8:30 am" },
          { id: 3, nino: "Valentina Díaz", fecha: "2026-06-08", estado: "Ausente", observacion: "Cita médica" },
          { id: 4, nino: "Mateo Gómez", fecha: "2026-06-08", estado: "Presente", observacion: "" },
        ]} />
    </div>
  );
}
