"use client";
import { useState } from "react";
import Link from "next/link";
import { Smile, Users, Stethoscope, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Citas hoy", value: 18, icon: <Smile size={20} />, trend: { value: "8%", positive: true } },
    { label: "Pacientes", value: 642, icon: <Users size={20} />, trend: { value: "5%", positive: true } },
    { label: "Tratamientos activos", value: 73, icon: <Stethoscope size={20} />, trend: { value: "3%", positive: true } },
    { label: "Ingresos del mes", value: "$28.4M", icon: <DollarSign size={20} />, trend: { value: "12%", positive: true } },
  ],
  citasDia: [
    { label: "Lun", value: 16 }, { label: "Mar", value: 22 }, { label: "Mié", value: 19 },
    { label: "Jue", value: 25 }, { label: "Vie", value: 28 }, { label: "Sáb", value: 12 },
  ],
  proximas: [
    { paciente: "Juan Pérez", tratamiento: "Limpieza dental", hora: "Hoy · 09:00", estado: "Confirmada" },
    { paciente: "Ana Gómez", tratamiento: "Ortodoncia (control)", hora: "Hoy · 10:30", estado: "En espera" },
    { paciente: "Carlos Ruiz", tratamiento: "Endodoncia", hora: "Hoy · 12:00", estado: "Atendido" },
    { paciente: "Laura Martínez", tratamiento: "Blanqueamiento", hora: "Hoy · 15:30", estado: "Confirmada" },
  ],
};
type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tone = (s: string): Tone => (s === "Confirmada" ? "success" : s === "En espera" ? "warning" : "info");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Clínica Dental X"
        subtitle="18 citas programadas hoy · 642 pacientes activos. Que tengas una jornada con muchas sonrisas."
        action={<Link href="/citas"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Agendar cita</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Citas por día" subtitle="Esta semana" data={data.citasDia} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Tratamientos frecuentes</h3>
          <div className="space-y-3">
            {[{ n: "Limpieza", p: 92 }, { n: "Ortodoncia", p: 68 }, { n: "Endodoncia", p: 45 }, { n: "Blanqueamiento", p: 34 }].map((m) => (
              <div key={m.n}>
                <div className="mb-1 flex justify-between text-sm"><span className="font-medium text-slate-700">{m.n}</span><span className="text-slate-500">{m.p}%</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand" style={{ width: `${m.p}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Próximas citas</h3>
          <Badge tone="brand">{data.proximas.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.proximas.map((c, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={c.paciente} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{c.paciente}</p><p className="truncate text-sm text-slate-500">{c.tratamiento} · {c.hora}</p></div>
              <Badge tone={tone(c.estado)}>{c.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
