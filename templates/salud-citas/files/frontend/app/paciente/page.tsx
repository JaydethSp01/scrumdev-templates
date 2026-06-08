"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function PacientePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pacientes" subtitle="Gestiona los pacientes de la clínica." />
      <CrudTable
        title="Pacientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "edad", label: "Edad", type: "number" },
          { key: "telefono", label: "Teléfono" },
          { key: "eps", label: "EPS" },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", edad: 34, telefono: "300 123 4567", eps: "Sura" },
          { id: 2, nombre: "Ana Gómez", edad: 28, telefono: "301 765 4321", eps: "Sanitas" },
          { id: 3, nombre: "Carlos Ruiz", edad: 45, telefono: "310 222 1133", eps: "Nueva EPS" },
          { id: 4, nombre: "Laura Martínez", edad: 39, telefono: "320 555 9090", eps: "Compensar" },
        ]}
      />
    </div>
  );
}
