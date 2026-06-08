"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Activo: "success", Agotado: "danger", Borrador: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Productos" subtitle="Catálogo y disponibilidad de tu tienda." />
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
          { id: 1, nombre: "Vestido midi floral", categoria: "Vestidos", precio: 159900, stock: 18, estado: "Activo" },
          { id: 2, nombre: "Botines de cuero", categoria: "Calzado", precio: 239900, stock: 7, estado: "Activo" },
          { id: 3, nombre: "Bolso bandolera", categoria: "Accesorios", precio: 119900, stock: 0, estado: "Agotado" },
          { id: 4, nombre: "Abrigo oversize lana", categoria: "Abrigos", precio: 289900, stock: 12, estado: "Activo" },
          { id: 5, nombre: "Blusa de seda", categoria: "Tops", precio: 89900, stock: 24, estado: "Activo" },
          { id: 6, nombre: "Falda plisada", categoria: "Faldas", precio: 99900, stock: 0, estado: "Borrador" },
        ]}
      />
    </div>
  );
}
