"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function ProveedoresPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Proveedores" subtitle="Laboratorios y distribuidores que abastecen la droguería." />
      <CrudTable title="Proveedores"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "contacto", label: "Contacto" },
          { key: "productos", label: "Productos", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Laboratorios Genfar", contacto: "ventas@genfar.com", productos: 48 },
          { id: 2, nombre: "Distribuidora La Rebaja", contacto: "302 444 1122", productos: 120 },
          { id: 3, nombre: "Bayer Colombia", contacto: "pedidos@bayer.com", productos: 35 },
          { id: 4, nombre: "MK Tecnoquímicas", contacto: "311 888 7766", productos: 76 },
        ]} />
    </div>
  );
}
