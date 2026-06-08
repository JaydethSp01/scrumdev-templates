"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function EstudiantesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Estudiantes" subtitle="Directorio de estudiantes, programa académico y estado de matrícula." />
      <CrudTable title="Estudiantes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "programa", label: "Programa" },
          { key: "semestre", label: "Semestre", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Activo" ? "success" : r.estado === "Egresado" ? "info" : "warning"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", programa: "Ingeniería de Sistemas", semestre: 5, estado: "Activo" },
          { id: 2, nombre: "Camila Ríos", programa: "Medicina", semestre: 8, estado: "Activo" },
          { id: 3, nombre: "Andrés Vargas", programa: "Administración", semestre: 10, estado: "Egresado" },
          { id: 4, nombre: "Laura Mejía", programa: "Derecho", semestre: 2, estado: "Aplazado" },
        ]} />
    </div>
  );
}
