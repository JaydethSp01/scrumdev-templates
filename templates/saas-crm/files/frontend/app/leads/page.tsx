"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Calificado: "success", Contactado: "info", Nuevo: "warning", Perdido: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Leads" subtitle="Prospectos en la parte alta del embudo." />
      <CrudTable
        title="Leads"
        fields={[
          { key: "nombre", label: "Lead" },
          { key: "email", label: "Email", type: "email" },
          { key: "empresa", label: "Empresa" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", email: "juan@innovalabs.com", empresa: "Innova Labs", estado: "Nuevo" },
          { id: 2, nombre: "Ana Gómez", email: "ana@databridge.io", empresa: "DataBridge", estado: "Contactado" },
          { id: 3, nombre: "Luis Martínez", email: "luis@cloudly.com", empresa: "Cloudly", estado: "Calificado" },
          { id: 4, nombre: "María López", email: "maria@nextwave.co", empresa: "NextWave", estado: "Calificado" },
          { id: 5, nombre: "Pedro Suárez", email: "pedro@brightco.com", empresa: "BrightCo", estado: "Contactado" },
          { id: 6, nombre: "Sofía Vargas", email: "sofia@orbit.dev", empresa: "Orbit", estado: "Perdido" },
        ]}
      />
    </div>
  );
}
