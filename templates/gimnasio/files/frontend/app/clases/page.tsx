"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function ClasesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clases" subtitle="Programación de clases grupales, entrenadores y cupos." />
      <CrudTable title="Clases"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "entrenador", label: "Entrenador" },
          { key: "horario", label: "Horario" },
          { key: "cupo", label: "Cupo", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Spinning Matutino", entrenador: "Laura Méndez", horario: "Lun-Vie 6:00 am", cupo: 20 },
          { id: 2, nombre: "Crossfit WOD", entrenador: "Carlos Ríos", horario: "Lun-Vie 9:00 am", cupo: 15 },
          { id: 3, nombre: "Yoga Flow", entrenador: "Ana Salas", horario: "Mar y Jue 5:00 pm", cupo: 25 },
          { id: 4, nombre: "Funcional", entrenador: "Diego Torres", horario: "Sáb 8:00 am", cupo: 18 },
        ]} />
    </div>
  );
}
