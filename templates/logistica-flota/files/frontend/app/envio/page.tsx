"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Entregado: "success", "En tránsito": "info", Retrasado: "warning", Cancelado: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Envíos" subtitle="Controla el estado y la trazabilidad de cada despacho." />
      <CrudTable
        title="Envíos"
        fields={[
          { key: "guia", label: "Guía" },
          { key: "descripcion", label: "Envío" },
          { key: "destino", label: "Destino" },
          { key: "conductor", label: "Conductor" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, guia: "GU-4821", descripcion: "Electrodomésticos", destino: "Medellín", conductor: "Juan Pérez", estado: "Entregado" },
          { id: 2, guia: "GU-4822", descripcion: "Textiles", destino: "Pereira", conductor: "María López", estado: "En tránsito" },
          { id: 3, guia: "GU-4823", descripcion: "Insumos médicos", destino: "Cartagena", conductor: "Carlos García", estado: "Retrasado" },
          { id: 4, guia: "GU-4824", descripcion: "Repuestos", destino: "Bucaramanga", conductor: "Ana Martínez", estado: "En tránsito" },
          { id: 5, guia: "GU-4825", descripcion: "Alimentos secos", destino: "Manizales", conductor: "Diego Torres", estado: "Cancelado" },
          { id: 6, guia: "GU-4826", descripcion: "Mobiliario", destino: "Popayán", conductor: "Laura Niño", estado: "Entregado" },
        ]}
      />
    </div>
  );
}
