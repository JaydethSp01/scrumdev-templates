"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Directorio de clientes y sus datos de contacto." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "vehiculos", label: "Vehículos", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", telefono: "300 123 4567", vehiculos: 2 },
          { id: 2, nombre: "Ana Gómez", telefono: "301 765 4321", vehiculos: 1 },
          { id: 3, nombre: "Carlos Ruiz", telefono: "310 222 1133", vehiculos: 1 },
          { id: 4, nombre: "Laura Martínez", telefono: "320 555 9090", vehiculos: 3 },
          { id: 5, nombre: "Pedro Sánchez", telefono: "311 888 4422", vehiculos: 1 },
        ]}
      />
    </div>
  );
}
