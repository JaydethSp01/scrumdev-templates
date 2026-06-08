"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Agotado: "danger", "Crítico": "danger", "Stock bajo": "warning" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Alertas de stock" subtitle="Productos que cruzaron su umbral mínimo de reposición" />
      <CrudTable
        title="Alertas"
        fields={[
          { key: "producto", label: "Producto" },
          { key: "talla", label: "Talla" },
          { key: "stock", label: "Stock actual", type: "number" },
          { key: "umbral", label: "Umbral", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, producto: "Zapatilla Runner Pro", talla: "42", stock: 0, umbral: 10, estado: "Agotado" },
          { id: 2, producto: "Mochila Urban 24L", talla: "Única", stock: 4, umbral: 8, estado: "Crítico" },
          { id: 3, producto: "Camiseta Oversize Negra", talla: "L", stock: 6, umbral: 12, estado: "Stock bajo" },
          { id: 4, producto: "Chaqueta de Cuero", talla: "M", stock: 2, umbral: 6, estado: "Crítico" },
          { id: 5, producto: "Vestido de Verano", talla: "S", stock: 9, umbral: 10, estado: "Stock bajo" },
        ]}
      />
    </div>
  );
}
