"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Sembrado: "success", Preparación: "warning", "En descanso": "neutral", Cosechando: "brand" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Lotes" subtitle="Parcelas de la finca, su extensión y cultivo asignado." />
      <CrudTable
        title="Lotes"
        fields={[
          { key: "nombre", label: "Lote" },
          { key: "area_ha", label: "Área (ha)", type: "number" },
          { key: "cultivo", label: "Cultivo" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Lote La Esperanza", area_ha: 4.5, cultivo: "Café", estado: "Sembrado" },
          { id: 2, nombre: "Lote El Mirador", area_ha: 3.0, cultivo: "Plátano", estado: "Cosechando" },
          { id: 3, nombre: "Lote San José", area_ha: 2.2, cultivo: "Aguacate", estado: "Sembrado" },
          { id: 4, nombre: "Lote Buenavista", area_ha: 5.1, cultivo: "Cacao", estado: "Preparación" },
          { id: 5, nombre: "Lote La Cumbre", area_ha: 1.8, cultivo: "Maíz", estado: "En descanso" },
        ]}
      />
    </div>
  );
}
