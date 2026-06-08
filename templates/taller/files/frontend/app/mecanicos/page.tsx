"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Mecánicos" subtitle="Equipo técnico del taller y su carga de trabajo." />
      <CrudTable
        title="Mecánicos"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "especialidad", label: "Especialidad" },
          { key: "ordenes_activas", label: "Órdenes activas", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Andrés Quintero", especialidad: "Motor", ordenes_activas: 4 },
          { id: 2, nombre: "Felipe Romero", especialidad: "Frenos y suspensión", ordenes_activas: 3 },
          { id: 3, nombre: "Ruth Castaño", especialidad: "Electricidad automotriz", ordenes_activas: 2 },
          { id: 4, nombre: "Mateo Vargas", especialidad: "Llantas y alineación", ordenes_activas: 5 },
        ]}
      />
    </div>
  );
}
