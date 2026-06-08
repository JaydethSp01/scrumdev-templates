"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Gestiona los clientes del spa, su membresía y última visita." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "ultima_visita", label: "Última visita" },
          { key: "membresia", label: "Membresía", render: (r: any) => <Badge tone={r.membresia === "Premium" ? "brand" : r.membresia === "VIP" ? "info" : "neutral"}>{r.membresia}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Valentina Ríos", telefono: "300 123 4567", ultima_visita: "02 jun 2026", membresia: "Premium" },
          { id: 2, nombre: "Camila Soto", telefono: "301 765 4321", ultima_visita: "28 may 2026", membresia: "VIP" },
          { id: 3, nombre: "Andrea Pinto", telefono: "310 222 1133", ultima_visita: "30 may 2026", membresia: "Básica" },
          { id: 4, nombre: "Lucía Moreno", telefono: "320 555 9090", ultima_visita: "01 jun 2026", membresia: "Premium" },
          { id: 5, nombre: "Mariana Castro", telefono: "311 888 2200", ultima_visita: "25 may 2026", membresia: "Básica" },
        ]}
      />
    </div>
  );
}
