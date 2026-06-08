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
      <PageHeader title="Tallas" subtitle="Curva de tallas disponible por tipo de producto" />
      <CrudTable
        title="Tallas"
        fields={[
          { key: "talla", label: "Talla" },
          { key: "tipo", label: "Tipo" },
          { key: "skus", label: "SKUs", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, talla: "S", tipo: "Ropa", skus: 58, estado: "Activa" },
          { id: 2, talla: "M", tipo: "Ropa", skus: 72, estado: "Activa" },
          { id: 3, talla: "L", tipo: "Ropa", skus: 64, estado: "Activa" },
          { id: 4, talla: "XL", tipo: "Ropa", skus: 39, estado: "Activa" },
          { id: 5, talla: "42", tipo: "Calzado", skus: 21, estado: "Activa" },
          { id: 6, talla: "Única", tipo: "Accesorios", skus: 47, estado: "Inactiva" },
        ]}
      />
    </div>
  );
}
