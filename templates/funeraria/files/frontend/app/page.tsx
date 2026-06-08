"use client";
import { useState } from "react";
import Link from "next/link";
import { Flower2, Building2, FileText, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";

const MOCK = {
  stats: [
    { label: "Servicios del mes", value: 24, icon: <Flower2 size={20} />, trend: { value: "5%", positive: true } },
    { label: "Salas ocupadas", value: "3 / 5", icon: <Building2 size={20} /> },
    { label: "Planes activos", value: 318, icon: <FileText size={20} />, trend: { value: "3%", positive: true } },
    { label: "Ingresos del mes", value: "$86.4M", icon: <DollarSign size={20} />, trend: { value: "8%", positive: true } },
  ],
  serviciosMes: [
    { label: "Ene", value: 18 }, { label: "Feb", value: 21 }, { label: "Mar", value: 19 },
    { label: "Abr", value: 23 }, { label: "May", value: 20 }, { label: "Jun", value: 24 },
  ],
  tipos: [
    { n: "Velación", p: 85 },
    { n: "Cremación", p: 60 },
    { n: "Traslado", p: 40 },
    { n: "Exhumación", p: 15 },
  ],
  enCurso: [
    { fallecido: "Sr. Roberto Díaz", responsable: "Familia Díaz", sala: "Sala Paz", estado: "En velación" },
    { fallecido: "Sra. Carmen Ríos", responsable: "Familia Ríos", sala: "Sala Serenidad", estado: "En preparación" },
    { fallecido: "Sr. Jorge Mejía", responsable: "Familia Mejía", sala: "Sala Esperanza", estado: "En velación" },
    { fallecido: "Sra. Lucía Vargas", responsable: "Familia Vargas", sala: "Sala Consuelo", estado: "Finalizado" },
  ],
};

const estadoTone: Record<string, Tone> = {
  "En preparación": "warning",
  "En velación": "info",
  "Finalizado": "success",
};

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Servicio con respeto, Funeraria X"
        subtitle="Acompañamos a las familias con dignidad y calidez. 24 servicios atendidos este mes."
        action={<Link href="/servicios"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Registrar servicio</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="area" title="Servicios por mes" subtitle="Cantidad" data={data.serviciosMes} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Tipo de servicio</h3>
          <div className="space-y-3">
            {data.tipos.map((m) => (
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
          <h3 className="text-base font-semibold text-slate-900">Servicios en curso</h3>
          <Badge tone="brand">{data.enCurso.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.enCurso.map((c, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={c.fallecido} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{c.fallecido}</p><p className="truncate text-sm text-slate-500">{c.sala} · {c.responsable}</p></div>
              <Badge tone={estadoTone[c.estado] ?? "neutral"}>{c.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
