"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import type { Tone } from "@/components/ui/Badge";

const ESTADO_TONE: Record<string, Tone> = {
  Recibida: "info",
  "En proceso": "warning",
  Lista: "brand",
  Entregada: "success",
};
const toneFor = (e: string): Tone => ESTADO_TONE[e] ?? "neutral";

export default function PrendasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Prendas" subtitle="Control de prendas por tipo, servicio y estado." />
      <CrudTable
        title="Prendas"
        fields={[
          { key: "tipo", label: "Tipo" },
          { key: "servicio", label: "Servicio" },
          { key: "cantidad", label: "Cantidad", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, tipo: "Camisa", servicio: "Planchado", cantidad: 5, estado: "En proceso" },
          { id: 2, tipo: "Pantalón", servicio: "Lavado", cantidad: 8, estado: "Recibida" },
          { id: 3, tipo: "Vestido", servicio: "Lavado en seco", cantidad: 2, estado: "Lista" },
          { id: 4, tipo: "Abrigo", servicio: "Tintorería", cantidad: 1, estado: "Entregada" },
          { id: 5, tipo: "Sábana", servicio: "Lavado", cantidad: 6, estado: "Recibida" },
        ]}
      />
    </div>
  );
}
