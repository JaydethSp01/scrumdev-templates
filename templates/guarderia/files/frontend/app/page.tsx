"use client";
import { useState } from "react";
import Link from "next/link";
import { Baby, Users, GraduationCap, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Niños matriculados", value: 128, icon: <Baby size={20} />, trend: { value: "5%", positive: true } },
    { label: "Asistencia hoy", value: 116, icon: <Users size={20} />, trend: { value: "3%", positive: true } },
    { label: "Docentes", value: 14, icon: <GraduationCap size={20} />, trend: { value: "2", positive: true } },
    { label: "Mensualidades del mes", value: "$38.4M", icon: <DollarSign size={20} />, trend: { value: "8%", positive: true } },
  ],
  asistencia: [
    { label: "Lun", value: 118 }, { label: "Mar", value: 122 }, { label: "Mié", value: 110 },
    { label: "Jue", value: 116 }, { label: "Vie", value: 104 },
  ],
  niveles: [
    { n: "Párvulos", p: 85 }, { n: "Pre-jardín", p: 70 }, { n: "Jardín", p: 60 }, { n: "Transición", p: 45 },
  ],
  actividades: [
    { titulo: "Clase de psicomotricidad", docente: "Profe Camila", nivel: "Párvulos", tipo: "Clase" },
    { titulo: "Refrigerio de media mañana", docente: "Profe Daniela", nivel: "Pre-jardín", tipo: "Refrigerio" },
    { titulo: "Hora de descanso", docente: "Profe Marcela", nivel: "Jardín", tipo: "Siesta" },
    { titulo: "Juego libre en el patio", docente: "Profe Andrés", nivel: "Transición", tipo: "Recreo" },
  ],
};
const tone = (t: string) =>
  t === "Clase" ? "brand" : t === "Refrigerio" ? "success" : t === "Siesta" ? "info" : "warning";

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenidos, Jardín Mis Pequeños Gigantes"
        subtitle="128 niños matriculados · 116 asistieron hoy. ¡Que tengan un día lleno de aprendizaje y juego!"
        action={<Link href="/ninos"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Matricular niño</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Asistencia por día" subtitle="Niños presentes" data={data.asistencia} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por nivel</h3>
          <div className="space-y-3">
            {data.niveles.map((m) => (
              <div key={m.n}>
                <div className="mb-1 flex justify-between text-sm"><span className="font-medium text-slate-700">{m.n}</span><span className="text-slate-500">{m.p}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand" style={{ width: `${m.p}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Actividades de hoy</h3>
          <Badge tone="brand">{data.actividades.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.actividades.map((a, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={a.docente} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{a.titulo}</p><p className="truncate text-sm text-slate-500">{a.docente} · {a.nivel}</p></div>
              <Badge tone={tone(a.tipo)}>{a.tipo}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
