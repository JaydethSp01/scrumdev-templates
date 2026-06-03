"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";

type Ruta = { nombre: string; origen: string; destino: string; distancia: string; estado: string };

const MOCK: Ruta[] = [
  { nombre: "Corredor Norte", origen: "Bogotá", destino: "Medellín", distancia: "415 km", estado: "Activa" },
  { nombre: "Eje Cafetero", origen: "Cali", destino: "Pereira", distancia: "210 km", estado: "Activa" },
  { nombre: "Costa Caribe", origen: "Barranquilla", destino: "Cartagena", distancia: "120 km", estado: "En curso" },
  { nombre: "Ruta Oriente", origen: "Bogotá", destino: "Bucaramanga", distancia: "400 km", estado: "En curso" },
  { nombre: "Tramo Sur", origen: "Cali", destino: "Popayán", distancia: "140 km", estado: "Pausada" },
  { nombre: "Línea Andina", origen: "Medellín", destino: "Manizales", distancia: "195 km", estado: "Activa" },
];

const tone = (e: string) => (e === "Activa" ? "success" : e === "En curso" ? "info" : "warning");

export default function RutaPage() {
  const router = useRouter();
  const [rows] = useState(MOCK);

  const columns = [
    { key: "nombre", header: "Ruta", render: (r: Ruta) => (
      <span className="font-medium text-slate-900">{r.nombre}</span>
    ) },
    { key: "trayecto", header: "Trayecto", render: (r: Ruta) => (
      <span className="text-slate-600">{r.origen} → {r.destino}</span>
    ) },
    { key: "distancia", header: "Distancia", align: "right" as const, render: (r: Ruta) => (
      <span className="text-slate-700">{r.distancia}</span>
    ) },
    { key: "estado", header: "Estado", render: (r: Ruta) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
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
        title="Rutas"
        subtitle="Define y supervisa los trayectos de la operación."
        action={<Button className="cursor-pointer" onClick={() => router.push("/ruta/create")}><Plus size={16} /> Nueva ruta</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} empty="Sin rutas registradas." />
      </Card>
    </div>
  );
}
