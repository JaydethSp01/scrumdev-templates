"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, UtensilsCrossed } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";

type Ticket = { id: number; mesa: string; plato: string; tiempo: string; estado: string };

const MOCK: Ticket[] = [
  { id: 1, mesa: "Mesa 1", plato: "Ensalada César", tiempo: "3 min", estado: "En cocina" },
  { id: 2, mesa: "Mesa 3", plato: "Pizza Margherita", tiempo: "1 min", estado: "Servido" },
  { id: 3, mesa: "Mesa 5", plato: "Sopa de Tomate", tiempo: "6 min", estado: "En cocina" },
  { id: 4, mesa: "Mesa 2", plato: "Pasta Carbonara", tiempo: "2 min", estado: "Servido" },
  { id: 5, mesa: "Mesa 7", plato: "Tiramisú", tiempo: "9 min", estado: "Pendiente" },
];

const tone = (e: string) =>
  e === "Servido" ? "success" : e === "En cocina" ? "info" : "warning";

export default function CocinaPage() {
  const router = useRouter();
  const [tickets] = useState(MOCK);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Cocina"
        subtitle="Comandas en curso y tiempos de preparación por plato."
        action={
          <Button onClick={() => router.push("/cocina/create")}>
            <Plus size={16} /> Nueva comanda
          </Button>
        }
      />
      <Card className="!p-0">
        <DataTable<Ticket>
          rows={tickets}
          columns={[
            { key: "mesa", header: "Mesa", render: (r) => (
              <div className="flex items-center gap-3">
                <Avatar name={r.mesa} />
                <span className="font-medium text-slate-900">{r.mesa}</span>
              </div>
            ) },
            { key: "plato", header: "Plato", render: (r) => (
              <span className="inline-flex items-center gap-2 text-slate-700">
                <UtensilsCrossed size={15} className="text-brand" /> {r.plato}
              </span>
            ) },
            { key: "tiempo", header: "En cola", render: (r) => <span className="text-slate-500">{r.tiempo}</span> },
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
