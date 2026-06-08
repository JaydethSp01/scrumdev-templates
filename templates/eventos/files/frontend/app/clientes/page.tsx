"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Gestiona tus clientes y sus presupuestos." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "evento", label: "Evento" },
          { key: "presupuesto", label: "Presupuesto", type: "number", render: (r: any) => <span>${Number(r.presupuesto).toLocaleString()}</span> },
        ]}
        initial={[
          { id: 1, nombre: "María & Andrés", telefono: "300 123 4567", evento: "Boda en Hacienda El Roble", presupuesto: 45000000 },
          { id: 2, nombre: "Grupo Vértice", telefono: "301 765 4321", evento: "Lanzamiento corporativo", presupuesto: 28000000 },
          { id: 3, nombre: "Familia Restrepo", telefono: "310 222 1133", evento: "Cumpleaños 50 años", presupuesto: 12000000 },
          { id: 4, nombre: "Promoción 2026", telefono: "320 555 9090", evento: "Grado universitario", presupuesto: 18000000 },
          { id: 5, nombre: "Lucía & Tomás", telefono: "315 888 2200", evento: "Boda jardín botánico", presupuesto: 52000000 },
        ]}
      />
    </div>
  );
}
