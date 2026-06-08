"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function DonantesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Donantes" subtitle="Personas y empresas que apoyan la fundación." />
      <CrudTable title="Donantes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "tipo", label: "Tipo", render: (r: any) => <Badge tone={r.tipo === "Empresa" ? "info" : "brand"}>{r.tipo}</Badge> },
          { key: "telefono", label: "Teléfono" },
          { key: "total", label: "Total donado", type: "number", render: (r: any) => <span className="font-medium text-slate-900">${Number(r.total).toLocaleString("es-CO")}</span> },
        ]}
        initial={[
          { id: 1, nombre: "Carolina Restrepo", tipo: "Persona", telefono: "300 123 4567", total: 4500000 },
          { id: 2, nombre: "Supermercados El Sol", tipo: "Empresa", telefono: "604 555 1020", total: 12000000 },
          { id: 3, nombre: "Andrés Mejía", tipo: "Persona", telefono: "310 222 1133", total: 1800000 },
          { id: 4, nombre: "Fundación Aliada", tipo: "Empresa", telefono: "601 444 5566", total: 8200000 },
        ]} />
    </div>
  );
}
