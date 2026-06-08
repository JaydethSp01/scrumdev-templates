"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { DocumentUpload } from "@/components/ui/DocumentUpload";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Recibido: "success", Pendiente: "warning", Vencido: "danger", "En revisión": "info" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Documentos" subtitle="Soportes y documentos contables de cada cliente." />
      <DocumentUpload label="Documentos del cliente" />
      <CrudTable
        title="Documentos"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "tipo", label: "Tipo" },
          { key: "fecha", label: "Fecha" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, cliente: "Comercial Andina S.A.S.", tipo: "Estado financiero", fecha: "2026-06-01", estado: "Recibido" },
          { id: 2, cliente: "Inversiones Riofrío Ltda.", tipo: "Extracto bancario", fecha: "2026-06-03", estado: "En revisión" },
          { id: 3, cliente: "Distribuidora El Roble", tipo: "Factura de compra", fecha: "2026-05-28", estado: "Pendiente" },
          { id: 4, cliente: "Servicios Pacífico S.A.S.", tipo: "Certificado de retención", fecha: "2026-06-05", estado: "Recibido" },
          { id: 5, cliente: "Carlos Méndez", tipo: "Soporte de gastos", fecha: "2026-05-20", estado: "Vencido" },
        ]}
      />
    </div>
  );
}
