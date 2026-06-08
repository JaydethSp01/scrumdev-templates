"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Confirmada: "success", Pendiente: "warning", Cancelada: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Citas" subtitle="Agenda de consultas con su estado y profesional asignado." />
      <CrudTable
        title="Citas"
        fields={[
          { key: "paciente", label: "Paciente" },
          { key: "profesional", label: "Profesional" },
          { key: "especialidad", label: "Especialidad" },
          { key: "fecha", label: "Fecha / hora" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, paciente: "Juan Pérez", profesional: "Dra. Rodríguez", especialidad: "Cardiología", fecha: "03 jun 2026 · 09:00", estado: "Confirmada" },
          { id: 2, paciente: "Ana Gómez", profesional: "Dr. Fernández", especialidad: "Dermatología", fecha: "03 jun 2026 · 10:30", estado: "Pendiente" },
          { id: 3, paciente: "Carlos Ruiz", profesional: "Dra. López", especialidad: "Neurología", fecha: "03 jun 2026 · 12:00", estado: "Cancelada" },
          { id: 4, paciente: "Laura Martínez", profesional: "Dr. Gómez", especialidad: "Pediatría", fecha: "03 jun 2026 · 15:30", estado: "Confirmada" },
          { id: 5, paciente: "Pedro Sánchez", profesional: "Dra. Torres", especialidad: "Ginecología", fecha: "04 jun 2026 · 08:15", estado: "Pendiente" },
        ]}
      />
    </div>
  );
}
