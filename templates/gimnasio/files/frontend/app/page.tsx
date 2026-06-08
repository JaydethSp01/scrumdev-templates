"use client";
import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Users, CalendarClock, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Miembros activos", value: 312, icon: <Dumbbell size={20} />, trend: { value: "8%", positive: true } },
    { label: "Asistencia hoy", value: 124, icon: <Users size={20} />, trend: { value: "5%", positive: true } },
    { label: "Membresías por vencer", value: 18, icon: <CalendarClock size={20} />, trend: { value: "3%", positive: false } },
    { label: "Ingresos del mes", value: "$12.8M", icon: <DollarSign size={20} />, trend: { value: "14%", positive: true } },
  ],
  asistencia: [
    { label: "Lun", value: 120 }, { label: "Mar", value: 145 }, { label: "Mié", value: 110 },
    { label: "Jue", value: 160 }, { label: "Vie", value: 175 }, { label: "Sáb", value: 90 }, { label: "Dom", value: 60 },
  ],
  clasesHoy: [
    { titulo: "Spinning Matutino", hora: "6:00 am", entrenador: "Laura Méndez", tipo: "Spinning" },
    { titulo: "Crossfit WOD", hora: "9:00 am", entrenador: "Carlos Ríos", tipo: "Crossfit" },
    { titulo: "Yoga Flow", hora: "5:00 pm", entrenador: "Ana Salas", tipo: "Yoga" },
    { titulo: "Spinning Power", hora: "7:00 pm", entrenador: "Diego Torres", tipo: "Spinning" },
  ],
};
const tone = (t: string) => (t === "Spinning" ? "brand" : t === "Crossfit" ? "warning" : "info");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="¡A entrenar, Gimnasio X!"
        subtitle="312 miembros activos · 124 asistencias hoy. ¡Que sea un gran día de entrenamiento!"
        action={<Link href="/clases"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Programar clase</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Asistencia por día" subtitle="Visitas" data={data.asistencia} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Clases más populares</h3>
          <div className="space-y-3">
            {[{ n: "Spinning", p: 92 }, { n: "Crossfit", p: 78 }, { n: "Yoga", p: 64 }, { n: "Funcional", p: 48 }].map((m) => (
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
          <h3 className="text-base font-semibold text-slate-900">Clases de hoy</h3>
          <Badge tone="brand">{data.clasesHoy.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.clasesHoy.map((c, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={c.entrenador} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{c.titulo}</p><p className="truncate text-sm text-slate-500">{c.hora} · {c.entrenador}</p></div>
              <Badge tone={tone(c.tipo)}>{c.tipo}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
