"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const estadoTone: Record<string, Tone> = { Completada: "success", "En progreso": "info", Pendiente: "warning", Atrasada: "danger" };

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Tareas" subtitle="Checklist operativo de cada evento por responsable." />
      <CrudTable
        title="Tareas"
        fields={[
          { key: "evento", label: "Evento" },
          { key: "tarea", label: "Tarea" },
          { key: "responsable", label: "Responsable" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={estadoTone[r.estado] ?? "neutral"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, evento: "Boda en Hacienda El Roble", tarea: "Confirmar catering", responsable: "Camila Ríos", estado: "Completada" },
          { id: 2, evento: "Boda en Hacienda El Roble", tarea: "Montaje de decoración", responsable: "Julián Mesa", estado: "En progreso" },
          { id: 3, evento: "Lanzamiento corporativo", tarea: "Enviar invitaciones", responsable: "Sofía Lara", estado: "Pendiente" },
          { id: 4, evento: "Cumpleaños 50 años", tarea: "Contratar DJ", responsable: "Andrés Peña", estado: "Atrasada" },
          { id: 5, evento: "Grado universitario", tarea: "Reservar salón", responsable: "Camila Ríos", estado: "Completada" },
        ]}
      />
    </div>
  );
}
