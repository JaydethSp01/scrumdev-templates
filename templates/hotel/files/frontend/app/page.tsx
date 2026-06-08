"use client";
import { useState } from "react";
import Link from "next/link";
import { BedDouble, CalendarCheck, DoorOpen, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Ocupación", value: "82%", icon: <BedDouble size={20} />, trend: { value: "5%", positive: true } },
    { label: "Reservas hoy", value: 14, icon: <CalendarCheck size={20} />, trend: { value: "9%", positive: true } },
    { label: "Habitaciones libres", value: 12, icon: <DoorOpen size={20} />, trend: { value: "3%", positive: false } },
    { label: "Ingresos del mes", value: "$48.6M", icon: <DollarSign size={20} />, trend: { value: "12%", positive: true } },
  ],
  ocupacion: [
    { label: "Ene", value: 62 }, { label: "Feb", value: 68 }, { label: "Mar", value: 71 },
    { label: "Abr", value: 75 }, { label: "May", value: 79 }, { label: "Jun", value: 82 },
  ],
  tipos: [
    { n: "Sencilla", p: 60 }, { n: "Doble", p: 85 }, { n: "Suite", p: 45 },
  ],
  llegadas: [
    { huesped: "Juan Pérez", detalle: "Hab. 101 · Doble · 2 noches", estado: "Confirmada" },
    { huesped: "Ana Gómez", detalle: "Hab. 205 · Suite · 3 noches", estado: "Check-in" },
    { huesped: "Carlos Ruiz", detalle: "Hab. 110 · Sencilla · 1 noche", estado: "Pendiente" },
    { huesped: "Laura Martínez", detalle: "Hab. 302 · Suite · 4 noches", estado: "Confirmada" },
  ],
};
const tone = (e: string) => (e === "Check-in" ? "success" : e === "Pendiente" ? "warning" : "brand");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Hotel X"
        subtitle="82% de ocupación · 14 reservas hoy. Que tengas una excelente jornada."
        action={<Link href="/reservas"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nueva reserva</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="area" title="Ocupación por mes" subtitle="% promedio" data={data.ocupacion} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por tipo de habitación</h3>
          <div className="space-y-3">
            {data.tipos.map((m) => (
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
          <h3 className="text-base font-semibold text-slate-900">Llegadas de hoy</h3>
          <Badge tone="brand">{data.llegadas.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.llegadas.map((l, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={l.huesped} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{l.huesped}</p><p className="truncate text-sm text-slate-500">{l.detalle}</p></div>
              <Badge tone={tone(l.estado)}>{l.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
