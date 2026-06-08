"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Visible: "success", Oculta: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Categorías" subtitle="Organiza tu catálogo por colecciones." />
      <CrudTable
        title="Categorías"
        fields={[
          { key: "nombre", label: "Categoría" },
          { key: "descripcion", label: "Descripción" },
          { key: "productos", label: "Productos", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Vestidos", descripcion: "Casuales, de fiesta y de oficina", productos: 68, estado: "Visible" },
          { id: 2, nombre: "Calzado", descripcion: "Botines, tacones y zapatillas", productos: 52, estado: "Visible" },
          { id: 3, nombre: "Accesorios", descripcion: "Bolsos, cinturones y joyería", productos: 44, estado: "Visible" },
          { id: 4, nombre: "Abrigos", descripcion: "Chaquetas, blazers y gabanes", productos: 36, estado: "Visible" },
          { id: 5, nombre: "Edición limitada", descripcion: "Colecciones de temporada", productos: 8, estado: "Oculta" },
        ]}
      />
    </div>
  );
}
