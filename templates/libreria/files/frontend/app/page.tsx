"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Library, AlertTriangle, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Ventas hoy", value: 42, icon: <BookOpen size={20} />, trend: { value: "8%", positive: true } },
    { label: "Títulos", value: 1860, icon: <Library size={20} />, trend: { value: "3%", positive: true } },
    { label: "Stock bajo", value: 14, icon: <AlertTriangle size={20} />, trend: { value: "5%", positive: false } },
    { label: "Ingresos del mes", value: "$12.4M", icon: <DollarSign size={20} />, trend: { value: "12%", positive: true } },
  ],
  ventasDia: [
    { label: "Lun", value: 320 }, { label: "Mar", value: 410 }, { label: "Mié", value: 380 },
    { label: "Jue", value: 460 }, { label: "Vie", value: 520 }, { label: "Sáb", value: 610 },
  ],
  categorias: [
    { n: "Libros", p: 85 }, { n: "Papelería", p: 65 }, { n: "Arte", p: 45 }, { n: "Escolar", p: 70 },
  ],
  ventas: [
    { cliente: "María Gómez", producto: "Cien años de soledad", estado: "Pagada" },
    { cliente: "Carlos Ruiz", producto: "Cuaderno argollado x5", estado: "Pagada" },
    { cliente: "Laura Díaz", producto: "Set de acuarelas", estado: "Pendiente" },
    { cliente: "Andrés Peña", producto: "Kit escolar primaria", estado: "Pagada" },
  ],
};
const tone = (e: string) => (e === "Pagada" ? "success" : e === "Pendiente" ? "warning" : "info");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Librería El Lápiz"
        subtitle="42 ventas hoy · 14 títulos con stock bajo. Mantén tu inventario al día y sigue vendiendo."
        action={<Link href="/ventas"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Registrar venta</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Ventas por día" subtitle="Miles $" data={data.ventasDia} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Categorías</h3>
          <div className="space-y-3">
            {data.categorias.map((c) => (
              <div key={c.n}>
                <div className="mb-1 flex justify-between text-sm"><span className="font-medium text-slate-700">{c.n}</span><span className="text-slate-500">{c.p}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand" style={{ width: `${c.p}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Últimas ventas</h3>
          <Badge tone="brand">{data.ventas.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.ventas.map((v, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={v.cliente} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{v.cliente}</p><p className="truncate text-sm text-slate-500">{v.producto}</p></div>
              <Badge tone={tone(v.estado)}>{v.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
