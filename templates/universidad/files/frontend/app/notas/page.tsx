"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function NotasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Notas" subtitle="Registro de calificaciones por estudiante, materia y periodo académico." />
      <CrudTable title="Notas"
        fields={[
          { key: "estudiante", label: "Estudiante" },
          { key: "materia", label: "Materia" },
          { key: "nota", label: "Nota", type: "number", render: (r: any) => <Badge tone={Number(r.nota) >= 3 ? "success" : "warning"}>{r.nota}</Badge> },
          { key: "periodo", label: "Periodo" },
        ]}
        initial={[
          { id: 1, estudiante: "Juan Pérez", materia: "Cálculo I", nota: 4.2, periodo: "2026-1" },
          { id: 2, estudiante: "Camila Ríos", materia: "Programación Web", nota: 3.6, periodo: "2026-1" },
          { id: 3, estudiante: "Andrés Vargas", materia: "Bases de Datos", nota: 2.4, periodo: "2026-1" },
          { id: 4, estudiante: "Laura Mejía", materia: "Inglés III", nota: 4.8, periodo: "2026-1" },
        ]} />
    </div>
  );
}
