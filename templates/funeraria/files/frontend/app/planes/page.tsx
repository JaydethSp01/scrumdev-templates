"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function PlanesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Planes" subtitle="Planes de previsión exequial con coberturas claras y respetuosas." />
      <CrudTable
        title="Planes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <span>${Number(r.precio).toLocaleString("es-CO")}</span> },
          { key: "cobertura", label: "Cobertura" },
          { key: "vigencia", label: "Vigencia" },
        ]}
        initial={[
          { id: 1, nombre: "Plan Esencial", precio: 1200000, cobertura: "Velación y traslado", vigencia: "Anual" },
          { id: 2, nombre: "Plan Familiar", precio: 2400000, cobertura: "Hasta 4 beneficiarios", vigencia: "Anual" },
          { id: 3, nombre: "Plan Integral", precio: 3600000, cobertura: "Velación, cremación y traslado", vigencia: "Bienal" },
          { id: 4, nombre: "Plan Previsión", precio: 5400000, cobertura: "Cobertura total + acompañamiento", vigencia: "Vitalicio" },
        ]}
      />
    </div>
  );
}
