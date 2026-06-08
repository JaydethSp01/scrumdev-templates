"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function EmpleadosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Empleados" subtitle="Especialistas del spa, su especialidad y citas asignadas." />
      <CrudTable
        title="Empleados"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "especialidad", label: "Especialidad" },
          { key: "citas", label: "Citas", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Activo" ? "success" : "neutral"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Sara Méndez", especialidad: "Masajes", citas: 124, estado: "Activo" },
          { id: 2, nombre: "Daniela Ruiz", especialidad: "Faciales", citas: 98, estado: "Activo" },
          { id: 3, nombre: "Laura Vega", especialidad: "Manicure", citas: 76, estado: "Activo" },
          { id: 4, nombre: "Paula Herrera", especialidad: "Depilación", citas: 61, estado: "Inactivo" },
          { id: 5, nombre: "Natalia Gómez", especialidad: "Masajes", citas: 88, estado: "Activo" },
        ]}
      />
    </div>
  );
}
