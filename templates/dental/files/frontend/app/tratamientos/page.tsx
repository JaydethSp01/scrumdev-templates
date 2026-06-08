"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Preventivo: "success", Estético: "info", Correctivo: "warning", Quirúrgico: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Tratamientos" subtitle="Catálogo de tratamientos, costos y número de sesiones." />
      <CrudTable
        title="Tratamientos"
        fields={[
          { key: "nombre", label: "Tratamiento" },
          { key: "costo", label: "Costo", type: "number", render: (r: any) => <span>${Number(r.costo).toLocaleString("es-CO")}</span> },
          { key: "sesiones", label: "Sesiones", type: "number" },
          { key: "categoria", label: "Categoría", render: (r: any) => <Badge tone={toneFor(r.categoria)}>{r.categoria}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Limpieza dental", costo: 120000, sesiones: 1, categoria: "Preventivo" },
          { id: 2, nombre: "Ortodoncia", costo: 3800000, sesiones: 24, categoria: "Correctivo" },
          { id: 3, nombre: "Endodoncia", costo: 650000, sesiones: 3, categoria: "Correctivo" },
          { id: 4, nombre: "Blanqueamiento", costo: 480000, sesiones: 2, categoria: "Estético" },
          { id: 5, nombre: "Extracción", costo: 220000, sesiones: 1, categoria: "Quirúrgico" },
        ]}
      />
    </div>
  );
}
