"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Activo: "success", Inactivo: "neutral", Suspendido: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Empresas y personas que atiende la firma contable." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Razón social" },
          { key: "nit", label: "NIT" },
          { key: "regimen", label: "Régimen" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Comercial Andina S.A.S.", nit: "900.123.456-7", regimen: "Común", estado: "Activo" },
          { id: 2, nombre: "Inversiones Riofrío Ltda.", nit: "830.987.654-1", regimen: "Gran contribuyente", estado: "Activo" },
          { id: 3, nombre: "Distribuidora El Roble", nit: "901.222.333-9", regimen: "Simplificado", estado: "Suspendido" },
          { id: 4, nombre: "Servicios Pacífico S.A.S.", nit: "900.555.111-4", regimen: "Común", estado: "Activo" },
          { id: 5, nombre: "Carlos Méndez (Persona Natural)", nit: "79.456.321-0", regimen: "Simplificado", estado: "Inactivo" },
        ]}
      />
    </div>
  );
}
