"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
const estadoTone = (e: string) =>
  e === "Libre" ? "success" : e === "Ocupada" ? "danger" : e === "Reservada" ? "warning" : "neutral";
export default function MesasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Mesas" subtitle="Disposición y disponibilidad de mesas del salón." />
      <CrudTable
        title="Mesas"
        fields={[
          { key: "numero", label: "Número" },
          { key: "capacidad", label: "Capacidad", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={estadoTone(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, numero: "Mesa 1", capacidad: 2, estado: "Libre" },
          { id: 2, numero: "Mesa 2", capacidad: 4, estado: "Ocupada" },
          { id: 3, numero: "Mesa 3", capacidad: 4, estado: "Reservada" },
          { id: 4, numero: "Mesa 4", capacidad: 6, estado: "Ocupada" },
        ]}
      />
    </div>
  );
}
