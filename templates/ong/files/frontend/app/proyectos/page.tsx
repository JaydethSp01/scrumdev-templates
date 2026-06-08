"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
const tone = (e: string) => (e === "Activo" ? "success" : e === "Finalizado" ? "info" : "warning");
export default function ProyectosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Proyectos" subtitle="Iniciativas sociales por programa, presupuesto y estado." />
      <CrudTable title="Proyectos"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "programa", label: "Programa" },
          { key: "presupuesto", label: "Presupuesto", type: "number", render: (r: any) => <span className="font-medium text-slate-900">${Number(r.presupuesto).toLocaleString("es-CO")}</span> },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Aulas Digitales", programa: "Educación", presupuesto: 25000000, estado: "Activo" },
          { id: 2, nombre: "Brigadas de Salud", programa: "Salud", presupuesto: 18000000, estado: "Activo" },
          { id: 3, nombre: "Comedor Comunitario", programa: "Alimentación", presupuesto: 12000000, estado: "En pausa" },
          { id: 4, nombre: "Techo Digno", programa: "Vivienda", presupuesto: 40000000, estado: "Finalizado" },
        ]} />
    </div>
  );
}
