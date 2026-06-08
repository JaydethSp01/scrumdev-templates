"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function ProveedoresPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Proveedores" subtitle="Gestiona los proveedores y sus catálogos." />
      <CrudTable
        title="Proveedores"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "contacto", label: "Contacto" },
          { key: "productos", label: "Productos", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Bosch Colombia", contacto: "ventas@bosch.co", productos: 84 },
          { id: 2, nombre: "Pinturas Pintuco", contacto: "302 444 1212", productos: 56 },
          { id: 3, nombre: "Eléctricos Centelsa", contacto: "601 333 7788", productos: 120 },
          { id: 4, nombre: "Pavco Plomería", contacto: "ventas@pavco.co", productos: 73 },
        ]}
      />
    </div>
  );
}
