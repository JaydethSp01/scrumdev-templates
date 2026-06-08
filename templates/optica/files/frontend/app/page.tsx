"use client";
import Link from "next/link";
import { useState } from "react";
import { Eye, Users, ClipboardList, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";

const MOCK = {
  stats: [
    { label: "Ventas hoy", value: 32, icon: <Eye size={20} />, trend: { value: "9%", positive: true } },
    { label: "Pacientes", value: 1840, icon: <Users size={20} />, trend: { value: "5%", positive: true } },
    { label: "Exámenes del mes", value: 214, icon: <ClipboardList size={20} />, trend: { value: "12%", positive: true } },
    { label: "Ingresos del mes", value: "$28.5M", icon: <DollarSign size={20} />, trend: { value: "7%", positive: true } },
  ],
  ventas: [
    { label: "Lun", value: 18 }, { label: "Mar", value: 24 }, { label: "Mié", value: 21 },
    { label: "Jue", value: 30 }, { label: "Vie", value: 35 }, { label: "Sáb", value: 28 }, { label: "Dom", value: 9 },
  ],
  productos: [
    { n: "Monturas", p: 42 },
    { n: "Lentes de contacto", p: 26 },
    { n: "Gafas de sol", p: 20 },
    { n: "Accesorios", p: 12 },
  ],
  examenes: [
    { paciente: "Juan Pérez", optometra: "Dra. Rodríguez", hora: "09:00", estado: "Listo" },
    { paciente: "Ana Gómez", optometra: "Dr. Fernández", hora: "10:30", estado: "En curso" },
    { paciente: "Carlos Ruiz", optometra: "Dra. López", hora: "12:00", estado: "Agendado" },
    { paciente: "Laura Martínez", optometra: "Dr. Gómez", hora: "15:30", estado: "Agendado" },
  ],
};

const estadoTone = (e: string): Tone =>
  e === "Listo" ? "success" : e === "En curso" ? "warning" : "info";

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero
        title="Bienvenido, Óptica Visión"
        subtitle="Tienes 32 ventas hoy y 214 exámenes este mes. ¡Que sea un gran día en la óptica!"
        action={<Link href="/ventas"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nueva venta</Button></Link>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} trend={s.trend} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Ventas por día" subtitle="Esta semana" data={data.ventas} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Productos más vendidos</h3>
          <div className="space-y-3">
            {data.productos.map((e) => (
              <div key={e.n}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{e.n}</span>
                  <span className="text-slate-500">{e.p}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${e.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Exámenes de hoy</h3>
          <Badge tone="brand">{data.examenes.length} hoy</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.examenes.map((c, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={c.paciente} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{c.paciente}</p>
                <p className="truncate text-sm text-slate-500">{c.optometra}</p>
              </div>
              <span className="hidden text-sm font-medium text-slate-600 sm:block">{c.hora}</span>
              <Badge tone={estadoTone(c.estado)}>{c.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
