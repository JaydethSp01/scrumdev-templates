"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function HabitacionesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Habitaciones" subtitle="Inventario de habitaciones, tipo, tarifa y disponibilidad." />
      <CrudTable title="Habitaciones"
        fields={[
          { key: "numero", label: "Número" },
          { key: "tipo", label: "Tipo", render: (r: any) => <Badge tone={r.tipo === "Suite" ? "brand" : r.tipo === "Doble" ? "info" : "muted"}>{r.tipo}</Badge> },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => <span>${Number(r.precio).toLocaleString()}</span> },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Libre" ? "success" : r.estado === "Ocupada" ? "warning" : "muted"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, numero: "101", tipo: "Sencilla", precio: 120000, estado: "Libre" },
          { id: 2, numero: "205", tipo: "Suite", precio: 380000, estado: "Ocupada" },
          { id: 3, numero: "110", tipo: "Doble", precio: 210000, estado: "Mantenimiento" },
          { id: 4, numero: "302", tipo: "Suite", precio: 400000, estado: "Libre" },
        ]} />
    </div>
  );
}
