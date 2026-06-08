"use client";
import { useState } from "react";
import Link from "next/link";
import { Calculator, FileText, AlertTriangle, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Clientes", value: 64, icon: <Calculator size={20} />, trend: { value: "8%", positive: true } },
    { label: "Declaraciones del mes", value: 142, icon: <FileText size={20} />, trend: { value: "12%", positive: true } },
    { label: "Obligaciones pendientes", value: 19, icon: <AlertTriangle size={20} />, trend: { value: "5%", positive: false } },
    { label: "Honorarios del mes", value: "$38.5M", icon: <DollarSign size={20} />, trend: { value: "9%", positive: true } },
  ],
  ingresos: [
    { label: "Ene", value: 28000 }, { label: "Feb", value: 31000 }, { label: "Mar", value: 34500 },
    { label: "Abr", value: 33000 }, { label: "May", value: 36800 }, { label: "Jun", value: 38500 },
  ],
  obligaciones: [
    { n: "IVA", p: 85 }, { n: "Renta", p: 60 }, { n: "Retención", p: 72 }, { n: "Nómina", p: 48 },
  ],
  vencimientos: [
    { cliente: "Comercial Andina S.A.S.", detalle: "Declaración de IVA · vence 18 jun", estado: "Por vencer" },
    { cliente: "Inversiones Riofrío Ltda.", detalle: "Retención en la fuente · vence 12 jun", estado: "Vencida" },
    { cliente: "Distribuidora El Roble", detalle: "Declaración de Renta · vence 30 jun", estado: "Al día" },
    { cliente: "Servicios Pacífico S.A.S.", detalle: "Aportes de Nómina · vence 20 jun", estado: "Por vencer" },
  ],
};

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const estadoTone = (e: string): Tone =>
  e === "Al día" ? "success" : e === "Por vencer" ? "warning" : e === "Vencida" ? "danger" : "neutral";

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero
        title="Bienvenido, Contaduría Asociados"
        subtitle="64 clientes activos · 19 obligaciones pendientes este mes. Mantén las declaraciones al día."
        action={
          <Link href="/declaraciones">
            <Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nueva declaración</Button>
          </Link>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="area" title="Ingresos por mes" subtitle="Miles $" data={data.ingresos} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Obligaciones por tipo</h3>
          <div className="space-y-3">
            {data.obligaciones.map((m) => (
              <div key={m.n}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{m.n}</span>
                  <span className="text-slate-500">{m.p}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${m.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Vencimientos próximos</h3>
          <Badge tone="brand">{data.vencimientos.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.vencimientos.map((v, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={v.cliente} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{v.cliente}</p>
                <p className="truncate text-sm text-slate-500">{v.detalle}</p>
              </div>
              <Badge tone={estadoTone(v.estado)}>{v.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
