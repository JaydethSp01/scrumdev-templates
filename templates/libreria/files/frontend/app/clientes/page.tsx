"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Clientes frecuentes, colegios y mayoristas." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "tipo", label: "Tipo" },
        ]}
        initial={[
          { id: 1, nombre: "María Gómez", telefono: "300 123 4567", tipo: "Particular" },
          { id: 2, nombre: "Colegio San José", telefono: "604 555 0011", tipo: "Institución" },
          { id: 3, nombre: "Carlos Ruiz", telefono: "310 222 1133", tipo: "Particular" },
          { id: 4, nombre: "Distribuidora El Saber", telefono: "604 555 0022", tipo: "Mayorista" },
        ]}
      />
    </div>
  );
}
