"use client";
import { useState } from "react";
import Link from "next/link";
import { Users, Church, HandCoins, CalendarDays, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Miembros", value: 248, icon: <Users size={20} />, trend: { value: "6%", positive: true } },
    { label: "Asistencia prom.", value: 182, icon: <Church size={20} />, trend: { value: "4%", positive: true } },
    { label: "Ofrendas del mes", value: "$4.2M", icon: <HandCoins size={20} />, trend: { value: "11%", positive: true } },
    { label: "Próximo culto", value: "Dom 9am", icon: <CalendarDays size={20} /> },
  ],
  ofrendas: [
    { label: "Ene", value: 3200 }, { label: "Feb", value: 3600 }, { label: "Mar", value: 3100 },
    { label: "Abr", value: 4000 }, { label: "May", value: 3800 }, { label: "Jun", value: 4200 },
  ],
  cultos: [
    { titulo: "Culto Dominical", dia: "Domingo 9:00 am", predicador: "Pastor Andrés", tipo: "Culto" },
    { titulo: "Estudio Bíblico", dia: "Miércoles 7:00 pm", predicador: "Hno. Felipe", tipo: "Estudio" },
    { titulo: "Vigilia de Oración", dia: "Viernes 8:00 pm", predicador: "Pastora Ruth", tipo: "Oración" },
    { titulo: "Ayuno Congregacional", dia: "Sábado 6:00 am", predicador: "Liderazgo", tipo: "Ayuno" },
  ],
};
const tone = (t: string) => (t === "Culto" ? "brand" : t === "Ayuno" ? "warning" : "info");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Paz de Cristo, Iglesia Vida"
        subtitle="248 miembros · próximo culto domingo 9am. Que Dios bendiga el servicio de hoy."
        action={<Link href="/cultos"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Programar culto</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="area" title="Ofrendas por mes" subtitle="Miles $" data={data.ofrendas} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Ministerios</h3>
          <div className="space-y-3">
            {[{ n: "Alabanza", p: 90 }, { n: "Jóvenes", p: 70 }, { n: "Niños", p: 55 }, { n: "Intercesión", p: 40 }].map((m) => (
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
          <h3 className="text-base font-semibold text-slate-900">Próximos cultos y eventos</h3>
          <Badge tone="brand">{data.cultos.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.cultos.map((c, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={c.predicador} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{c.titulo}</p><p className="truncate text-sm text-slate-500">{c.dia} · {c.predicador}</p></div>
              <Badge tone={tone(c.tipo)}>{c.tipo}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
