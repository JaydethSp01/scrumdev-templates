"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Venta: "success", Bodega: "info", Autoconsumo: "neutral", Exportación: "brand" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Cosechas" subtitle="Registro de cosechas, cantidades recolectadas y su destino." />
      <CrudTable
        title="Cosechas"
        fields={[
          { key: "cultivo", label: "Cultivo" },
          { key: "fecha", label: "Fecha" },
          { key: "cantidad_kg", label: "Cantidad (kg)", type: "number" },
          { key: "destino", label: "Destino", render: (r: any) => <Badge tone={toneFor(r.destino)}>{r.destino}</Badge> },
        ]}
        initial={[
          { id: 1, cultivo: "Café", fecha: "02 jun 2026", cantidad_kg: 1850, destino: "Venta" },
          { id: 2, cultivo: "Plátano", fecha: "03 jun 2026", cantidad_kg: 2400, destino: "Bodega" },
          { id: 3, cultivo: "Aguacate", fecha: "04 jun 2026", cantidad_kg: 980, destino: "Exportación" },
          { id: 4, cultivo: "Cacao", fecha: "05 jun 2026", cantidad_kg: 540, destino: "Venta" },
          { id: 5, cultivo: "Maíz", fecha: "06 jun 2026", cantidad_kg: 1200, destino: "Autoconsumo" },
        ]}
      />
    </div>
  );
}
