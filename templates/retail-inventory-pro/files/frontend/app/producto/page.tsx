"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { "En stock": "success", "Stock bajo": "warning", Agotado: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Productos" subtitle="Catálogo completo de SKUs con stock y precios" />
      <CrudTable
        title="Productos"
        fields={[
          { key: "nombre", label: "Producto" },
          { key: "categoria", label: "Categoría" },
          { key: "precio", label: "Precio", type: "number" },
          { key: "stock", label: "Stock", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Zapatilla Runner Pro", categoria: "Calzado", precio: 89990, stock: 0, estado: "Agotado" },
          { id: 2, nombre: "Camiseta Oversize Negra", categoria: "Ropa", precio: 24500, stock: 6, estado: "Stock bajo" },
          { id: 3, nombre: "Mochila Urban 24L", categoria: "Accesorios", precio: 59000, stock: 4, estado: "Stock bajo" },
          { id: 4, nombre: "Gorra Trucker Índigo", categoria: "Accesorios", precio: 19990, stock: 87, estado: "En stock" },
          { id: 5, nombre: "Pantalón Cargo Slim", categoria: "Ropa", precio: 44900, stock: 132, estado: "En stock" },
          { id: 6, nombre: "Sudadera Tech Fleece", categoria: "Deportes", precio: 64000, stock: 41, estado: "En stock" },
        ]}
      />
    </div>
  );
}
