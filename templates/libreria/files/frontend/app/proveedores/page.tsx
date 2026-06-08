"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function ProveedoresPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Proveedores" subtitle="Editoriales y distribuidores que abastecen la librería." />
      <CrudTable
        title="Proveedores"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "contacto", label: "Contacto" },
          { key: "productos", label: "Productos", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Editorial Norma", contacto: "ventas@norma.com", productos: 320 },
          { id: 2, nombre: "Papeles del Cauca", contacto: "301 444 5566", productos: 145 },
          { id: 3, nombre: "Arte y Color SAS", contacto: "604 555 0033", productos: 78 },
          { id: 4, nombre: "Distribuidora Escolar", contacto: "310 777 8899", productos: 210 },
        ]}
      />
    </div>
  );
}
