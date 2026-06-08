"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Disponible: "success", Reservado: "warning", Vendido: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Propiedades" subtitle="Inventario de inmuebles en venta y arriendo." />
      <CrudTable
        title="Propiedades"
        fields={[
          { key: "titulo", label: "Título" },
          { key: "tipo", label: "Tipo" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <span>${Number(r.precio).toLocaleString("es-CO")}</span> },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, titulo: "Apto 302 · Laureles", tipo: "Apartamento", precio: 420000000, estado: "Disponible" },
          { id: 2, titulo: "Casa Campestre · Llanogrande", tipo: "Casa", precio: 950000000, estado: "Reservado" },
          { id: 3, titulo: "Local 14 · El Poblado", tipo: "Local", precio: 310000000, estado: "Disponible" },
          { id: 4, titulo: "Lote 7 · Rionegro", tipo: "Lote", precio: 180000000, estado: "Vendido" },
          { id: 5, titulo: "Apto 1201 · Envigado", tipo: "Apartamento", precio: 560000000, estado: "Disponible" },
        ]}
      />
    </div>
  );
}
