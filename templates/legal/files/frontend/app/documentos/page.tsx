"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { DocumentUpload } from "@/components/ui/DocumentUpload";

const tipoTone = (t: string) =>
  t === "Demanda" ? "danger" : t === "Contrato" ? "info" : t === "Poder" ? "brand" : "neutral";

export default function DocumentosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Documentos" subtitle="Gestión documental del bufete: demandas, contratos, poderes y pruebas." />
      <DocumentUpload label="Documentos del caso" />
      <CrudTable
        title="Documentos"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "caso", label: "Caso" },
          { key: "tipo", label: "Tipo", render: (r: any) => <Badge tone={tipoTone(r.tipo)}>{r.tipo}</Badge> },
          { key: "fecha", label: "Fecha", type: "date" },
        ]}
        initial={[
          { id: 1, nombre: "Demanda inicial.pdf", caso: "EXP-2026-014", tipo: "Demanda", fecha: "2026-05-20" },
          { id: 2, nombre: "Contrato servicios.pdf", caso: "EXP-2026-021", tipo: "Contrato", fecha: "2026-05-22" },
          { id: 3, nombre: "Poder especial.pdf", caso: "EXP-2026-008", tipo: "Poder", fecha: "2026-05-25" },
          { id: 4, nombre: "Acta de prueba.pdf", caso: "EXP-2025-097", tipo: "Prueba", fecha: "2026-05-28" },
        ]}
      />
    </div>
  );
}
