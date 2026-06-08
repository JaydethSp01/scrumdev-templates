"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { "En carrito": "warning", Reservado: "info" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Carrito" subtitle="Ítems en proceso de compra." />
      <CrudTable
        title="Carrito"
        fields={[
          { key: "producto", label: "Producto" },
          { key: "talla", label: "Talla" },
          { key: "cantidad", label: "Cantidad", type: "number" },
          { key: "precio", label: "Precio", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, producto: "Vestido midi floral", talla: "M", cantidad: 1, precio: 159900, estado: "En carrito" },
          { id: 2, producto: "Botines de cuero", talla: "38", cantidad: 1, precio: 239900, estado: "Reservado" },
          { id: 3, producto: "Bolso bandolera", talla: "Única", cantidad: 2, precio: 119900, estado: "En carrito" },
          { id: 4, producto: "Blusa de seda", talla: "S", cantidad: 1, precio: 89900, estado: "En carrito" },
          { id: 5, producto: "Falda plisada", talla: "M", cantidad: 1, precio: 99900, estado: "Reservado" },
        ]}
      />
    </div>
  );
}
