"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Activo: "success", "En crecimiento": "info", Cosechado: "brand", Descansando: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Cultivos" subtitle="Cultivos sembrados en la finca, su lote y estado fenológico." />
      <CrudTable
        title="Cultivos"
        fields={[
          { key: "nombre", label: "Cultivo" },
          { key: "lote", label: "Lote" },
          { key: "area_ha", label: "Área (ha)", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Café", lote: "Lote La Esperanza", area_ha: 4.5, estado: "En crecimiento" },
          { id: 2, nombre: "Plátano", lote: "Lote El Mirador", area_ha: 3.0, estado: "Activo" },
          { id: 3, nombre: "Aguacate", lote: "Lote San José", area_ha: 2.2, estado: "Cosechado" },
          { id: 4, nombre: "Cacao", lote: "Lote Buenavista", area_ha: 5.1, estado: "En crecimiento" },
          { id: 5, nombre: "Maíz", lote: "Lote La Cumbre", area_ha: 1.8, estado: "Descansando" },
        ]}
      />
    </div>
  );
}
