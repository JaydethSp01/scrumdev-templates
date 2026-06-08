"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function PacientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pacientes" subtitle="Directorio de pacientes de la óptica." />
      <CrudTable
        title="Pacientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "edad", label: "Edad", type: "number" },
          { key: "telefono", label: "Teléfono" },
          { key: "ultima_visita", label: "Última visita" },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", edad: 34, telefono: "300 123 4567", ultima_visita: "2026-05-12" },
          { id: 2, nombre: "Ana Gómez", edad: 28, telefono: "301 765 4321", ultima_visita: "2026-05-20" },
          { id: 3, nombre: "Carlos Ruiz", edad: 45, telefono: "310 222 1133", ultima_visita: "2026-04-28" },
          { id: 4, nombre: "Laura Martínez", edad: 39, telefono: "320 555 9090", ultima_visita: "2026-06-01" },
        ]}
      />
    </div>
  );
}
