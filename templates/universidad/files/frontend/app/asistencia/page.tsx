"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function AsistenciaPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Asistencia" subtitle="Control de asistencia a clases por estudiante, materia y fecha." />
      <CrudTable title="Asistencia"
        fields={[
          { key: "estudiante", label: "Estudiante" },
          { key: "materia", label: "Materia" },
          { key: "fecha", label: "Fecha" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Presente" ? "success" : r.estado === "Tarde" ? "warning" : "danger"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, estudiante: "Juan Pérez", materia: "Cálculo I", fecha: "2026-06-01", estado: "Presente" },
          { id: 2, estudiante: "Camila Ríos", materia: "Programación Web", fecha: "2026-06-01", estado: "Tarde" },
          { id: 3, estudiante: "Andrés Vargas", materia: "Bases de Datos", fecha: "2026-06-02", estado: "Ausente" },
          { id: 4, estudiante: "Laura Mejía", materia: "Inglés III", fecha: "2026-06-02", estado: "Presente" },
        ]} />
    </div>
  );
}
