"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Disponible: "success", "En ruta": "info", Descanso: "warning" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Conductores" subtitle="Administra el equipo de conductores y su disponibilidad." />
      <CrudTable
        title="Conductores"
        fields={[
          { key: "nombre", label: "Conductor" },
          { key: "licencia", label: "Licencia" },
          { key: "zona", label: "Zona" },
          { key: "telefono", label: "Teléfono" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", licencia: "B1234567", zona: "Zona Norte", telefono: "+57 300 111 2233", estado: "En ruta" },
          { id: 2, nombre: "María López", licencia: "C2345678", zona: "Eje Cafetero", telefono: "+57 311 444 5566", estado: "En ruta" },
          { id: 3, nombre: "Carlos García", licencia: "C3456789", zona: "Costa Caribe", telefono: "+57 320 777 8899", estado: "Disponible" },
          { id: 4, nombre: "Ana Martínez", licencia: "B4567890", zona: "Zona Oriente", telefono: "+57 301 222 3344", estado: "Disponible" },
          { id: 5, nombre: "Diego Torres", licencia: "C5678901", zona: "Zona Sur", telefono: "+57 315 555 6677", estado: "Descanso" },
          { id: 6, nombre: "Laura Niño", licencia: "B6789012", zona: "Zona Andina", telefono: "+57 318 888 9900", estado: "En ruta" },
        ]}
      />
    </div>
  );
}
