"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";

type Mesa = { id: number; numero: string; capacidad: number; mesero: string; estado: string };

const MOCK: Mesa[] = [
  { id: 1, numero: "Mesa 1", capacidad: 4, mesero: "Lucía Ramos", estado: "Ocupada" },
  { id: 2, numero: "Mesa 2", capacidad: 2, mesero: "Pedro Salas", estado: "Disponible" },
  { id: 3, numero: "Mesa 3", capacidad: 6, mesero: "Lucía Ramos", estado: "Reservada" },
  { id: 4, numero: "Mesa 4", capacidad: 4, mesero: "Marta Díaz", estado: "Disponible" },
  { id: 5, numero: "Mesa 5", capacidad: 8, mesero: "Pedro Salas", estado: "Ocupada" },
];

const tone = (e: string) =>
  e === "Disponible" ? "success" : e === "Ocupada" ? "info" : "warning";

export default function MesasPage() {
  const router = useRouter();
  const [mesas] = useState(MOCK);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Mesas"
        subtitle="Vista general del salón: capacidad, mesero y estado en tiempo real."
        action={
          <Button onClick={() => router.push("/mesas/create")}>
            <Plus size={16} /> Nueva mesa
          </Button>
        }
      />
      <Card className="!p-0">
        <DataTable<Mesa>
          rows={mesas}
          columns={[
            { key: "numero", header: "Mesa", render: (r) => (
              <div className="flex items-center gap-3">
                <Avatar name={r.numero} />
                <span className="font-medium text-slate-900">{r.numero}</span>
              </div>
            ) },
            { key: "capacidad", header: "Capacidad", render: (r) => (
              <span className="text-slate-700">{r.capacidad} personas</span>
            ) },
            { key: "mesero", header: "Mesero", render: (r) => <span className="text-slate-700">{r.mesero}</span> },
            { key: "estado", header: "Estado", render: (r) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
            { key: "acciones", header: "", align: "right", render: () => (
              <div className="flex justify-end gap-2">
                <Button variant="ghost" className="cursor-pointer">Editar</Button>
                <Button variant="danger" className="cursor-pointer">Eliminar</Button>
              </div>
            ) },
          ]}
        />
      </Card>
    </div>
  );
}
