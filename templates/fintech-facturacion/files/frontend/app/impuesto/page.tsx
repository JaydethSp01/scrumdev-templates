"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Activo: "success", Inactivo: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Impuestos" subtitle="Configura las tasas aplicadas a tus facturas y su recaudo." />
      <CrudTable
        title="Impuestos"
        fields={[
          { key: "descripcion", label: "Descripción" },
          { key: "tasa", label: "Tasa" },
          { key: "recaudado", label: "Recaudado", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, descripcion: "IVA general", tasa: "19%", recaudado: 38400000, estado: "Activo" },
          { id: 2, descripcion: "IVA reducido", tasa: "5%", recaudado: 6200000, estado: "Activo" },
          { id: 3, descripcion: "Retención en la fuente", tasa: "2.5%", recaudado: 4800000, estado: "Activo" },
          { id: 4, descripcion: "ICA municipal", tasa: "0.7%", recaudado: 1350000, estado: "Activo" },
          { id: 5, descripcion: "Impuesto al consumo", tasa: "8%", recaudado: 0, estado: "Inactivo" },
        ]}
      />
    </div>
  );
}
