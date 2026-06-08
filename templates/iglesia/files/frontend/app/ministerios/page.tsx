"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function MinisteriosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Ministerios" subtitle="Áreas de servicio, líderes y número de integrantes." />
      <CrudTable title="Ministerios"
        fields={[
          { key: "nombre", label: "Ministerio" },
          { key: "lider", label: "Líder" },
          { key: "integrantes", label: "Integrantes", type: "number" },
          { key: "dia", label: "Reunión" },
        ]}
        initial={[
          { id: 1, nombre: "Alabanza y Adoración", lider: "Pedro Ramírez", integrantes: 22, dia: "Jueves" },
          { id: 2, nombre: "Jóvenes", lider: "Andrés Gómez", integrantes: 40, dia: "Sábado" },
          { id: 3, nombre: "Niños (Escuela Dominical)", lider: "Ruth Díaz", integrantes: 18, dia: "Domingo" },
          { id: 4, nombre: "Intercesión", lider: "María López", integrantes: 15, dia: "Martes" },
        ]} />
    </div>
  );
}
