"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function RutinasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Rutinas" subtitle="Planes de entrenamiento por objetivo y nivel." />
      <CrudTable title="Rutinas"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "objetivo", label: "Objetivo" },
          { key: "nivel", label: "Nivel" },
          { key: "ejercicios", label: "Ejercicios", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Hipertrofia Total", objetivo: "Ganar masa", nivel: "Intermedio", ejercicios: 12 },
          { id: 2, nombre: "Quema Grasa", objetivo: "Bajar de peso", nivel: "Principiante", ejercicios: 8 },
          { id: 3, nombre: "Fuerza Máxima", objetivo: "Fuerza", nivel: "Avanzado", ejercicios: 10 },
          { id: 4, nombre: "Tonificación", objetivo: "Definición", nivel: "Intermedio", ejercicios: 14 },
        ]} />
    </div>
  );
}
