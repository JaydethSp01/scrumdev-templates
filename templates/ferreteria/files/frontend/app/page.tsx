"use client";
import Link from "next/link";
import { useState } from "react";
import { Wrench, Package, AlertTriangle, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Ventas hoy", value: 37, icon: <Wrench size={20} />, trend: { value: "9%", positive: true } },
    { label: "Productos", value: 642, icon: <Package size={20} />, trend: { value: "4%", positive: true } },
    { label: "Stock bajo", value: 12, icon: <AlertTriangle size={20} />, trend: { value: "2", positive: false } },
    { label: "Ingresos del mes", value: "$18.4M", icon: <DollarSign size={20} />, trend: { value: "14%", positive: true } },
  ],
  ventasDia: [
    { label: "Lun", value: 28 }, { label: "Mar", value: 35 }, { label: "Mié", value: 31 },
    { label: "Jue", value: 42 }, { label: "Vie", value: 48 }, { label: "Sáb", value: 53 }, { label: "Dom", value: 19 },
  ],
  categorias: [
    { n: "Herramientas", p: 42 }, { n: "Pinturas", p: 26 },
    { n: "Eléctricos", p: 19 }, { n: "Plomería", p: 13 },
  ],
  stockBajo: [
    { producto: "Taladro percutor 750W", categoria: "Herramientas", stock: 3, estado: "Crítico" },
    { producto: "Pintura blanca 1gal", categoria: "Pinturas", stock: 6, estado: "Bajo" },
    { producto: "Cable THHN #12", categoria: "Eléctricos", stock: 8, estado: "Bajo" },
    { producto: "Tubo PVC media pulgada", categoria: "Plomería", stock: 2, estado: "Crítico" },
  ],
};

const tone = (e: string) => (e === "Crítico" ? "danger" : e === "Bajo" ? "warning" : "success");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero
        title="Bienvenido, Ferretería X"
        subtitle="37 ventas hoy · 12 productos con stock bajo. Revisa el inventario para no quedarte sin stock."
        action={<Link href="/ventas"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nueva venta</Button></Link>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} trend={s.trend} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Ventas por día" subtitle="Esta semana" data={data.ventasDia} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Categorías más vendidas</h3>
          <div className="space-y-3">
            {data.categorias.map((c) => (
              <div key={c.n}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{c.n}</span>
                  <span className="text-slate-500">{c.p}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${c.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Productos con stock bajo</h3>
          <Badge tone="warning">{data.stockBajo.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.stockBajo.map((p, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={p.producto} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{p.producto}</p>
                <p className="truncate text-sm text-slate-500">{p.categoria} · {p.stock} en stock</p>
              </div>
              <Badge tone={tone(p.estado)}>{p.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
