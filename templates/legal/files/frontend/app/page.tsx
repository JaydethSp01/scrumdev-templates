"use client";
import Link from "next/link";
import { useState } from "react";
import { Scale, Gavel, Users, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Casos activos", value: 86, icon: <Scale size={20} />, trend: { value: "9%", positive: true } },
    { label: "Audiencias esta semana", value: 12, icon: <Gavel size={20} />, trend: { value: "4%", positive: true } },
    { label: "Clientes", value: 214, icon: <Users size={20} />, trend: { value: "6%", positive: true } },
    { label: "Honorarios del mes", value: "$48.5M", icon: <DollarSign size={20} />, trend: { value: "3%", positive: false } },
  ],
  meses: [
    { label: "Ene", value: 14 }, { label: "Feb", value: 18 }, { label: "Mar", value: 12 },
    { label: "Abr", value: 22 }, { label: "May", value: 19 }, { label: "Jun", value: 25 },
  ],
  audiencias: [
    { caso: "Pérez vs. Aseguros SA", abogado: "Dra. Rodríguez", juzgado: "Juzgado 3 Civil", estado: "Programada" },
    { caso: "Estado vs. Gómez", abogado: "Dr. Fernández", juzgado: "Juzgado Penal 1", estado: "Confirmada" },
    { caso: "Despido López", abogado: "Dra. Martínez", juzgado: "Juzgado Laboral 2", estado: "Aplazada" },
    { caso: "Custodia Díaz", abogado: "Dr. Gómez", juzgado: "Juzgado de Familia", estado: "Programada" },
  ],
};

const tone = (e: string) => (e === "Confirmada" ? "success" : e === "Aplazada" ? "danger" : "warning");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero
        title="Bienvenido, Bufete Lex & Asociados"
        subtitle="Tienes 86 casos activos y 12 audiencias esta semana. Revisa la agenda de hoy."
        action={<Link href="/casos"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nuevo caso</Button></Link>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} trend={s.trend} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Casos por mes" subtitle="Casos abiertos" data={data.meses} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por área</h3>
          <div className="space-y-3">
            {[
              { n: "Civil", p: 40 }, { n: "Penal", p: 28 },
              { n: "Laboral", p: 20 }, { n: "Familia", p: 12 },
            ].map((a) => (
              <div key={a.n}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{a.n}</span>
                  <span className="text-slate-500">{a.p}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${a.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Próximas audiencias</h3>
          <Badge tone="brand">{data.audiencias.length} esta semana</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.audiencias.map((a, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={a.abogado} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{a.caso}</p>
                <p className="truncate text-sm text-slate-500">{a.abogado} · {a.juzgado}</p>
              </div>
              <Badge tone={tone(a.estado)}>{a.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
