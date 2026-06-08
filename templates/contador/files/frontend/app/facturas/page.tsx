"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Pagada: "success", Pendiente: "warning", Vencida: "danger", Anulada: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";
const money = (v: number) => "$" + (v ?? 0).toLocaleString("es-CO");

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Facturas" subtitle="Facturación de honorarios emitida a los clientes." />
      <CrudTable
        title="Facturas"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "numero", label: "Número" },
          { key: "valor", label: "Valor", type: "number", render: (r: any) => money(r.valor) },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, cliente: "Comercial Andina S.A.S.", numero: "FE-1024", valor: 2500000, estado: "Pagada" },
          { id: 2, cliente: "Inversiones Riofrío Ltda.", numero: "FE-1025", valor: 4200000, estado: "Pendiente" },
          { id: 3, cliente: "Distribuidora El Roble", numero: "FE-1026", valor: 1800000, estado: "Vencida" },
          { id: 4, cliente: "Servicios Pacífico S.A.S.", numero: "FE-1027", valor: 3100000, estado: "Pagada" },
          { id: 5, cliente: "Carlos Méndez", numero: "FE-1028", valor: 950000, estado: "Anulada" },
        ]}
      />
    </div>
  );
}
