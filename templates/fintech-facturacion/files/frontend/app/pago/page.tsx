"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Conciliado: "success", Procesando: "warning", Rechazado: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pagos" subtitle="Pagos recibidos y su estado de conciliación." />
      <CrudTable
        title="Pagos"
        fields={[
          { key: "factura", label: "Factura" },
          { key: "cliente", label: "Cliente" },
          { key: "monto", label: "Monto", type: "number" },
          { key: "metodo", label: "Método" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, factura: "FAC-1042", cliente: "Acme Corp", monto: 12400000, metodo: "Transferencia", estado: "Conciliado" },
          { id: 2, factura: "FAC-1038", cliente: "Umbrella Inc.", monto: 22100000, metodo: "Tarjeta", estado: "Conciliado" },
          { id: 3, factura: "FAC-1041", cliente: "Globex S.A.", monto: 8900000, metodo: "Transferencia", estado: "Procesando" },
          { id: 4, factura: "FAC-1036", cliente: "Wayne Enterprises", monto: 6750000, metodo: "Efectivo", estado: "Conciliado" },
          { id: 5, factura: "FAC-1035", cliente: "Hooli", monto: 3200000, metodo: "Tarjeta", estado: "Rechazado" },
        ]}
      />
    </div>
  );
}
