"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Clientes frecuentes y programa de fidelización." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "visitas", label: "Visitas", type: "number", render: (r: any) => <Badge tone={r.visitas >= 10 ? "brand" : "neutral"}>{r.visitas}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Laura Pérez", telefono: "300 111 2233", visitas: 14 },
          { id: 2, nombre: "Andrés Gómez", telefono: "301 444 5566", visitas: 7 },
          { id: 3, nombre: "Sofía Díaz", telefono: "310 777 8899", visitas: 22 },
          { id: 4, nombre: "Camilo Ruiz", telefono: "320 222 3344", visitas: 3 },
        ]}
      />
    </div>
  );
}
