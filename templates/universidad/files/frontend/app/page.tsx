"use client";
import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Users, BookOpen, Award, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Estudiantes", value: 1840, icon: <GraduationCap size={20} />, trend: { value: "8%", positive: true } },
    { label: "Docentes", value: 126, icon: <Users size={20} />, trend: { value: "3%", positive: true } },
    { label: "Materias activas", value: 92, icon: <BookOpen size={20} />, trend: { value: "5%", positive: true } },
    { label: "Promedio general", value: "4.1", icon: <Award size={20} />, trend: { value: "2%", positive: true } },
  ],
  matriculas: [
    { label: "2024-1", value: 1520 }, { label: "2024-2", value: 1610 }, { label: "2025-1", value: 1685 },
    { label: "2025-2", value: 1720 }, { label: "2026-1", value: 1840 }, { label: "2026-2", value: 1910 },
  ],
  eventos: [
    { titulo: "Cálculo I — Parcial 2", cuando: "Lunes 8:00 am · Aula 301", docente: "Ing. Laura Méndez", tipo: "Examen" },
    { titulo: "Programación Web", cuando: "Martes 10:00 am · Lab 2", docente: "Mg. Carlos Ríos", tipo: "Clase" },
    { titulo: "Bases de Datos — Entrega", cuando: "Miércoles 2:00 pm · Aula 105", docente: "PhD. Ana Torres", tipo: "Entrega" },
    { titulo: "Inglés III", cuando: "Jueves 9:00 am · Aula 210", docente: "Lic. Sara Gil", tipo: "Clase" },
  ],
};
const tone = (t: string) => (t === "Examen" ? "warning" : t === "Entrega" ? "info" : "brand");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Universidad X"
        subtitle="1840 estudiantes activos · periodo 2026-1. Gestiona la vida académica del campus."
        action={<Link href="/matriculas"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nueva matrícula</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="area" title="Matrículas por periodo" subtitle="Estudiantes" data={data.matriculas} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Estudiantes por facultad</h3>
          <div className="space-y-3">
            {[{ n: "Ingeniería", p: 88 }, { n: "Ciencias de la Salud", p: 64 }, { n: "Administración", p: 52 }, { n: "Artes y Humanidades", p: 35 }].map((f) => (
              <div key={f.n}>
                <div className="mb-1 flex justify-between text-sm"><span className="font-medium text-slate-700">{f.n}</span><span className="text-slate-500">{f.p}%</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand" style={{ width: `${f.p}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Próximas clases y exámenes</h3>
          <Badge tone="brand">{data.eventos.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.eventos.map((e, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={e.docente} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{e.titulo}</p><p className="truncate text-sm text-slate-500">{e.cuando} · {e.docente}</p></div>
              <Badge tone={tone(e.tipo)}>{e.tipo}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
