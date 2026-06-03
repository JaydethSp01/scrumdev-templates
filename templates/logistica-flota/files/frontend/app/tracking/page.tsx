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

type Tracking = { guia: string; ruta: string; vehiculo: string; conductor: string; estado: string };

const MOCK: Tracking[] = [
  { guia: "GU-4821", ruta: "Bogotá → Medellín", vehiculo: "Camión A", conductor: "Juan Pérez", estado: "Entregado" },
  { guia: "GU-4822", ruta: "Cali → Pereira", vehiculo: "Camión B", conductor: "María López", estado: "En tránsito" },
  { guia: "GU-4823", ruta: "Barranquilla → Cartagena", vehiculo: "Camión C", conductor: "Carlos García", estado: "Retrasado" },
  { guia: "GU-4824", ruta: "Bogotá → Bucaramanga", vehiculo: "Camión D", conductor: "Ana Martínez", estado: "En tránsito" },
  { guia: "GU-4825", ruta: "Medellín → Manizales", vehiculo: "Camión E", conductor: "Diego Torres", estado: "Cancelado" },
];

const tone = (e: string) =>
  e === "Entregado" ? "success" : e === "En tránsito" ? "info" : e === "Retrasado" ? "warning" : "danger";

export default function TrackingPage() {
  const router = useRouter();
  const [rows] = useState(MOCK);

  const columns = [
    { key: "guia", header: "Guía", render: (r: Tracking) => (
      <span className="font-mono text-slate-700">{r.guia}</span>
    ) },
    { key: "ruta", header: "Ruta", render: (r: Tracking) => (
      <span className="text-slate-600">{r.ruta}</span>
    ) },
    { key: "conductor", header: "Conductor", render: (r: Tracking) => (
      <div className="flex items-center gap-2">
        <Avatar name={r.conductor} />
        <div>
          <p className="text-slate-700">{r.conductor}</p>
          <p className="text-xs text-slate-500">{r.vehiculo}</p>
        </div>
      </div>
    ) },
    { key: "estado", header: "Estado", render: (r: Tracking) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
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
        title="Seguimiento"
        subtitle="Monitorea el estado de tus envíos en tiempo real."
        action={<Button className="cursor-pointer" onClick={() => router.push("/tracking/create")}><Plus size={16} /> Nuevo seguimiento</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} empty="Sin envíos en seguimiento." />
      </Card>
    </div>
  );
}
