"use client";
import Link from "next/link";
import { Car, Users, Truck, DollarSign, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const tone = (e: string) => (e === "Finalizado" ? "success" : e === "En ruta" ? "info" : "warning");
export default function Page() {
  const stats = [
    { label: "Viajes hoy", value: 142, icon: <Car size={20} />, trend: { value: "8%", positive: true } },
    { label: "Conductores activos", value: 28, icon: <Users size={20} />, trend: { value: "3%", positive: true } },
    { label: "Vehículos", value: 35, icon: <Truck size={20} /> },
    { label: "Ingresos del día", value: "$2.4M", icon: <DollarSign size={20} />, trend: { value: "11%", positive: true } },
  ];
  const viajes = [
    { ruta: "Centro → Aeropuerto", cond: "Carlos Pérez", estado: "En ruta" },
    { ruta: "Norte → Sur", cond: "Ana Gómez", estado: "Esperando" },
    { ruta: "Poblado → Centro", cond: "Luis Mora", estado: "Finalizado" },
    { ruta: "Sur → Norte", cond: "Marta Ruiz", estado: "En ruta" },
  ];
  const zonas = [{ n: "Centro", p: 90 }, { n: "Norte", p: 70 }, { n: "Sur", p: 55 }, { n: "Aeropuerto", p: 40 }];
  return (
    <div className="space-y-6">
      <Hero title="Bienvenido, Transportes X" subtitle="142 viajes hoy · 28 conductores en ruta. ¡Buen viaje!"
        action={<Link href="/viajes"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nuevo viaje</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map((s) => <StatCard key={s.label} {...s} />)}</div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Viajes por hora" data={[{label:"6am",value:18},{label:"9am",value:42},{label:"12m",value:30},{label:"3pm",value:38},{label:"6pm",value:55},{label:"9pm",value:34}]} />
        <Card><h3 className="mb-4 text-base font-semibold text-slate-900">Zonas más solicitadas</h3>
          <div className="space-y-3">{zonas.map((z) => (<div key={z.n}><div className="mb-1 flex justify-between text-sm"><span className="font-medium text-slate-700">{z.n}</span><span className="text-slate-500">{z.p}</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand" style={{ width: `${z.p}%` }} /></div></div>))}</div>
        </Card>
      </div>
      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5"><h3 className="text-base font-semibold text-slate-900">Viajes en curso</h3><Badge tone="brand">{viajes.length}</Badge></div>
        <ul className="divide-y divide-slate-100">{viajes.map((v, i) => (<li key={i} className="flex items-center gap-4 p-5"><Avatar name={v.cond} /><div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{v.ruta}</p><p className="truncate text-sm text-slate-500">{v.cond}</p></div><Badge tone={tone(v.estado)}>{v.estado}</Badge></li>))}</ul>
      </Card>
    </div>
  );
}
