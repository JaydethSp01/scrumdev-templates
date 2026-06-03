"use client";
import { useState } from "react";
import { ShoppingBag, DollarSign, Users, Clock, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Pedidos hoy", value: 142, icon: <ShoppingBag size={20} />, trend: { value: "9%", positive: true } },
    { label: "Ventas", value: "$3.840", icon: <DollarSign size={20} />, trend: { value: "14%", positive: true } },
    { label: "Mesas ocupadas", value: "18/24", icon: <Users size={20} />, trend: { value: "5%", positive: true } },
    { label: "Ticket promedio", value: "$27,0", icon: <Clock size={20} />, trend: { value: "2%", positive: false } },
  ],
  horas: [
    { label: "12h", value: 14 }, { label: "13h", value: 28 }, { label: "14h", value: 22 },
    { label: "15h", value: 9 }, { label: "19h", value: 18 }, { label: "20h", value: 31 }, { label: "21h", value: 20 },
  ],
  categorias: [
    { n: "Pizzas", p: 34 }, { n: "Pastas", p: 26 },
    { n: "Ensaladas", p: 18 }, { n: "Postres", p: 12 }, { n: "Bebidas", p: 10 },
  ],
  pedidos: [
    { ref: "Mesa 1 · Juan Pérez", detalle: "Pizza Margherita, Bebida · $45,50", estado: "Servido" },
    { ref: "Mesa 3 · María López", detalle: "Pasta Carbonara x2 · $78,00", estado: "En cocina" },
    { ref: "Mesa 5 · Carlos García", detalle: "Ensalada César, Postre · $32,20", estado: "Pendiente" },
    { ref: "Mesa 2 · Ana Torres", detalle: "Pizza, Tiramisú · $56,10", estado: "En cocina" },
    { ref: "Mesa 7 · Diego Ruiz", detalle: "Sopa de Tomate · $14,00", estado: "Cancelado" },
  ],
};

const tone = (e: string) =>
  e === "Servido" ? "success" : e === "En cocina" ? "info" : e === "Pendiente" ? "warning" : "danger";

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero
        title="Buenas tardes, equipo Sazón"
        subtitle="142 pedidos hoy y 18 de 24 mesas ocupadas. El servicio va a buen ritmo."
        action={<Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nuevo pedido</Button>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} trend={s.trend} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" title="Pedidos por hora" subtitle="Franjas de servicio de hoy" data={data.horas} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por categoría</h3>
          <div className="space-y-3">
            {data.categorias.map((e) => (
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
          <h3 className="text-base font-semibold text-slate-900">Pedidos recientes</h3>
          <Badge tone="brand">{data.pedidos.length} activos</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.pedidos.map((p, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={p.ref} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{p.ref}</p>
                <p className="truncate text-sm text-slate-500">{p.detalle}</p>
              </div>
              <Badge tone={tone(p.estado)}>{p.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
