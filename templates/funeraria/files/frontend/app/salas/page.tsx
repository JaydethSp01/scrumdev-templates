"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import type { Tone } from "@/components/ui/Badge";

const estadoTone: Record<string, Tone> = {
  "Disponible": "success",
  "Ocupada": "info",
  "En aseo": "warning",
};

export default function SalasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Salas" subtitle="Salas de velación: capacidad y disponibilidad para cada familia." />
      <CrudTable
        title="Salas"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "capacidad", label: "Capacidad", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={estadoTone[r.estado] ?? "neutral"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Sala Paz", capacidad: 80, estado: "Ocupada" },
          { id: 2, nombre: "Sala Serenidad", capacidad: 60, estado: "Ocupada" },
          { id: 3, nombre: "Sala Esperanza", capacidad: 100, estado: "Ocupada" },
          { id: 4, nombre: "Sala Consuelo", capacidad: 50, estado: "Disponible" },
          { id: 5, nombre: "Sala Recogimiento", capacidad: 40, estado: "En aseo" },
        ]}
      />
    </div>
  );
}
