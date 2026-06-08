"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function HuespedesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Huéspedes" subtitle="Directorio de huéspedes con documento y contacto." />
      <CrudTable title="Huéspedes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "documento", label: "Documento" },
          { key: "telefono", label: "Teléfono" },
          { key: "pais", label: "País" },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", documento: "CC 1020304050", telefono: "300 123 4567", pais: "Colombia" },
          { id: 2, nombre: "Ana Gómez", documento: "CC 1098765432", telefono: "301 765 4321", pais: "Colombia" },
          { id: 3, nombre: "Carlos Ruiz", documento: "PA X1234567", telefono: "+34 600 112 233", pais: "España" },
          { id: 4, nombre: "Laura Martínez", documento: "PA Z7654321", telefono: "+52 55 1234 5678", pais: "México" },
        ]} />
    </div>
  );
}
