"use client";
import Link from "next/link";
import { useState } from "react";
import { Package, AlertTriangle, DollarSign, Boxes, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "SKUs activos", value: 342, icon: <Package size={20} />, trend: { value: "6%", positive: true } },
    { label: "Stock bajo", value: 18, icon: <AlertTriangle size={20} />, trend: { value: "4%", positive: false } },
    { label: "Ventas del mes", value: "$84.2k", icon: <DollarSign size={20} />, trend: { value: "12%", positive: true } },
    { label: "Valor inventario", value: "$321k", icon: <Boxes size={20} />, trend: { value: "3%", positive: true } },
  ],
  semana: [
    { label: "Lun", value: 42 }, { label: "Mar", value: 58 }, { label: "Mié", value: 51 },
    { label: "Jue", value: 67 }, { label: "Vie", value: 89 }, { label: "Sáb", value: 96 }, { label: "Dom", value: 38 },
  ],
  categorias: [
    { n: "Calzado", p: 34 }, { n: "Ropa", p: 28 },
    { n: "Accesorios", p: 22 }, { n: "Deportes", p: 16 },
  ],
  productos: [
    { nombre: "Zapatilla Runner Pro", sku: "CAL-0192", stock: 0, estado: "Agotado" },
    { nombre: "Camiseta Oversize Negra", sku: "ROP-0451", stock: 6, estado: "Stock bajo" },
    { nombre: "Mochila Urban 24L", sku: "ACC-0088", stock: 4, estado: "Stock bajo" },
    { nombre: "Gorra Trucker Índigo", sku: "ACC-0210", stock: 87, estado: "En stock" },
    { nombre: "Pantalón Cargo Slim", sku: "ROP-0333", stock: 132, estado: "En stock" },
  ],
};

const tone = (e: string) => (e === "En stock" ? "success" : e === "Stock bajo" ? "warning" : "danger");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero
        title="Buenos días, equipo Retail"
        subtitle="Tienes 18 productos con stock bajo. Las ventas del fin de semana subieron un 12% — momento de reponer."
        action={<Link href="/producto"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Nuevo producto</Button></Link>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} trend={s.trend} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" title="Ventas por día" subtitle="Últimos 7 días (unidades)" data={data.semana} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por categoría</h3>
          <div className="space-y-3">
            {data.categorias.map((e) => (
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
          <h3 className="text-base font-semibold text-slate-900">Productos con stock bajo</h3>
          <Badge tone="warning">{data.productos.filter((p) => p.estado !== "En stock").length} por reponer</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {data.productos.map((p, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={p.nombre} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{p.nombre}</p>
                <p className="truncate text-sm text-slate-500">SKU {p.sku}</p>
              </div>
              <span className="hidden text-sm font-medium text-slate-600 sm:block">{p.stock} uds</span>
              <Badge tone={tone(p.estado)}>{p.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
