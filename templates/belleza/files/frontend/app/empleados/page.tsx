"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function EmpleadosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Empleados" subtitle="Equipo de estilistas, especialidad y comisión." />
      <CrudTable
        title="Empleados"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "especialidad", label: "Especialidad" },
          { key: "comision", label: "Comisión" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Activo" ? "success" : "warning"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Sofía Vargas", especialidad: "Color y tinte", comision: "20%", estado: "Activo" },
          { id: 2, nombre: "Mateo Ruiz", especialidad: "Barbería", comision: "18%", estado: "Activo" },
          { id: 3, nombre: "Valeria Soto", especialidad: "Manicure y uñas", comision: "15%", estado: "Activo" },
          { id: 4, nombre: "Andrés Gómez", especialidad: "Corte caballero", comision: "18%", estado: "Inactivo" },
        ]}
      />
    </div>
  );
}
