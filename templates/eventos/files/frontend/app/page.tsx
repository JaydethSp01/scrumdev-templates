"use client";
import { useState } from "react";
import Link from "next/link";
import { CalendarHeart, Users, DollarSign, Briefcase, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Eventos este mes", value: 18, icon: <CalendarHeart size={20} />, trend: { value: "9%", positive: true } },
    { label: "Clientes", value: 124, icon: <Users size={20} />, trend: { value: "5%", positive: true } },
    { label: "Ingresos del mes", value: "$38.5M", icon: <DollarSign size={20} />, trend: { value: "14%", positive: true } },
    { label: "Proveedores", value: 42, icon: <Briefcase size={20} />, trend: { value: "3%", positive: true } },
  ],
  ingresos: [
    { label: "Ene", value: 22000 }, { label: "Feb", value: 26500 }, { label: "Mar", value: 24000 },
    { label: "Abr", value: 31000 }, { label: "May", value: 34500 }, { label: "Jun", value: 38500 },
  ],
  tipos: [
    { n: "Boda", p: 95 }, { n: "Corporativo", p: 68 }, { n: "Cumpleaños", p: 50 }, { n: "Grado", p: 32 },
  ],
  proximos: [
    { cliente: "María & Andrés", evento: "Boda en Hacienda El Roble", fecha: "14 jun 2026 · 5:00 pm", estado: "Confirmado" },
    { cliente: "Grupo Vértice", evento: "Lanzamiento corporativo", fecha: "20 jun 2026 · 7:00 pm", estado: "Cotización" },
    { cliente: "Familia Restrepo", evento: "Cumpleaños 50 años", fecha: "22 jun 2026 · 1:00 pm", estado: "En curso" },
    { cliente: "Promoción 2026", evento: "Grado universitario", fecha: "28 jun 2026 · 6:30 pm", estado: "Confirmado" },
  ],
};
type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const estadoTone = (s: string): Tone => (s === "Confirmado" ? "success" : s === "Cotización" ? "warning" : "info");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Eventos X"
        subtitle="18 eventos este mes · 124 clientes activos. Que cada celebración sea inolvidable."
        action={<Link href="/eventos"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nuevo evento</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="area" title="Ingresos por mes" subtitle="Miles $" data={data.ingresos} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por tipo de evento</h3>
          <div className="space-y-3">
            {data.tipos.map((t) => (
              <div key={t.n}>
                <div className="mb-1 flex justify-between text-sm"><span className="font-medium text-slate-700">{t.n}</span><span className="text-slate-500">{t.p}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand" style={{ width: `${t.p}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Próximos eventos</h3>
          <Badge tone="brand">{data.proximos.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.proximos.map((e, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={e.cliente} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{e.evento}</p><p className="truncate text-sm text-slate-500">{e.cliente} · {e.fecha}</p></div>
              <Badge tone={estadoTone(e.estado)}>{e.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
