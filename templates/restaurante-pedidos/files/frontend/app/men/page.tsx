"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Disponible: "success", Agotado: "warning" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Menú" subtitle="Administra los platos, precios y disponibilidad de la carta." />
      <CrudTable
        title="Platos"
        fields={[
          { key: "nombre", label: "Plato" },
          { key: "categoria", label: "Categoría" },
          { key: "precio", label: "Precio", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Pizza Margherita", categoria: "Pizzas", precio: 32000, estado: "Disponible" },
          { id: 2, nombre: "Ensalada César", categoria: "Ensaladas", precio: 24000, estado: "Disponible" },
          { id: 3, nombre: "Pasta Carbonara", categoria: "Pastas", precio: 29000, estado: "Disponible" },
          { id: 4, nombre: "Sopa de Tomate", categoria: "Entradas", precio: 18000, estado: "Agotado" },
          { id: 5, nombre: "Tiramisú", categoria: "Postres", precio: 16000, estado: "Disponible" },
          { id: 6, nombre: "Limonada Natural", categoria: "Bebidas", precio: 9000, estado: "Agotado" },
        ]}
      />
    </div>
  );
}
