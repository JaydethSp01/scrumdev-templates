"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Ganado: "success", "Negociación": "info", Nuevo: "warning", Perdido: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Oportunidades" subtitle="Deals abiertos en tu pipeline de ventas." />
      <CrudTable
        title="Oportunidades"
        fields={[
          { key: "nombre", label: "Oportunidad" },
          { key: "contacto", label: "Contacto" },
          { key: "valor", label: "Valor", type: "number" },
          { key: "etapa", label: "Etapa", render: (r: any) => <Badge tone={toneFor(r.etapa)}>{r.etapa}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Licencias Enterprise", contacto: "Carlos Ruiz", valor: 18500000, etapa: "Ganado" },
          { id: 2, nombre: "Migración a la nube", contacto: "Elena Ríos", valor: 24000000, etapa: "Negociación" },
          { id: 3, nombre: "Plan Starter anual", contacto: "Juan Pérez", valor: 6800000, etapa: "Nuevo" },
          { id: 4, nombre: "Integración API", contacto: "Ana Gómez", valor: 15200000, etapa: "Negociación" },
          { id: 5, nombre: "Soporte Premium", contacto: "Luis Martínez", valor: 4300000, etapa: "Perdido" },
          { id: 6, nombre: "Renovación SaaS", contacto: "Sofía Vargas", valor: 12700000, etapa: "Ganado" },
        ]}
      />
    </div>
  );
}
