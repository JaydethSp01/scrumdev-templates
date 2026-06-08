"use client";
import Link from "next/link";
import { useState } from "react";
import { Home, CalendarCheck, Handshake, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Propiedades activas", value: 142, icon: <Home size={20} />, trend: { value: "5%", positive: true } },
    { label: "Visitas agendadas", value: 38, icon: <CalendarCheck size={20} />, trend: { value: "9%", positive: true } },
    { label: "En negociación", value: 12, icon: <Handshake size={20} />, trend: { value: "2%", positive: true } },
    { label: "Ventas del mes", value: "$840M", icon: <DollarSign size={20} />, trend: { value: "14%", positive: true } },
  ],
  ventas: [
    { label: "Ene", value: 520 }, { label: "Feb", value: 610 }, { label: "Mar", value: 580 },
    { label: "Abr", value: 720 }, { label: "May", value: 690 }, { label: "Jun", value: 840 },
  ],
  visitas: [
    { propiedad: "Apto 302 · Laureles", cliente: "Juan Pérez", agente: "Camila Ríos", hora: "10:00", estado: "Confirmada" },
    { propiedad: "Casa Campestre · Llanogrande", cliente: "Ana Gómez", agente: "Diego Mora", hora: "11:30", estado: "Pendiente" },
    { propiedad: "Local 14 · El Poblado", cliente: "Carlos Ruiz", agente: "Valentina Soto", hora: "14:00", estado: "Confirmada" },
    { propiedad: "Lote 7 · Rionegro", cliente: "Laura Martínez", agente: "Camila Ríos", hora: "16:30", estado: "Cancelada" },
  ],
};

const tone = (e: string) => (e === "Confirmada" ? "success" : e === "Pendiente" ? "warning" : "danger");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero
        title="Bienvenido, Inmobiliaria X"
        subtitle="Tienes 142 propiedades activas y 38 visitas agendadas. 12 negocios están en negociación."
        action={<Link href="/propiedades"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nueva propiedad</Button></Link>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} trend={s.trend} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="area" title="Ventas / arriendos por mes" subtitle="Millones $" data={data.ventas} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por tipo</h3>
          <div className="space-y-3">
            {[
              { n: "Apartamento", p: 46 }, { n: "Casa", p: 29 },
              { n: "Local", p: 15 }, { n: "Lote", p: 10 },
            ].map((t) => (
              <div key={t.n}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{t.n}</span>
                  <span className="text-slate-500">{t.p}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${t.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Próximas visitas</h3>
          <Badge tone="brand">{data.visitas.length} hoy</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.visitas.map((v, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={v.agente} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{v.propiedad}</p>
                <p className="truncate text-sm text-slate-500">{v.cliente} · {v.agente}</p>
              </div>
              <span className="hidden text-sm font-medium text-slate-600 sm:block">{v.hora}</span>
              <Badge tone={tone(v.estado)}>{v.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
