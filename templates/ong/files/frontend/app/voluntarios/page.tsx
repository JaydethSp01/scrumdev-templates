"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function VoluntariosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Voluntarios" subtitle="Equipo voluntario, áreas de apoyo y horas aportadas." />
      <CrudTable title="Voluntarios"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "area", label: "Área" },
          { key: "horas", label: "Horas", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Activo" ? "success" : "warning"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Mariana Cruz", area: "Educación", horas: 120, estado: "Activo" },
          { id: 2, nombre: "Felipe Torres", area: "Logística", horas: 80, estado: "Activo" },
          { id: 3, nombre: "Daniela Ríos", area: "Salud", horas: 45, estado: "Inactivo" },
          { id: 4, nombre: "Jorge Patiño", area: "Alimentación", horas: 95, estado: "Activo" },
        ]} />
    </div>
  );
}
