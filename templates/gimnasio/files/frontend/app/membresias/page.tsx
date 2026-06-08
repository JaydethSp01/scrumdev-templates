"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function MembresiasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Membresías" subtitle="Planes disponibles, precios y beneficios para los miembros." />
      <CrudTable title="Membresías"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <span>${Number(r.precio).toLocaleString()}</span> },
          { key: "duracion", label: "Duración" },
          { key: "beneficios", label: "Beneficios" },
        ]}
        initial={[
          { id: 1, nombre: "Básico", precio: 80000, duracion: "1 mes", beneficios: "Acceso a sala de pesas" },
          { id: 2, nombre: "Premium", precio: 130000, duracion: "1 mes", beneficios: "Sala + clases grupales" },
          { id: 3, nombre: "Trimestral", precio: 330000, duracion: "3 meses", beneficios: "Todo incluido + nutricionista" },
          { id: 4, nombre: "Anual", precio: 1100000, duracion: "12 meses", beneficios: "Todo incluido + entrenador personal" },
        ]} />
    </div>
  );
}
