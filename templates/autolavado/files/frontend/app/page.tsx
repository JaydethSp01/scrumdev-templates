"use client";
import Link from "next/link";
import { useState } from "react";
import { Car, Droplets, Users, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Servicios hoy", value: 42, icon: <Car size={20} />, trend: { value: "9%", positive: true } },
    { label: "Vehículos en cola", value: 6, icon: <Droplets size={20} />, trend: { value: "2", positive: false } },
    { label: "Empleados", value: 12, icon: <Users size={20} /> },
    { label: "Ingresos del día", value: "$1.8M", icon: <DollarSign size={20} />, trend: { value: "14%", positive: true } },
  ],
  semana: [
    { label: "Lun", value: 28 }, { label: "Mar", value: 35 }, { label: "Mié", value: 31 },
    { label: "Jue", value: 40 }, { label: "Vie", value: 48 }, { label: "Sáb", value: 62 }, { label: "Dom", value: 22 },
  ],
  populares: [
    { n: "Lavado básico", p: 90 },
    { n: "Lavado premium", p: 64 },
    { n: "Encerado", p: 42 },
    { n: "Polichado", p: 28 },
  ],
  proceso: [
    { vehiculo: "Mazda 3 · KJP-21A", cliente: "Juan Pérez", estado: "Lavando" },
    { vehiculo: "Renault Logan · FGT-90C", cliente: "Ana Gómez", estado: "En espera" },
    { vehiculo: "Toyota Hilux · DRT-55B", cliente: "Carlos Ruiz", estado: "Listo" },
    { vehiculo: "Chevrolet Onix · HJK-12D", cliente: "Laura Martínez", estado: "Lavando" },
  ],
};

const tone = (e: string) => (e === "Listo" ? "success" : e === "Lavando" ? "info" : "warning");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero
        title="Bienvenido, Autolavado X"
        subtitle="Llevas 42 servicios hoy y 6 vehículos en cola. Ingresos del día: $1.8M."
        action={<Link href="/servicios"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nuevo servicio</Button></Link>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} trend={s.trend} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Servicios por día" subtitle="Esta semana" data={data.semana} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Servicios más pedidos</h3>
          <div className="space-y-3">
            {data.populares.map((e) => (
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
          <h3 className="text-base font-semibold text-slate-900">Vehículos en proceso</h3>
          <Badge tone="brand">{data.proceso.length} activos</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.proceso.map((v, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={v.cliente} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{v.vehiculo}</p>
                <p className="truncate text-sm text-slate-500">{v.cliente}</p>
              </div>
              <Badge tone={tone(v.estado)}>{v.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
