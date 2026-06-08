"use client";
import { useState } from "react";
import Link from "next/link";
import { Wrench, Car, DollarSign, AlertTriangle, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Órdenes abiertas", value: 18, icon: <Wrench size={20} />, trend: { value: "8%", positive: true } },
    { label: "Vehículos en taller", value: 12, icon: <Car size={20} />, trend: { value: "3%", positive: true } },
    { label: "Ingresos del mes", value: "$18.6M", icon: <DollarSign size={20} />, trend: { value: "12%", positive: true } },
    { label: "Repuestos bajos", value: 7, icon: <AlertTriangle size={20} />, trend: { value: "2%", positive: false } },
  ],
  ordenesDia: [
    { label: "Lun", value: 6 }, { label: "Mar", value: 9 }, { label: "Mié", value: 7 },
    { label: "Jue", value: 11 }, { label: "Vie", value: 14 }, { label: "Sáb", value: 8 },
  ],
  servicios: [
    { n: "Frenos", p: 85 }, { n: "Cambio de aceite", p: 72 }, { n: "Motor", p: 54 }, { n: "Llantas", p: 41 },
  ],
  ordenes: [
    { vehiculo: "Mazda 3 · GHK-482", cliente: "Juan Pérez", servicio: "Cambio de frenos", estado: "En proceso" },
    { vehiculo: "Chevrolet Sail · KLP-203", cliente: "Ana Gómez", servicio: "Cambio de aceite", estado: "Listo" },
    { vehiculo: "Renault Logan · DQR-119", cliente: "Carlos Ruiz", servicio: "Revisión de motor", estado: "En proceso" },
    { vehiculo: "Toyota Corolla · TWZ-660", cliente: "Laura Martínez", servicio: "Alineación y balanceo", estado: "Entregado" },
  ],
};
type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tone = (s: string): Tone => (s === "Entregado" ? "success" : s === "Listo" ? "info" : "warning");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Taller X"
        subtitle="18 órdenes abiertas · 12 vehículos en taller. Mantén el flujo de trabajo al día."
        action={<Link href="/ordenes"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nueva orden</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Órdenes por día" subtitle="Esta semana" data={data.ordenesDia} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Servicios frecuentes</h3>
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
          <Badge tone="brand">{data.ordenes.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.ordenes.map((o, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={o.cliente} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{o.servicio}</p><p className="truncate text-sm text-slate-500">{o.vehiculo} · {o.cliente}</p></div>
              <Badge tone={tone(o.estado)}>{o.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
