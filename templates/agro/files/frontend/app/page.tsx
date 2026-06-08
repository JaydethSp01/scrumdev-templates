"use client";
import { useState } from "react";
import Link from "next/link";
import { Sprout, Map, Users, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Producción del mes (kg)", value: "12.480", icon: <Sprout size={20} />, trend: { value: "8%", positive: true } },
    { label: "Lotes activos", value: 14, icon: <Map size={20} />, trend: { value: "2", positive: true } },
    { label: "Trabajadores", value: 23, icon: <Users size={20} />, trend: { value: "3%", positive: true } },
    { label: "Ingresos del mes", value: "$38.6M", icon: <DollarSign size={20} />, trend: { value: "12%", positive: true } },
  ],
  cosecha: [
    { label: "Ene", value: 9200 }, { label: "Feb", value: 8600 }, { label: "Mar", value: 10100 },
    { label: "Abr", value: 11800 }, { label: "May", value: 11200 }, { label: "Jun", value: 12480 },
  ],
  labores: [
    { lote: "Lote La Esperanza", detalle: "Café · Lote 4", trabajador: "Pedro Quintero", tipo: "Siembra" },
    { lote: "Lote El Mirador", detalle: "Plátano · Lote 7", trabajador: "María Cifuentes", tipo: "Fumigación" },
    { lote: "Lote San José", detalle: "Aguacate · Lote 2", trabajador: "José Hurtado", tipo: "Cosecha" },
    { lote: "Lote Buenavista", detalle: "Cacao · Lote 9", trabajador: "Ana Restrepo", tipo: "Siembra" },
  ],
};
const tone = (t: string) => (t === "Cosecha" ? "brand" : t === "Fumigación" ? "warning" : "info");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Finca La Primavera"
        subtitle="14 lotes activos · 12.480 kg cosechados este mes. Buen trabajo en el campo hoy."
        action={<Link href="/cultivos"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nuevo cultivo</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Cosecha por mes (kg)" subtitle="Kilogramos cosechados" data={data.cosecha} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por cultivo</h3>
          <div className="space-y-3">
            {[{ n: "Café", p: 85 }, { n: "Plátano", p: 65 }, { n: "Aguacate", p: 50 }, { n: "Cacao", p: 35 }].map((m) => (
              <div key={m.n}>
                <div className="mb-1 flex justify-between text-sm"><span className="font-medium text-slate-700">{m.n}</span><span className="text-slate-500">{m.p}%</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand" style={{ width: `${m.p}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Próximas labores</h3>
          <Badge tone="brand">{data.labores.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.labores.map((l, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={l.trabajador} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{l.lote}</p><p className="truncate text-sm text-slate-500">{l.detalle} · {l.trabajador}</p></div>
              <Badge tone={tone(l.tipo)}>{l.tipo}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
