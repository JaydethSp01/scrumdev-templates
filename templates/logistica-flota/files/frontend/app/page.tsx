"use client";
import Link from "next/link";
import { useState } from "react";
import { Truck, Navigation, Package, MapPin, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Vehículos", value: 32, icon: <Truck size={20} />, trend: { value: "4%", positive: true } },
    { label: "Rutas activas", value: 18, icon: <Navigation size={20} />, trend: { value: "6%", positive: true } },
    { label: "Entregas hoy", value: 142, icon: <Package size={20} />, trend: { value: "11%", positive: true } },
    { label: "En tránsito", value: 27, icon: <MapPin size={20} />, trend: { value: "3%", positive: false } },
  ],
  semana: [
    { label: "Lun", value: 118 }, { label: "Mar", value: 134 }, { label: "Mié", value: 126 },
    { label: "Jue", value: 152 }, { label: "Vie", value: 168 }, { label: "Sáb", value: 94 }, { label: "Dom", value: 41 },
  ],
  zonas: [
    { n: "Zona Norte", p: 41 }, { n: "Zona Centro", p: 28 },
    { n: "Zona Sur", p: 19 }, { n: "Zona Oeste", p: 12 },
  ],
  envios: [
    { conductor: "Juan Pérez", ruta: "Bogotá → Medellín", guia: "GU-4821", estado: "Entregado" },
    { conductor: "María López", ruta: "Cali → Pereira", guia: "GU-4822", estado: "En tránsito" },
    { conductor: "Carlos García", ruta: "Barranquilla → Cartagena", guia: "GU-4823", estado: "Retrasado" },
    { conductor: "Ana Martínez", ruta: "Bogotá → Bucaramanga", guia: "GU-4824", estado: "En tránsito" },
    { conductor: "Diego Torres", ruta: "Medellín → Manizales", guia: "GU-4825", estado: "Cancelado" },
  ],
};

const tone = (e: string) =>
  e === "Entregado" ? "success" : e === "En tránsito" ? "info" : e === "Retrasado" ? "warning" : "danger";

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero
        title="Buenos días, equipo Flota"
        subtitle="142 entregas programadas hoy y 27 envíos en tránsito. Las rutas del norte van adelantadas."
        action={<Link href="/mapa"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nuevo envío</Button></Link>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} trend={s.trend} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" title="Entregas por día" subtitle="Últimos 7 días" data={data.semana} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Entregas por zona</h3>
          <div className="space-y-3">
            {data.zonas.map((z) => (
              <div key={z.n}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{z.n}</span>
                  <span className="text-slate-500">{z.p}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${z.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Envíos recientes</h3>
          <Badge tone="brand">{data.envios.length} hoy</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.envios.map((e, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={e.conductor} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{e.conductor}</p>
                <p className="truncate text-sm text-slate-500">{e.ruta} · {e.guia}</p>
              </div>
              <Badge tone={tone(e.estado)}>{e.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
