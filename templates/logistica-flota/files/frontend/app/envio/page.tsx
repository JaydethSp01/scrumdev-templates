"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";

type Envio = { guia: string; descripcion: string; destino: string; conductor: string; estado: string };

const MOCK: Envio[] = [
  { guia: "GU-4821", descripcion: "Electrodomésticos", destino: "Medellín", conductor: "Juan Pérez", estado: "Entregado" },
  { guia: "GU-4822", descripcion: "Textiles", destino: "Pereira", conductor: "María López", estado: "En tránsito" },
  { guia: "GU-4823", descripcion: "Insumos médicos", destino: "Cartagena", conductor: "Carlos García", estado: "Retrasado" },
  { guia: "GU-4824", descripcion: "Repuestos", destino: "Bucaramanga", conductor: "Ana Martínez", estado: "En tránsito" },
  { guia: "GU-4825", descripcion: "Alimentos secos", destino: "Manizales", conductor: "Diego Torres", estado: "Cancelado" },
  { guia: "GU-4826", descripcion: "Mobiliario", destino: "Popayán", conductor: "Laura Niño", estado: "Entregado" },
];

const tone = (e: string) =>
  e === "Entregado" ? "success" : e === "En tránsito" ? "info" : e === "Retrasado" ? "warning" : "danger";

export default function EnvioPage() {
  const router = useRouter();
  const [rows] = useState(MOCK);

  const columns = [
    { key: "guia", header: "Guía", render: (r: Envio) => (
      <span className="font-mono text-slate-700">{r.guia}</span>
    ) },
    { key: "descripcion", header: "Envío", render: (r: Envio) => (
      <div>
        <p className="font-medium text-slate-900">{r.descripcion}</p>
        <p className="text-xs text-slate-500">Destino: {r.destino}</p>
      </div>
    ) },
    { key: "conductor", header: "Conductor", render: (r: Envio) => (
      <div className="flex items-center gap-2">
        <Avatar name={r.conductor} />
        <span className="text-slate-700">{r.conductor}</span>
      </div>
    ) },
    { key: "estado", header: "Estado", render: (r: Envio) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
    { key: "acciones", header: "", align: "right" as const, render: () => (
      <div className="flex justify-end gap-1">
        <Button variant="ghost" className="cursor-pointer !px-2"><Pencil size={16} /></Button>
        <Button variant="ghost" className="cursor-pointer !px-2 text-rose-600"><Trash2 size={16} /></Button>
      </div>
    ) },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Envíos"
        subtitle="Controla el estado y la trazabilidad de cada despacho."
        action={<Button className="cursor-pointer" onClick={() => router.push("/envio/create")}><Plus size={16} /> Nuevo envío</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} empty="Sin envíos registrados." />
      </Card>
    </div>
  );
}
