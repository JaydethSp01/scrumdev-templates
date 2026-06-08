"use client";
import { useState } from "react";
import Link from "next/link";
import { HandHeart, Users, HeartHandshake, FolderKanban, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Recaudado del mes", value: "$12.4M", icon: <HandHeart size={20} />, trend: { value: "9%", positive: true } },
    { label: "Donantes", value: 326, icon: <Users size={20} />, trend: { value: "5%", positive: true } },
    { label: "Voluntarios", value: 84, icon: <HeartHandshake size={20} />, trend: { value: "3%", positive: true } },
    { label: "Proyectos activos", value: 12, icon: <FolderKanban size={20} />, trend: { value: "2", positive: true } },
  ],
  donaciones: [
    { label: "Ene", value: 8200 }, { label: "Feb", value: 9100 }, { label: "Mar", value: 8700 },
    { label: "Abr", value: 10400 }, { label: "May", value: 11200 }, { label: "Jun", value: 12400 },
  ],
  recientes: [
    { donante: "Carolina Restrepo", monto: "$500.000", tipo: "Recurrente" },
    { donante: "Andrés Mejía", monto: "$1.200.000", tipo: "Única" },
    { donante: "Supermercados El Sol", monto: "Mercados x40", tipo: "Especie" },
    { donante: "Lucía Ferreira", monto: "$250.000", tipo: "Recurrente" },
  ],
};
const tone = (t: string) => (t === "Recurrente" ? "brand" : t === "Especie" ? "warning" : "info");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Bienvenida, Fundación X"
        subtitle="326 donantes y 84 voluntarios apoyan 12 proyectos activos. Gracias por transformar vidas."
        action={<Link href="/donaciones"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Registrar donación</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="area" title="Donaciones por mes" subtitle="Miles $" data={data.donaciones} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por programa</h3>
          <div className="space-y-3">
            {[{ n: "Educación", p: 85 }, { n: "Salud", p: 65 }, { n: "Alimentación", p: 50 }, { n: "Vivienda", p: 35 }].map((m) => (
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
          <h3 className="text-base font-semibold text-slate-900">Donaciones recientes</h3>
          <Badge tone="brand">{data.recientes.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.recientes.map((d, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={d.donante} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{d.donante}</p><p className="truncate text-sm text-slate-500">{d.monto}</p></div>
              <Badge tone={tone(d.tipo)}>{d.tipo}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
