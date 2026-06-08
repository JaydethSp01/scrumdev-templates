"use client";
import { useState } from "react";
import Link from "next/link";
import { Coffee, ShoppingBag, Package, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Ventas hoy", value: "$1.8M", icon: <Coffee size={20} />, trend: { value: "8%", positive: true } },
    { label: "Pedidos hoy", value: 142, icon: <ShoppingBag size={20} />, trend: { value: "5%", positive: true } },
    { label: "Productos", value: 64, icon: <Package size={20} />, trend: { value: "2%", positive: true } },
    { label: "Ingresos del mes", value: "$38.6M", icon: <DollarSign size={20} />, trend: { value: "12%", positive: true } },
  ],
  ventasHora: [
    { label: "7am", value: 120 }, { label: "9am", value: 320 }, { label: "11am", value: 410 },
    { label: "1pm", value: 520 }, { label: "3pm", value: 380 }, { label: "5pm", value: 290 },
    { label: "7pm", value: 210 },
  ],
  masVendidos: [
    { n: "Café", p: 92 }, { n: "Pastelería", p: 68 }, { n: "Sándwiches", p: 54 }, { n: "Bebidas frías", p: 41 },
  ],
  pedidos: [
    { cliente: "Mesa 4 · Laura", detalle: "2 Capuchinos · 1 Croissant", estado: "Preparando" },
    { cliente: "Mesa 2 · Andrés", detalle: "1 Latte · 1 Sándwich", estado: "Listo" },
    { cliente: "Para llevar · Sofía", detalle: "1 Frappé · 1 Brownie", estado: "Pendiente" },
    { cliente: "Mesa 7 · Camilo", detalle: "3 Americanos", estado: "Entregado" },
  ],
};
const tone = (e: string) => (e === "Listo" ? "success" : e === "Preparando" ? "info" : e === "Pendiente" ? "warning" : "neutral");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Café X"
        subtitle="142 pedidos hoy · $1.8M en ventas. ¡Que tengas un excelente turno!"
        action={<Link href="/pedidos"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nuevo pedido</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Ventas por hora" subtitle="Miles $" data={data.ventasHora} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Más vendidos</h3>
          <div className="space-y-3">
            {data.masVendidos.map((m) => (
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
          <h3 className="text-base font-semibold text-slate-900">Pedidos en curso</h3>
          <Badge tone="brand">{data.pedidos.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.pedidos.map((p, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={p.cliente} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{p.cliente}</p><p className="truncate text-sm text-slate-500">{p.detalle}</p></div>
              <Badge tone={tone(p.estado)}>{p.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
