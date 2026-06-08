"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Disponible: "success", "En consulta": "info", Ausente: "warning" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Profesionales" subtitle="Equipo médico, sus especialidades y carga de pacientes." />
      <CrudTable
        title="Profesionales"
        fields={[
          { key: "nombre", label: "Profesional" },
          { key: "especialidad", label: "Especialidad" },
          { key: "email", label: "Email", type: "email" },
          { key: "pacientes", label: "Pacientes", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Dra. Rodríguez", especialidad: "Cardiología", email: "rodriguez@clinica.co", pacientes: 142, estado: "Disponible" },
          { id: 2, nombre: "Dr. Fernández", especialidad: "Dermatología", email: "fernandez@clinica.co", pacientes: 98, estado: "En consulta" },
          { id: 3, nombre: "Dra. López", especialidad: "Neurología", email: "lopez@clinica.co", pacientes: 76, estado: "Ausente" },
          { id: 4, nombre: "Dr. Gómez", especialidad: "Pediatría", email: "gomez@clinica.co", pacientes: 165, estado: "Disponible" },
          { id: 5, nombre: "Dra. Torres", especialidad: "Ginecología", email: "torres@clinica.co", pacientes: 121, estado: "En consulta" },
        ]}
      />
    </div>
  );
}
