"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Fertilizante: "success", Herbicida: "warning", Fungicida: "info", Semilla: "brand", Insecticida: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Insumos" subtitle="Inventario de insumos agrícolas y existencias en bodega." />
      <CrudTable
        title="Insumos"
        fields={[
          { key: "nombre", label: "Insumo" },
          { key: "tipo", label: "Tipo", render: (r: any) => <Badge tone={toneFor(r.tipo)}>{r.tipo}</Badge> },
          { key: "stock", label: "Stock", type: "number" },
          { key: "unidad", label: "Unidad" },
        ]}
        initial={[
          { id: 1, nombre: "Urea 46%", tipo: "Fertilizante", stock: 120, unidad: "kg" },
          { id: 2, nombre: "Glifosato", tipo: "Herbicida", stock: 45, unidad: "L" },
          { id: 3, nombre: "Mancozeb", tipo: "Fungicida", stock: 30, unidad: "kg" },
          { id: 4, nombre: "Semilla de maíz", tipo: "Semilla", stock: 80, unidad: "kg" },
          { id: 5, nombre: "Clorpirifos", tipo: "Insecticida", stock: 18, unidad: "L" },
        ]}
      />
    </div>
  );
}
