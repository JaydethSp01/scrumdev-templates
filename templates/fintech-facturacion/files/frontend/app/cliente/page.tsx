"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { "Al día": "success", Pendiente: "warning", Moroso: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Tu cartera de clientes y su comportamiento de pago." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Cliente" },
          { key: "email", label: "Email", type: "email" },
          { key: "facturado", label: "Facturado", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Acme Corp", email: "pagos@acme.com", facturado: 84200000, estado: "Al día" },
          { id: 2, nombre: "Globex S.A.", email: "finanzas@globex.com", facturado: 31500000, estado: "Pendiente" },
          { id: 3, nombre: "Initech Ltda.", email: "cuentas@initech.com", facturado: 15750000, estado: "Moroso" },
          { id: 4, nombre: "Soylent Co.", email: "admin@soylent.co", facturado: 9400000, estado: "Al día" },
          { id: 5, nombre: "Umbrella Inc.", email: "billing@umbrella.com", facturado: 52300000, estado: "Al día" },
          { id: 6, nombre: "Stark Industries", email: "pagos@stark.com", facturado: 67800000, estado: "Pendiente" },
        ]}
      />
    </div>
  );
}
