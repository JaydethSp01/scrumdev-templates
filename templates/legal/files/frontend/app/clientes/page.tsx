"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Directorio de clientes del bufete y sus casos asociados." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "documento", label: "Documento" },
          { key: "telefono", label: "Teléfono" },
          { key: "casos", label: "Casos", type: "number", render: (r: any) => <Badge tone="brand">{r.casos}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", documento: "CC 1.020.334.556", telefono: "300 111 2233", casos: 2 },
          { id: 2, nombre: "Comercial Andina SAS", documento: "NIT 900.456.789", telefono: "601 444 5566", casos: 5 },
          { id: 3, nombre: "María López", documento: "CC 52.778.991", telefono: "310 777 8899", casos: 1 },
          { id: 4, nombre: "Carlos Díaz", documento: "CC 79.334.221", telefono: "320 222 3344", casos: 3 },
        ]}
      />
    </div>
  );
}
