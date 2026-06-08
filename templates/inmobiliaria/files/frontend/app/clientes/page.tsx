"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Prospectos y compradores interesados." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "interes", label: "Interés" },
          { key: "presupuesto", label: "Presupuesto", type: "number", render: (r: any) => <span>${Number(r.presupuesto).toLocaleString("es-CO")}</span> },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", telefono: "300 123 4567", interes: "Apartamento", presupuesto: 450000000 },
          { id: 2, nombre: "Ana Gómez", telefono: "301 765 4321", interes: "Casa", presupuesto: 900000000 },
          { id: 3, nombre: "Carlos Ruiz", telefono: "310 222 1133", interes: "Local", presupuesto: 320000000 },
          { id: 4, nombre: "Laura Martínez", telefono: "320 555 9090", interes: "Lote", presupuesto: 200000000 },
        ]}
      />
    </div>
  );
}
