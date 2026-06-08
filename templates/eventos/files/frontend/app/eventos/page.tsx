"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const estadoTone: Record<string, Tone> = { Confirmado: "success", Cotización: "warning", "En curso": "info" };
const tipoTone: Record<string, Tone> = { Boda: "brand", Corporativo: "info", Cumpleaños: "warning", Grado: "neutral" };

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Eventos" subtitle="Gestiona bodas, eventos corporativos y celebraciones." />
      <CrudTable
        title="Eventos"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "tipo", label: "Tipo", render: (r: any) => <Badge tone={tipoTone[r.tipo] ?? "neutral"}>{r.tipo}</Badge> },
          { key: "fecha", label: "Fecha" },
          { key: "cliente", label: "Cliente" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={estadoTone[r.estado] ?? "neutral"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Boda en Hacienda El Roble", tipo: "Boda", fecha: "14 jun 2026", cliente: "María & Andrés", estado: "Confirmado" },
          { id: 2, nombre: "Lanzamiento corporativo", tipo: "Corporativo", fecha: "20 jun 2026", cliente: "Grupo Vértice", estado: "Cotización" },
          { id: 3, nombre: "Cumpleaños 50 años", tipo: "Cumpleaños", fecha: "22 jun 2026", cliente: "Familia Restrepo", estado: "En curso" },
          { id: 4, nombre: "Grado universitario", tipo: "Grado", fecha: "28 jun 2026", cliente: "Promoción 2026", estado: "Confirmado" },
          { id: 5, nombre: "Boda jardín botánico", tipo: "Boda", fecha: "05 jul 2026", cliente: "Lucía & Tomás", estado: "Cotización" },
        ]}
      />
    </div>
  );
}
