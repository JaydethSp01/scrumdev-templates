"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Presentada: "success", Borrador: "neutral", "Por presentar": "warning", Rechazada: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";
const money = (v: number) => "$" + (v ?? 0).toLocaleString("es-CO");

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Declaraciones" subtitle="Declaraciones tributarias presentadas y en proceso." />
      <CrudTable
        title="Declaraciones"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "tipo", label: "Tipo" },
          { key: "periodo", label: "Periodo" },
          { key: "valor", label: "Valor", type: "number", render: (r: any) => money(r.valor) },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, cliente: "Comercial Andina S.A.S.", tipo: "IVA", periodo: "Bimestre 3 - 2026", valor: 12450000, estado: "Presentada" },
          { id: 2, cliente: "Inversiones Riofrío Ltda.", tipo: "Renta", periodo: "Año 2025", valor: 48900000, estado: "Por presentar" },
          { id: 3, cliente: "Distribuidora El Roble", tipo: "Retención", periodo: "Mayo 2026", valor: 3200000, estado: "Borrador" },
          { id: 4, cliente: "Servicios Pacífico S.A.S.", tipo: "IVA", periodo: "Bimestre 2 - 2026", valor: 8750000, estado: "Presentada" },
          { id: 5, cliente: "Carlos Méndez", tipo: "Renta", periodo: "Año 2025", valor: 5600000, estado: "Rechazada" },
        ]}
      />
    </div>
  );
}
