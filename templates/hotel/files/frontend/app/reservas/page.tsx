"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function ReservasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Reservas" subtitle="Gestiona reservas, fechas de entrada/salida y estado." />
      <CrudTable title="Reservas"
        fields={[
          { key: "huesped", label: "Huésped" },
          { key: "habitacion", label: "Habitación" },
          { key: "checkin", label: "Check-in" },
          { key: "checkout", label: "Check-out" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Check-in" ? "success" : r.estado === "Pendiente" ? "warning" : "brand"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, huesped: "Juan Pérez", habitacion: "101 · Doble", checkin: "2026-06-07", checkout: "2026-06-09", estado: "Confirmada" },
          { id: 2, huesped: "Ana Gómez", habitacion: "205 · Suite", checkin: "2026-06-07", checkout: "2026-06-10", estado: "Check-in" },
          { id: 3, huesped: "Carlos Ruiz", habitacion: "110 · Sencilla", checkin: "2026-06-08", checkout: "2026-06-09", estado: "Pendiente" },
          { id: 4, huesped: "Laura Martínez", habitacion: "302 · Suite", checkin: "2026-06-07", checkout: "2026-06-11", estado: "Confirmada" },
        ]} />
    </div>
  );
}
