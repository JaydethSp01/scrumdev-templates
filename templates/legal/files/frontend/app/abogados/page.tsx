"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

const espTone = (e: string) =>
  e === "Civil" ? "info" : e === "Penal" ? "danger" : e === "Laboral" ? "warning" : "brand";

export default function AbogadosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Abogados" subtitle="Equipo jurídico del bufete y su carga de casos." />
      <CrudTable
        title="Abogados"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "especialidad", label: "Especialidad", render: (r: any) => <Badge tone={espTone(r.especialidad)}>{r.especialidad}</Badge> },
          { key: "casos_activos", label: "Casos activos", type: "number", render: (r: any) => <Badge tone="brand">{r.casos_activos}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Dra. Rodríguez", especialidad: "Civil", casos_activos: 12 },
          { id: 2, nombre: "Dr. Fernández", especialidad: "Penal", casos_activos: 9 },
          { id: 3, nombre: "Dra. Martínez", especialidad: "Laboral", casos_activos: 7 },
          { id: 4, nombre: "Dr. Gómez", especialidad: "Familia", casos_activos: 5 },
        ]}
      />
    </div>
  );
}
