"use client";
import { useState } from "react";
import Link from "next/link";
import { Sparkles, Users, Flower2, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Citas hoy", value: 18, icon: <Sparkles size={20} />, trend: { value: "8%", positive: true } },
    { label: "Clientes", value: 426, icon: <Users size={20} />, trend: { value: "5%", positive: true } },
    { label: "Servicios", value: 32, icon: <Flower2 size={20} />, trend: { value: "3%", positive: true } },
    { label: "Ingresos del mes", value: "$12.4M", icon: <DollarSign size={20} />, trend: { value: "14%", positive: true } },
  ],
  citasDia: [
    { label: "Lun", value: 12 }, { label: "Mar", value: 16 }, { label: "Mié", value: 14 },
    { label: "Jue", value: 19 }, { label: "Vie", value: 24 }, { label: "Sáb", value: 28 },
  ],
  servicios: [
    { n: "Masajes", p: 92 }, { n: "Faciales", p: 74 }, { n: "Depilación", p: 58 }, { n: "Manicure", p: 45 },
  ],
  proximas: [
    { cliente: "Valentina Ríos", servicio: "Masaje relajante", hora: "10:00 am", estado: "Confirmada" },
    { cliente: "Camila Soto", servicio: "Limpieza facial", hora: "11:30 am", estado: "En espera" },
    { cliente: "Andrea Pinto", servicio: "Manicure spa", hora: "01:00 pm", estado: "Atendida" },
    { cliente: "Lucía Moreno", servicio: "Depilación cera", hora: "03:30 pm", estado: "Confirmada" },
  ],
};

const tone = (e: string) => (e === "Confirmada" ? "success" : e === "En espera" ? "warning" : "neutral");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Spa Aurora"
        subtitle="18 citas hoy · 426 clientes activos. Que sea un día de bienestar y relajación."
        action={<Link href="/citas"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Agendar cita</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Citas por día" subtitle="Esta semana" data={data.citasDia} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Servicios más pedidos</h3>
          <div className="space-y-3">
            {data.servicios.map((m) => (
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
          <Badge tone="brand">{data.proximas.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.proximas.map((c, i) => (
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
