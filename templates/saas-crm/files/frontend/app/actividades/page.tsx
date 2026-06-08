"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Completada: "success", Pendiente: "warning", Cancelada: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Actividades" subtitle="Llamadas, reuniones y correos del equipo comercial." />
      <CrudTable
        title="Actividades"
        fields={[
          { key: "tipo", label: "Tipo" },
          { key: "descripcion", label: "Asunto" },
          { key: "contacto", label: "Contacto" },
          { key: "fecha", label: "Fecha" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, tipo: "Llamada", descripcion: "Cierre de licencias Enterprise", contacto: "Carlos Ruiz", fecha: "2026-06-03", estado: "Completada" },
          { id: 2, tipo: "Reunión", descripcion: "Demo de migración a la nube", contacto: "Elena Ríos", fecha: "2026-06-04", estado: "Pendiente" },
          { id: 3, tipo: "Email", descripcion: "Envío de propuesta Starter", contacto: "Juan Pérez", fecha: "2026-06-02", estado: "Completada" },
          { id: 4, tipo: "Llamada", descripcion: "Seguimiento integración API", contacto: "Ana Gómez", fecha: "2026-06-05", estado: "Pendiente" },
          { id: 5, tipo: "Reunión", descripcion: "Revisión de soporte premium", contacto: "Luis Martínez", fecha: "2026-06-01", estado: "Cancelada" },
        ]}
      />
    </div>
  );
}
