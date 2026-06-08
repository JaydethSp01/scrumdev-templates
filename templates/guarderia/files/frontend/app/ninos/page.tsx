"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function NinosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Niños" subtitle="Directorio de niños matriculados por nivel." />
      <CrudTable title="Niños"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "nivel", label: "Nivel" },
          { key: "edad", label: "Edad", type: "number" },
          { key: "acudiente", label: "Acudiente" },
        ]}
        initial={[
          { id: 1, nombre: "Mariana Torres", nivel: "Párvulos", edad: 2, acudiente: "Laura Torres" },
          { id: 2, nombre: "Samuel Rojas", nivel: "Pre-jardín", edad: 3, acudiente: "Carlos Rojas" },
          { id: 3, nombre: "Valentina Díaz", nivel: "Jardín", edad: 4, acudiente: "Ana Díaz" },
          { id: 4, nombre: "Mateo Gómez", nivel: "Transición", edad: 5, acudiente: "Pedro Gómez" },
        ]} />
    </div>
  );
}
