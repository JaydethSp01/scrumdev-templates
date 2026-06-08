"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Agentes" subtitle="Equipo comercial y su desempeño." />
      <CrudTable
        title="Agentes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "propiedades", label: "Propiedades", type: "number" },
          { key: "ventas", label: "Ventas", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Camila Ríos", telefono: "300 444 1212", propiedades: 24, ventas: 7 },
          { id: 2, nombre: "Diego Mora", telefono: "311 888 3434", propiedades: 18, ventas: 5 },
          { id: 3, nombre: "Valentina Soto", telefono: "320 909 5656", propiedades: 31, ventas: 9 },
          { id: 4, nombre: "Andrés Patiño", telefono: "315 121 7878", propiedades: 12, ventas: 3 },
        ]}
      />
    </div>
  );
}
