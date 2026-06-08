"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Disponible: "success", "En ruta": "info", Mantenimiento: "warning", Inactivo: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Vehículos" subtitle="Gestiona la flota y el estado de cada unidad." />
      <CrudTable
        title="Vehículos"
        fields={[
          { key: "matricula", label: "Matrícula" },
          { key: "vehiculo", label: "Vehículo" },
          { key: "tipo", label: "Tipo" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, matricula: "1234-ABC", vehiculo: "Ford Transit", tipo: "Furgón", estado: "Disponible" },
          { id: 2, matricula: "5678-DEF", vehiculo: "Mercedes Sprinter", tipo: "Furgón", estado: "En ruta" },
          { id: 3, matricula: "9012-GHI", vehiculo: "Volvo FH16", tipo: "Tractomula", estado: "En ruta" },
          { id: 4, matricula: "3456-JKL", vehiculo: "Renault Master", tipo: "Furgón", estado: "Mantenimiento" },
          { id: 5, matricula: "7890-MNO", vehiculo: "Scania R450", tipo: "Tractomula", estado: "Disponible" },
          { id: 6, matricula: "2468-PQR", vehiculo: "Iveco Daily", tipo: "Camión", estado: "Inactivo" },
        ]}
      />
    </div>
  );
}
