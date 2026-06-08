"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Administra los clientes de la lavandería." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "ordenes", label: "Órdenes", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "María López", telefono: "300 123 4567", ordenes: 12 },
          { id: 2, nombre: "Carlos Ruiz", telefono: "301 765 4321", ordenes: 7 },
          { id: 3, nombre: "Ana Gómez", telefono: "310 222 1133", ordenes: 21 },
          { id: 4, nombre: "Pedro Sánchez", telefono: "320 555 9090", ordenes: 4 },
          { id: 5, nombre: "Laura Martínez", telefono: "315 444 7788", ordenes: 9 },
        ]}
      />
    </div>
  );
}
