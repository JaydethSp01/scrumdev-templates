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

type Conductor = { nombre: string; licencia: string; zona: string; estado: string };

const MOCK: Conductor[] = [
  { nombre: "Juan Pérez", licencia: "B1234567", zona: "Zona Norte", estado: "En ruta" },
  { nombre: "María López", licencia: "C2345678", zona: "Eje Cafetero", estado: "En ruta" },
  { nombre: "Carlos García", licencia: "C3456789", zona: "Costa Caribe", estado: "Disponible" },
  { nombre: "Ana Martínez", licencia: "B4567890", zona: "Zona Oriente", estado: "Disponible" },
  { nombre: "Diego Torres", licencia: "C5678901", zona: "Zona Sur", estado: "Descanso" },
  { nombre: "Laura Niño", licencia: "B6789012", zona: "Zona Andina", estado: "En ruta" },
];

const tone = (e: string) => (e === "Disponible" ? "success" : e === "En ruta" ? "info" : "warning");

export default function ConductorPage() {
  const router = useRouter();
  const [rows] = useState(MOCK);

  const columns = [
    { key: "nombre", header: "Conductor", render: (r: Conductor) => (
      <div className="flex items-center gap-3">
        <Avatar name={r.nombre} />
        <div>
          <p className="font-medium text-slate-900">{r.nombre}</p>
          <p className="text-xs text-slate-500">{r.zona}</p>
        </div>
      </div>
    ) },
    { key: "licencia", header: "Licencia", render: (r: Conductor) => (
      <span className="font-mono text-slate-700">{r.licencia}</span>
    ) },
    { key: "estado", header: "Estado", render: (r: Conductor) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
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
        title="Conductores"
        subtitle="Administra el equipo de conductores y su disponibilidad."
        action={<Button className="cursor-pointer" onClick={() => router.push("/conductor/create")}><Plus size={16} /> Nuevo conductor</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} empty="Sin conductores registrados." />
      </Card>
    </div>
  );
}
