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

type Plato = { id: number; nombre: string; categoria: string; precio: number; estado: string };

const MOCK: Plato[] = [
  { id: 1, nombre: "Pizza Margherita", categoria: "Pizzas", precio: 8.5, estado: "Disponible" },
  { id: 2, nombre: "Ensalada César", categoria: "Ensaladas", precio: 7.0, estado: "Disponible" },
  { id: 3, nombre: "Pasta Carbonara", categoria: "Pastas", precio: 9.0, estado: "Disponible" },
  { id: 4, nombre: "Sopa de Tomate", categoria: "Entradas", precio: 5.0, estado: "Agotado" },
  { id: 5, nombre: "Tiramisú", categoria: "Postres", precio: 5.5, estado: "Disponible" },
  { id: 6, nombre: "Limonada Natural", categoria: "Bebidas", precio: 3.5, estado: "Agotado" },
];

const tone = (e: string) => (e === "Disponible" ? "success" : "warning");

export default function MenuPage() {
  const router = useRouter();
  const [platos] = useState(MOCK);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Menú"
        subtitle="Administra los platos, precios y disponibilidad de la carta."
        action={
          <Button onClick={() => router.push("/men/create")}>
            <Plus size={16} /> Nuevo plato
          </Button>
        }
      />
      <Card className="!p-0">
        <DataTable<Plato>
          rows={platos}
          columns={[
            { key: "nombre", header: "Plato", render: (r) => (
              <div className="flex items-center gap-3">
                <Avatar name={r.nombre} />
                <span className="font-medium text-slate-900">{r.nombre}</span>
              </div>
            ) },
            { key: "categoria", header: "Categoría", render: (r) => <Badge tone="neutral">{r.categoria}</Badge> },
            { key: "estado", header: "Estado", render: (r) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
            { key: "precio", header: "Precio", align: "right", render: (r) => (
              <span className="font-semibold text-slate-900">${r.precio.toFixed(2)}</span>
            ) },
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
