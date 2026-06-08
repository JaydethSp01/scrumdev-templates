"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Activo: "success", Vacaciones: "info", Inactivo: "neutral", Incapacidad: "warning" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Trabajadores" subtitle="Equipo de campo, labor asignada y valor del jornal." />
      <CrudTable
        title="Trabajadores"
        fields={[
          { key: "nombre", label: "Trabajador" },
          { key: "labor", label: "Labor" },
          { key: "jornal", label: "Jornal", type: "number", render: (r: any) => <>${Number(r.jornal).toLocaleString("es-CO")}</> },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Pedro Quintero", labor: "Siembra", jornal: 55000, estado: "Activo" },
          { id: 2, nombre: "María Cifuentes", labor: "Fumigación", jornal: 60000, estado: "Activo" },
          { id: 3, nombre: "José Hurtado", labor: "Cosecha", jornal: 58000, estado: "Vacaciones" },
          { id: 4, nombre: "Ana Restrepo", labor: "Riego", jornal: 52000, estado: "Activo" },
          { id: 5, nombre: "Luis Marín", labor: "Mantenimiento", jornal: 50000, estado: "Incapacidad" },
        ]}
      />
    </div>
  );
}
