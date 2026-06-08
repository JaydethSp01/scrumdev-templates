"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Gestiona los clientes de la ferretería." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "tipo", label: "Tipo" },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", telefono: "300 123 4567", tipo: "Minorista" },
          { id: 2, nombre: "Constructora Andina", telefono: "601 555 2020", tipo: "Mayorista" },
          { id: 3, nombre: "Ana Gómez", telefono: "301 765 4321", tipo: "Minorista" },
          { id: 4, nombre: "Reformas del Norte", telefono: "310 222 1133", tipo: "Mayorista" },
        ]}
      />
    </div>
  );
}
