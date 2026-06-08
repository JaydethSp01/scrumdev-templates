"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Activa: "success", Inactiva: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Especialidades" subtitle="Áreas médicas disponibles y su volumen de consulta." />
      <CrudTable
        title="Especialidades"
        fields={[
          { key: "nombre", label: "Especialidad" },
          { key: "profesionales", label: "Profesionales", type: "number" },
          { key: "citasMes", label: "Citas / mes", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Cardiología", profesionales: 4, citasMes: 312, estado: "Activa" },
          { id: 2, nombre: "Pediatría", profesionales: 6, citasMes: 248, estado: "Activa" },
          { id: 3, nombre: "Dermatología", profesionales: 3, citasMes: 187, estado: "Activa" },
          { id: 4, nombre: "Neurología", profesionales: 2, citasMes: 96, estado: "Activa" },
          { id: 5, nombre: "Ginecología", profesionales: 3, citasMes: 154, estado: "Inactiva" },
        ]}
      />
    </div>
  );
}
