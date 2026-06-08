"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function DocentesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Docentes" subtitle="Equipo de maestras y maestros por nivel." />
      <CrudTable title="Docentes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "nivel", label: "Nivel" },
          { key: "ninos", label: "Niños a cargo", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Activo" ? "success" : "warning"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Profe Camila Reyes", nivel: "Párvulos", ninos: 12, estado: "Activo" },
          { id: 2, nombre: "Profe Daniela Pérez", nivel: "Pre-jardín", ninos: 15, estado: "Activo" },
          { id: 3, nombre: "Profe Marcela Ruiz", nivel: "Jardín", ninos: 14, estado: "Activo" },
          { id: 4, nombre: "Profe Andrés Soto", nivel: "Transición", ninos: 10, estado: "Inactivo" },
        ]} />
    </div>
  );
}
