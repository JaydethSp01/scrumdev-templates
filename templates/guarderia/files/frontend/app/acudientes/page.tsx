"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function AcudientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Acudientes" subtitle="Padres y responsables de los niños." />
      <CrudTable title="Acudientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "nino", label: "Niño" },
          { key: "parentesco", label: "Parentesco" },
        ]}
        initial={[
          { id: 1, nombre: "Laura Torres", telefono: "300 123 4567", nino: "Mariana Torres", parentesco: "Madre" },
          { id: 2, nombre: "Carlos Rojas", telefono: "301 765 4321", nino: "Samuel Rojas", parentesco: "Padre" },
          { id: 3, nombre: "Ana Díaz", telefono: "310 222 1133", nino: "Valentina Díaz", parentesco: "Madre" },
          { id: 4, nombre: "Pedro Gómez", telefono: "320 555 9090", nino: "Mateo Gómez", parentesco: "Padre" },
        ]} />
    </div>
  );
}
