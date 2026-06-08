"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Venta: "brand", Arriendo: "info" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Contratos" subtitle="Cierres de venta y arriendo." />
      <CrudTable
        title="Contratos"
        fields={[
          { key: "propiedad", label: "Propiedad" },
          { key: "cliente", label: "Cliente" },
          { key: "tipo", label: "Tipo", render: (r: any) => <Badge tone={toneFor(r.tipo)}>{r.tipo}</Badge> },
          { key: "valor", label: "Valor", type: "number", render: (r: any) => <span>${Number(r.valor).toLocaleString("es-CO")}</span> },
        ]}
        initial={[
          { id: 1, propiedad: "Apto 302 · Laureles", cliente: "Juan Pérez", tipo: "Venta", valor: 420000000 },
          { id: 2, propiedad: "Casa Campestre · Llanogrande", cliente: "Ana Gómez", tipo: "Arriendo", valor: 4500000 },
          { id: 3, propiedad: "Local 14 · El Poblado", cliente: "Carlos Ruiz", tipo: "Venta", valor: 310000000 },
          { id: 4, propiedad: "Apto 1201 · Envigado", cliente: "Pedro Sánchez", tipo: "Arriendo", valor: 3200000 },
        ]}
      />
    </div>
  );
}
