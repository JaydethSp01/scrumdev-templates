"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Confirmada: "success", "En espera": "warning", Atendido: "info", Cancelada: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Citas" subtitle="Agenda de citas con su odontólogo, tratamiento y estado." />
      <CrudTable
        title="Citas"
        fields={[
          { key: "paciente", label: "Paciente" },
          { key: "odontologo", label: "Odontólogo" },
          { key: "tratamiento", label: "Tratamiento" },
          { key: "fecha", label: "Fecha / hora" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, paciente: "Juan Pérez", odontologo: "Dra. Rodríguez", tratamiento: "Limpieza dental", fecha: "08 jun 2026 · 09:00", estado: "Confirmada" },
          { id: 2, paciente: "Ana Gómez", odontologo: "Dr. Fernández", tratamiento: "Ortodoncia", fecha: "08 jun 2026 · 10:30", estado: "En espera" },
          { id: 3, paciente: "Carlos Ruiz", odontologo: "Dra. López", tratamiento: "Endodoncia", fecha: "08 jun 2026 · 12:00", estado: "Atendido" },
          { id: 4, paciente: "Laura Martínez", odontologo: "Dr. Gómez", tratamiento: "Blanqueamiento", fecha: "08 jun 2026 · 15:30", estado: "Confirmada" },
          { id: 5, paciente: "Pedro Sánchez", odontologo: "Dra. Torres", tratamiento: "Extracción", fecha: "09 jun 2026 · 08:15", estado: "Cancelada" },
        ]}
      />
    </div>
  );
}
