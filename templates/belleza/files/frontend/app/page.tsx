"use client";
import { useState } from "react";
import Link from "next/link";
import { Scissors, Users, Sparkles, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Citas hoy", value: 18, icon: <Scissors size={20} />, trend: { value: "9%", positive: true } },
    { label: "Clientes", value: 426, icon: <Users size={20} />, trend: { value: "5%", positive: true } },
    { label: "Servicios", value: 12, icon: <Sparkles size={20} />, trend: { value: "2%", positive: true } },
    { label: "Ingresos del mes", value: "$8.4M", icon: <DollarSign size={20} />, trend: { value: "13%", positive: true } },
  ],
  citasPorDia: [
    { label: "Lun", value: 14 }, { label: "Mar", value: 18 }, { label: "Mié", value: 12 },
    { label: "Jue", value: 20 }, { label: "Vie", value: 26 }, { label: "Sáb", value: 32 }, { label: "Dom", value: 8 },
  ],
  proximasCitas: [
    { cliente: "Laura Méndez", servicio: "Corte y peinado", hora: "10:00 am", estado: "Confirmada" },
    { cliente: "Carlos Ríos", servicio: "Barba y perfilado", hora: "11:30 am", estado: "Pendiente" },
    { cliente: "Ana Salas", servicio: "Tinte completo", hora: "1:00 pm", estado: "Confirmada" },
    { cliente: "Diego Torres", servicio: "Manicure", hora: "3:30 pm", estado: "En curso" },
  ],
};
const tone = (e: string) => (e === "Confirmada" ? "success" : e === "Pendiente" ? "warning" : "info");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Hola, Barbería/Salón Bella X"
        subtitle="18 citas hoy · 426 clientes. ¡Que sea un gran día de estilo y belleza!"
        action={<Link href="/citas"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nueva cita</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Citas por día" subtitle="Citas" data={data.citasPorDia} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Servicios más pedidos</h3>
          <div className="space-y-3">
            {[{ n: "Corte", p: 94 }, { n: "Tinte", p: 72 }, { n: "Barba", p: 60 }, { n: "Manicure", p: 45 }].map((m) => (
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
          <h3 className="text-base font-semibold text-slate-900">Próximas citas</h3>
          <Badge tone="brand">{data.proximasCitas.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.proximasCitas.map((c, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={c.cliente} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{c.cliente}</p><p className="truncate text-sm text-slate-500">{c.servicio} · {c.hora}</p></div>
              <Badge tone={tone(c.estado)}>{c.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
