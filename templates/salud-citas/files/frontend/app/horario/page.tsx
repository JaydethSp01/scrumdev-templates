"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Activo: "success", Bloqueado: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Horarios" subtitle="Disponibilidad semanal de cada profesional." />
      <CrudTable
        title="Horarios"
        fields={[
          { key: "profesional", label: "Profesional" },
          { key: "dia", label: "Día" },
          { key: "franja", label: "Franja" },
          { key: "consultorio", label: "Consultorio" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, profesional: "Dra. Rodríguez", dia: "Lunes", franja: "08:00 - 13:00", consultorio: "C-101", estado: "Activo" },
          { id: 2, profesional: "Dr. Fernández", dia: "Lunes", franja: "14:00 - 18:00", consultorio: "C-203", estado: "Activo" },
          { id: 3, profesional: "Dra. López", dia: "Martes", franja: "09:00 - 12:00", consultorio: "C-105", estado: "Activo" },
          { id: 4, profesional: "Dr. Gómez", dia: "Miércoles", franja: "08:00 - 15:00", consultorio: "C-102", estado: "Bloqueado" },
          { id: 5, profesional: "Dra. Torres", dia: "Jueves", franja: "10:00 - 17:00", consultorio: "C-210", estado: "Activo" },
          { id: 6, profesional: "Dra. Rodríguez", dia: "Viernes", franja: "08:00 - 12:00", consultorio: "C-101", estado: "Activo" },
        ]}
      />
    </div>
  );
}
