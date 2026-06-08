"use client";
import { useState } from "react";
import Link from "next/link";
import { Pill, Package, AlertTriangle, CalendarClock, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Ventas hoy", value: "$1.8M", icon: <Pill size={20} />, trend: { value: "8%", positive: true } },
    { label: "Productos", value: 642, icon: <Package size={20} />, trend: { value: "3%", positive: true } },
    { label: "Stock bajo", value: 14, icon: <AlertTriangle size={20} />, trend: { value: "5%", positive: false } },
    { label: "Por vencer", value: 9, icon: <CalendarClock size={20} /> },
  ],
  ventas: [
    { label: "Lun", value: 1200 }, { label: "Mar", value: 1500 }, { label: "Mié", value: 1300 },
    { label: "Jue", value: 1700 }, { label: "Vie", value: 1900 }, { label: "Sáb", value: 2100 },
  ],
  porVencer: [
    { producto: "Amoxicilina 500mg", lote: "L-2231", vence: "Vence en 12 días", estado: "Crítico" },
    { producto: "Ibuprofeno 400mg", lote: "L-1890", vence: "Vence en 25 días", estado: "Próximo" },
    { producto: "Vitamina C 1g", lote: "L-3045", vence: "Vence en 40 días", estado: "Próximo" },
    { producto: "Loratadina 10mg", lote: "L-2778", vence: "Vence en 8 días", estado: "Crítico" },
  ],
};
const tone = (e: string) => (e === "Crítico" ? "danger" : "warning");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Droguería X"
        subtitle="642 productos en catálogo · 14 con stock bajo y 9 por vencer. Revisa el inventario hoy."
        action={<Link href="/ventas"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Registrar venta</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Ventas por día" subtitle="Miles $" data={data.ventas} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Categorías más vendidas</h3>
          <div className="space-y-3">
            {[{ n: "Analgésicos", p: 88 }, { n: "Antibióticos", p: 64 }, { n: "Vitaminas", p: 52 }, { n: "Cuidado personal", p: 38 }].map((m) => (
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
          <h3 className="text-base font-semibold text-slate-900">Productos por vencer pronto</h3>
          <Badge tone="brand">{data.porVencer.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.porVencer.map((p, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={p.producto} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{p.producto}</p><p className="truncate text-sm text-slate-500">Lote {p.lote} · {p.vence}</p></div>
              <Badge tone={tone(p.estado)}>{p.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
