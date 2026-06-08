"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { "Al día": "success", "Por vencer": "warning", Vencida: "danger", "En revisión": "info" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Obligaciones" subtitle="Obligaciones tributarias y sus fechas de vencimiento." />
      <CrudTable
        title="Obligaciones"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "tipo", label: "Tipo" },
          { key: "vencimiento", label: "Vencimiento" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, cliente: "Comercial Andina S.A.S.", tipo: "IVA", vencimiento: "2026-06-18", estado: "Por vencer" },
          { id: 2, cliente: "Inversiones Riofrío Ltda.", tipo: "Retención", vencimiento: "2026-06-12", estado: "Vencida" },
          { id: 3, cliente: "Distribuidora El Roble", tipo: "Renta", vencimiento: "2026-06-30", estado: "Al día" },
          { id: 4, cliente: "Servicios Pacífico S.A.S.", tipo: "Nómina", vencimiento: "2026-06-20", estado: "Por vencer" },
          { id: 5, cliente: "Carlos Méndez", tipo: "Renta", vencimiento: "2026-08-15", estado: "En revisión" },
        ]}
      />
    </div>
  );
}
