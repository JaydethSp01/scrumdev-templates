"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";

type Vehiculo = { marca: string; modelo: string; matricula: string; tipo: string; estado: string };

const MOCK: Vehiculo[] = [
  { marca: "Ford", modelo: "Transit", matricula: "1234-ABC", tipo: "Furgón", estado: "Disponible" },
  { marca: "Mercedes", modelo: "Sprinter", matricula: "5678-DEF", tipo: "Furgón", estado: "En ruta" },
  { marca: "Volvo", modelo: "FH16", matricula: "9012-GHI", tipo: "Tractomula", estado: "En ruta" },
  { marca: "Renault", modelo: "Master", matricula: "3456-JKL", tipo: "Furgón", estado: "Mantenimiento" },
  { marca: "Scania", modelo: "R450", matricula: "7890-MNO", tipo: "Tractomula", estado: "Disponible" },
  { marca: "Iveco", modelo: "Daily", matricula: "2468-PQR", tipo: "Camión", estado: "Inactivo" },
];

const tone = (e: string) =>
  e === "Disponible" ? "success" : e === "En ruta" ? "info" : e === "Mantenimiento" ? "warning" : "neutral";

export default function VehiculoPage() {
  const router = useRouter();
  const [rows] = useState(MOCK);

  const columns = [
    { key: "vehiculo", header: "Vehículo", render: (r: Vehiculo) => (
      <div>
        <p className="font-medium text-slate-900">{r.marca} {r.modelo}</p>
        <p className="text-xs text-slate-500">{r.tipo}</p>
      </div>
    ) },
    { key: "matricula", header: "Matrícula", render: (r: Vehiculo) => (
      <span className="font-mono text-slate-700">{r.matricula}</span>
    ) },
    { key: "estado", header: "Estado", render: (r: Vehiculo) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
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
        title="Vehículos"
        subtitle="Gestiona la flota y el estado de cada unidad."
        action={<Button className="cursor-pointer" onClick={() => router.push("/veh-culo/create")}><Plus size={16} /> Nuevo vehículo</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} empty="Sin vehículos registrados." />
      </Card>
    </div>
  );
}
