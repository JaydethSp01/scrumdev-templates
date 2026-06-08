"use client";
import { useState } from "react";
import Link from "next/link";
import { Shirt, Users, PackageCheck, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Órdenes hoy", value: 32, icon: <Shirt size={20} />, trend: { value: "8%", positive: true } },
    { label: "Clientes", value: 412, icon: <Users size={20} />, trend: { value: "5%", positive: true } },
    { label: "Por entregar", value: 18, icon: <PackageCheck size={20} />, trend: { value: "3%", positive: false } },
    { label: "Ingresos del mes", value: "$8.6M", icon: <DollarSign size={20} />, trend: { value: "12%", positive: true } },
  ],
  ordenesDia: [
    { label: "Lun", value: 24 }, { label: "Mar", value: 30 }, { label: "Mié", value: 28 },
    { label: "Jue", value: 35 }, { label: "Vie", value: 42 }, { label: "Sáb", value: 38 },
  ],
  servicios: [
    { n: "Lavado", p: 88 }, { n: "Planchado", p: 64 }, { n: "Lavado en seco", p: 47 }, { n: "Tintorería", p: 29 },
  ],
  recientes: [
    { cliente: "María López", servicio: "Lavado", estado: "Recibida" },
    { cliente: "Carlos Ruiz", servicio: "Planchado", estado: "En proceso" },
    { cliente: "Ana Gómez", servicio: "Lavado en seco", estado: "Lista" },
    { cliente: "Pedro Sánchez", servicio: "Tintorería", estado: "Entregada" },
  ],
};

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const ESTADO_TONE: Record<string, Tone> = {
  Recibida: "info",
  "En proceso": "warning",
  Lista: "brand",
  Entregada: "success",
};
const toneFor = (e: string): Tone => ESTADO_TONE[e] ?? "neutral";

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Lavandería X"
        subtitle="32 órdenes hoy · 18 por entregar. Mantén el flujo de trabajo al día."
        action={<Link href="/ordenes"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nueva orden</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Órdenes por día" subtitle="Últimos 6 días" data={data.ordenesDia} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Servicios más usados</h3>
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
          <h3 className="text-base font-semibold text-slate-900">Órdenes recientes</h3>
          <Badge tone="brand">{data.recientes.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.recientes.map((o, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={o.cliente} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{o.cliente}</p><p className="truncate text-sm text-slate-500">{o.servicio}</p></div>
              <Badge tone={toneFor(o.estado)}>{o.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
