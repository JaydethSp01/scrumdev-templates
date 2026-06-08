"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function MateriasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Materias" subtitle="Oferta académica: asignaturas, docente asignado, créditos y cupos." />
      <CrudTable title="Materias"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "docente", label: "Docente" },
          { key: "creditos", label: "Créditos", type: "number" },
          { key: "cupo", label: "Cupo", type: "number", render: (r: any) => <Badge tone={Number(r.cupo) > 0 ? "success" : "warning"}>{Number(r.cupo) > 0 ? `${r.cupo} disp.` : "Lleno"}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Cálculo I", docente: "Ing. Laura Méndez", creditos: 4, cupo: 12 },
          { id: 2, nombre: "Programación Web", docente: "Mg. Carlos Ríos", creditos: 3, cupo: 5 },
          { id: 3, nombre: "Bases de Datos", docente: "PhD. Ana Torres", creditos: 4, cupo: 0 },
          { id: 4, nombre: "Inglés III", docente: "Lic. Sara Gil", creditos: 2, cupo: 20 },
        ]} />
    </div>
  );
}
