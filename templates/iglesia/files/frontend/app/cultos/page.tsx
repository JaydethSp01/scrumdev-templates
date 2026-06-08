"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function CultosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Cultos y servicios" subtitle="Programa cultos, estudios y vigilias con predicador y asistencia." />
      <CrudTable title="Cultos"
        fields={[
          { key: "fecha", label: "Fecha" },
          { key: "tipo", label: "Tipo", render: (r: any) => <Badge tone={r.tipo === "Culto" ? "brand" : "info"}>{r.tipo}</Badge> },
          { key: "predicador", label: "Predicador" },
          { key: "tema", label: "Tema" },
          { key: "asistencia", label: "Asistencia", type: "number" },
        ]}
        initial={[
          { id: 1, fecha: "Dom 9:00am", tipo: "Culto", predicador: "Pastor Andrés", tema: "La fe que mueve montañas", asistencia: 182 },
          { id: 2, fecha: "Mié 7:00pm", tipo: "Estudio", predicador: "Hno. Felipe", tema: "Romanos 8", asistencia: 64 },
          { id: 3, fecha: "Vie 8:00pm", tipo: "Oración", predicador: "Pastora Ruth", tema: "Vigilia de intercesión", asistencia: 95 },
        ]} />
    </div>
  );
}
