"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function AyunosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Ayunos" subtitle="Convocatorias de ayuno y oración con propósito y participantes." />
      <CrudTable title="Ayunos"
        fields={[
          { key: "nombre", label: "Ayuno" },
          { key: "inicio", label: "Inicio" },
          { key: "fin", label: "Fin" },
          { key: "motivo", label: "Motivo" },
          { key: "participantes", label: "Participantes", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Ayuno de Daniel", inicio: "01 jun", fin: "21 jun", motivo: "Consagración", participantes: 120 },
          { id: 2, nombre: "Ayuno congregacional", inicio: "Sáb 6am", fin: "Sáb 6pm", motivo: "Avivamiento", participantes: 85 },
          { id: 3, nombre: "Ayuno de líderes", inicio: "Lun", fin: "Mié", motivo: "Dirección", participantes: 18 },
        ]} />
    </div>
  );
}
