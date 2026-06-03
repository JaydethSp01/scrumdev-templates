"use client";
import { useState } from "react";
import { DollarSign, CheckCircle, AlertCircle, TrendingUp, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Facturado", value: "$248,500", icon: <DollarSign size={20} />, trend: { value: "14%", positive: true } },
    { label: "Cobrado", value: "$181,200", icon: <CheckCircle size={20} />, trend: { value: "9%", positive: true } },
    { label: "Pendiente", value: "$48,300", icon: <TrendingUp size={20} />, trend: { value: "5%", positive: false } },
    { label: "Vencido", value: "$19,000", icon: <AlertCircle size={20} />, trend: { value: "3%", positive: false } },
  ],
  meses: [
    { label: "Ene", value: 32 }, { label: "Feb", value: 28 }, { label: "Mar", value: 41 },
    { label: "Abr", value: 37 }, { label: "May", value: 45 }, { label: "Jun", value: 52 }, { label: "Jul", value: 48 },
  ],
  estados: [
    { n: "Pagadas", p: 73 }, { n: "Pendientes", p: 19 },
    { n: "Vencidas", p: 8 },
  ],
  facturas: [
    { cliente: "Acme Corp", numero: "FAC-1042", monto: "$12,400", estado: "Pagada" },
    { cliente: "Globex S.A.", numero: "FAC-1041", monto: "$8,900", estado: "Pendiente" },
    { cliente: "Initech Ltda.", numero: "FAC-1040", monto: "$15,750", estado: "Vencida" },
    { cliente: "Soylent Co.", numero: "FAC-1039", monto: "$4,200", estado: "Enviada" },
    { cliente: "Umbrella Inc.", numero: "FAC-1038", monto: "$22,100", estado: "Pagada" },
  ],
};

const tone = (e: string) =>
  e === "Pagada" ? "success" : e === "Pendiente" ? "warning" : e === "Vencida" ? "danger" : "info";

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero
        title="Hola de nuevo, equipo Finanzas"
        subtitle="Has facturado $248,500 este mes y cobrado el 73%. Quedan $48,300 por cobrar — ¡vamos por ellos!"
        action={<Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nueva factura</Button>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} trend={s.trend} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" title="Facturación mensual" subtitle="Últimos 7 meses (miles $)" data={data.meses} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por estado de cobro</h3>
          <div className="space-y-3">
            {data.estados.map((e) => (
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
          <h3 className="text-base font-semibold text-slate-900">Facturas recientes</h3>
          <Badge tone="brand">{data.facturas.length} esta semana</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.facturas.map((f, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={f.cliente} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{f.cliente}</p>
                <p className="truncate text-sm text-slate-500">{f.numero}</p>
              </div>
              <span className="hidden text-sm font-semibold text-slate-700 sm:block">{f.monto}</span>
              <Badge tone={tone(f.estado)}>{f.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
