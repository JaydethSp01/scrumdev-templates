"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

const toneFor = (e: string) => (e === "Activo" ? "success" : e === "Descanso" ? "warning" : "neutral");

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Empleados" subtitle="Personal del autolavado, turnos y servicios atendidos." />
      <CrudTable
        title="Empleados"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "turno", label: "Turno" },
          { key: "servicios", label: "Servicios", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Andrés Mora", turno: "Mañana", servicios: 14, estado: "Activo" },
          { id: 2, nombre: "Felipe Díaz", turno: "Tarde", servicios: 9, estado: "Activo" },
          { id: 3, nombre: "Ruth Salas", turno: "Mañana", servicios: 11, estado: "Descanso" },
          { id: 4, nombre: "Diana Ríos", turno: "Noche", servicios: 6, estado: "Activo" },
          { id: 5, nombre: "Mauricio León", turno: "Tarde", servicios: 0, estado: "Inactivo" },
        ]}
      />
    </div>
  );
}
