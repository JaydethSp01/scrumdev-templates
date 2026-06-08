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
      <PageHeader title="Seguimiento" subtitle="Monitorea el estado de tus envíos en tiempo real." />
      <CrudTable
        title="Seguimiento"
        fields={[
          { key: "guia", label: "Guía" },
          { key: "ruta", label: "Ruta" },
          { key: "vehiculo", label: "Vehículo" },
          { key: "conductor", label: "Conductor" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, guia: "GU-4821", ruta: "Bogotá → Medellín", vehiculo: "Camión A", conductor: "Juan Pérez", estado: "Entregado" },
          { id: 2, guia: "GU-4822", ruta: "Cali → Pereira", vehiculo: "Camión B", conductor: "María López", estado: "En tránsito" },
          { id: 3, guia: "GU-4823", ruta: "Barranquilla → Cartagena", vehiculo: "Camión C", conductor: "Carlos García", estado: "Retrasado" },
          { id: 4, guia: "GU-4824", ruta: "Bogotá → Bucaramanga", vehiculo: "Camión D", conductor: "Ana Martínez", estado: "En tránsito" },
          { id: 5, guia: "GU-4825", ruta: "Medellín → Manizales", vehiculo: "Camión E", conductor: "Diego Torres", estado: "Cancelado" },
        ]}
      />
    </div>
  );
}
