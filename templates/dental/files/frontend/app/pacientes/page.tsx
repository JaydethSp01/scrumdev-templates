"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const toneFor = (s: string): Tone => (s === "EPS" ? "info" : "brand");

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pacientes" subtitle="Gestiona los pacientes de la clínica dental." />
      <CrudTable
        title="Pacientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "edad", label: "Edad", type: "number" },
          { key: "telefono", label: "Teléfono" },
          { key: "eps_o_particular", label: "EPS / Particular", render: (r: any) => <Badge tone={toneFor(r.eps_o_particular === "Particular" ? "Particular" : "EPS")}>{r.eps_o_particular}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Juan Pérez", edad: 34, telefono: "300 123 4567", eps_o_particular: "Sura" },
          { id: 2, nombre: "Ana Gómez", edad: 28, telefono: "301 765 4321", eps_o_particular: "Particular" },
          { id: 3, nombre: "Carlos Ruiz", edad: 45, telefono: "310 222 1133", eps_o_particular: "Nueva EPS" },
          { id: 4, nombre: "Laura Martínez", edad: 39, telefono: "320 555 9090", eps_o_particular: "Particular" },
          { id: 5, nombre: "Pedro Sánchez", edad: 52, telefono: "315 888 7766", eps_o_particular: "Sanitas" },
        ]}
      />
    </div>
  );
}
