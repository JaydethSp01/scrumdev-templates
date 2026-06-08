"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Directorio de clientes y compradores recurrentes." />
      <CrudTable title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "recurrente", label: "Recurrente", render: (r: any) => <Badge tone={r.recurrente === "Sí" ? "success" : "warning"}>{r.recurrente}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", telefono: "300 123 4567", recurrente: "Sí" },
          { id: 2, nombre: "Ana Gómez", telefono: "301 765 4321", recurrente: "No" },
          { id: 3, nombre: "Carlos Ruiz", telefono: "310 222 1133", recurrente: "Sí" },
          { id: 4, nombre: "Laura Martínez", telefono: "320 555 9090", recurrente: "No" },
        ]} />
    </div>
  );
}
