"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function MatriculasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Matrículas" subtitle="Inscripción de estudiantes por periodo, carga académica y estado de pago." />
      <CrudTable title="Matrículas"
        fields={[
          { key: "estudiante", label: "Estudiante" },
          { key: "periodo", label: "Periodo" },
          { key: "materias", label: "Materias", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Pagada" ? "success" : r.estado === "Pendiente" ? "warning" : "info"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, estudiante: "Juan Pérez", periodo: "2026-1", materias: 5, estado: "Pagada" },
          { id: 2, estudiante: "Camila Ríos", periodo: "2026-1", materias: 6, estado: "Pendiente" },
          { id: 3, estudiante: "Andrés Vargas", periodo: "2026-1", materias: 4, estado: "Pagada" },
          { id: 4, estudiante: "Laura Mejía", periodo: "2026-1", materias: 3, estado: "En revisión" },
        ]} />
    </div>
  );
}
