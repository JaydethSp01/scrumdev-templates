"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const estadoTone: Record<string, Tone> = { Aprobada: "success", Enviada: "info", Pendiente: "warning", Rechazada: "danger" };

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Cotizaciones" subtitle="Propuestas económicas por evento y su estado." />
      <CrudTable
        title="Cotizaciones"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "evento", label: "Evento" },
          { key: "valor", label: "Valor", type: "number", render: (r: any) => <span>${Number(r.valor).toLocaleString()}</span> },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={estadoTone[r.estado] ?? "neutral"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, cliente: "María & Andrés", evento: "Boda en Hacienda El Roble", valor: 45000000, estado: "Aprobada" },
          { id: 2, cliente: "Grupo Vértice", evento: "Lanzamiento corporativo", valor: 28000000, estado: "Enviada" },
          { id: 3, cliente: "Familia Restrepo", evento: "Cumpleaños 50 años", valor: 12000000, estado: "Pendiente" },
          { id: 4, cliente: "Lucía & Tomás", evento: "Boda jardín botánico", valor: 52000000, estado: "Enviada" },
          { id: 5, cliente: "Inversiones Norte", evento: "Cena de fin de año", valor: 9800000, estado: "Rechazada" },
        ]}
      />
    </div>
  );
}
