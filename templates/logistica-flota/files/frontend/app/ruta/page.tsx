"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Activa: "success", "En curso": "info", Pausada: "warning" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Rutas" subtitle="Define y supervisa los trayectos de la operación." />
      <CrudTable
        title="Rutas"
        fields={[
          { key: "nombre", label: "Ruta" },
          { key: "origen", label: "Origen" },
          { key: "destino", label: "Destino" },
          { key: "distancia", label: "Distancia" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Corredor Norte", origen: "Bogotá", destino: "Medellín", distancia: "415 km", estado: "Activa" },
          { id: 2, nombre: "Eje Cafetero", origen: "Cali", destino: "Pereira", distancia: "210 km", estado: "Activa" },
          { id: 3, nombre: "Costa Caribe", origen: "Barranquilla", destino: "Cartagena", distancia: "120 km", estado: "En curso" },
          { id: 4, nombre: "Ruta Oriente", origen: "Bogotá", destino: "Bucaramanga", distancia: "400 km", estado: "En curso" },
          { id: 5, nombre: "Tramo Sur", origen: "Cali", destino: "Popayán", distancia: "140 km", estado: "Pausada" },
          { id: 6, nombre: "Línea Andina", origen: "Medellín", destino: "Manizales", distancia: "195 km", estado: "Activa" },
        ]}
      />
    </div>
  );
}
