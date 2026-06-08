"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

const areaTone = (a: string) =>
  a === "Civil" ? "info" : a === "Penal" ? "danger" : a === "Laboral" ? "warning" : "brand";
const estadoTone = (e: string) =>
  e === "Activo" ? "success" : e === "Cerrado" ? "neutral" : "warning";

export default function CasosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Casos" subtitle="Expedientes y procesos del bufete por área y estado." />
      <CrudTable
        title="Casos"
        fields={[
          { key: "numero", label: "N° de caso" },
          { key: "cliente", label: "Cliente" },
          { key: "area", label: "Área", render: (r: any) => <Badge tone={areaTone(r.area)}>{r.area}</Badge> },
          { key: "abogado", label: "Abogado" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={estadoTone(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, numero: "EXP-2026-014", cliente: "Juan Pérez", area: "Civil", abogado: "Dra. Rodríguez", estado: "Activo" },
          { id: 2, numero: "EXP-2026-021", cliente: "Comercial Andina SAS", area: "Penal", abogado: "Dr. Fernández", estado: "En espera" },
          { id: 3, numero: "EXP-2026-008", cliente: "María López", area: "Laboral", abogado: "Dra. Martínez", estado: "Activo" },
          { id: 4, numero: "EXP-2025-097", cliente: "Carlos Díaz", area: "Familia", abogado: "Dr. Gómez", estado: "Cerrado" },
        ]}
      />
    </div>
  );
}
