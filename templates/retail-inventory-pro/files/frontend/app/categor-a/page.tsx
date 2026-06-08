"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Activa: "success", Inactiva: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Categorías" subtitle="Organiza el catálogo por líneas de producto" />
      <CrudTable
        title="Categorías"
        fields={[
          { key: "nombre", label: "Categoría" },
          { key: "skus", label: "SKUs", type: "number" },
          { key: "valor", label: "Valor inventario", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Calzado", skus: 84, valor: 41200000, estado: "Activa" },
          { id: 2, nombre: "Ropa", skus: 126, valor: 38900000, estado: "Activa" },
          { id: 3, nombre: "Accesorios", skus: 71, valor: 18400000, estado: "Activa" },
          { id: 4, nombre: "Deportes", skus: 48, valor: 22700000, estado: "Activa" },
          { id: 5, nombre: "Outlet", skus: 13, valor: 3100000, estado: "Inactiva" },
        ]}
      />
    </div>
  );
}
