"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
const tone = (t: string) => (t === "Recurrente" ? "brand" : t === "Especie" ? "warning" : "info");
export default function DonacionesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Donaciones" subtitle="Registro de aportes recibidos por donante y tipo." />
      <CrudTable title="Donaciones"
        fields={[
          { key: "donante", label: "Donante" },
          { key: "monto", label: "Monto", type: "number", render: (r: any) => <span className="font-medium text-slate-900">${Number(r.monto).toLocaleString("es-CO")}</span> },
          { key: "tipo", label: "Tipo", render: (r: any) => <Badge tone={tone(r.tipo)}>{r.tipo}</Badge> },
          { key: "fecha", label: "Fecha" },
        ]}
        initial={[
          { id: 1, donante: "Carolina Restrepo", monto: 500000, tipo: "Recurrente", fecha: "2026-06-01" },
          { id: 2, donante: "Andrés Mejía", monto: 1200000, tipo: "Única", fecha: "2026-06-03" },
          { id: 3, donante: "Supermercados El Sol", monto: 800000, tipo: "Especie", fecha: "2026-06-05" },
          { id: 4, donante: "Lucía Ferreira", monto: 250000, tipo: "Recurrente", fecha: "2026-06-06" },
        ]} />
    </div>
  );
}
