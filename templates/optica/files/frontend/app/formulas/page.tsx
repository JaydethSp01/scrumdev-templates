"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function FormulasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Fórmulas" subtitle="Fórmulas ópticas y prescripciones de los pacientes." />
      <CrudTable
        title="Fórmulas"
        fields={[
          { key: "paciente", label: "Paciente" },
          { key: "od_esfera", label: "OD Esfera" },
          { key: "oi_esfera", label: "OI Esfera" },
          { key: "fecha", label: "Fecha" },
        ]}
        initial={[
          { id: 1, paciente: "Juan Pérez", od_esfera: "-1.25", oi_esfera: "-1.00", fecha: "2026-06-07" },
          { id: 2, paciente: "Ana Gómez", od_esfera: "+0.75", oi_esfera: "+1.00", fecha: "2026-05-20" },
          { id: 3, paciente: "Carlos Ruiz", od_esfera: "-2.50", oi_esfera: "-2.75", fecha: "2026-04-28" },
          { id: 4, paciente: "Laura Martínez", od_esfera: "-0.50", oi_esfera: "-0.50", fecha: "2026-06-01" },
        ]}
      />
    </div>
  );
}
