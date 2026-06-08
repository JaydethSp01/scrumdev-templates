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
      <PageHeader title="Stock" subtitle="Existencias por producto y talla" />
      <CrudTable
        title="Stock"
        fields={[
          { key: "producto", label: "Producto" },
          { key: "talla", label: "Talla" },
          { key: "cantidad", label: "Cantidad", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, producto: "Zapatilla Runner Pro", talla: "42", cantidad: 0, estado: "Agotado" },
          { id: 2, producto: "Camiseta Oversize Negra", talla: "L", cantidad: 6, estado: "Stock bajo" },
          { id: 3, producto: "Mochila Urban 24L", talla: "Única", cantidad: 4, estado: "Stock bajo" },
          { id: 4, producto: "Gorra Trucker Índigo", talla: "Única", cantidad: 87, estado: "En stock" },
          { id: 5, producto: "Pantalón Cargo Slim", talla: "M", cantidad: 132, estado: "En stock" },
          { id: 6, producto: "Sudadera Tech Fleece", talla: "XL", cantidad: 41, estado: "En stock" },
        ]}
      />
    </div>
  );
}
