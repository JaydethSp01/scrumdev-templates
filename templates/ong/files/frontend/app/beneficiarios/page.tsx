"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function BeneficiariosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Beneficiarios" subtitle="Personas y familias atendidas por los programas." />
      <CrudTable title="Beneficiarios"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "programa", label: "Programa" },
          { key: "ubicacion", label: "Ubicación" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Activo" ? "success" : "warning"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Familia Quintero", programa: "Alimentación", ubicacion: "Comuna 13, Medellín", estado: "Activo" },
          { id: 2, nombre: "Sofía Murillo", programa: "Educación", ubicacion: "Soacha, Cundinamarca", estado: "Activo" },
          { id: 3, nombre: "Don Ernesto Pino", programa: "Salud", ubicacion: "Cali, Valle", estado: "Inactivo" },
          { id: 4, nombre: "Familia Cuesta", programa: "Vivienda", ubicacion: "Quibdó, Chocó", estado: "Activo" },
        ]} />
    </div>
  );
}
