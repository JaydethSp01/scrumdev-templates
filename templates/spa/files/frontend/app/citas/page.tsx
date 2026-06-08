"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function CitasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Citas" subtitle="Agenda de citas con cliente, servicio, empleado y estado." />
      <CrudTable
        title="Citas"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "servicio", label: "Servicio" },
          { key: "empleado", label: "Empleado" },
          { key: "fecha", label: "Fecha / hora" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Confirmada" ? "success" : r.estado === "En espera" ? "warning" : r.estado === "Atendida" ? "info" : "neutral"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, cliente: "Valentina Ríos", servicio: "Masaje relajante", empleado: "Sara Méndez", fecha: "08 jun 2026 · 10:00", estado: "Confirmada" },
          { id: 2, cliente: "Camila Soto", servicio: "Limpieza facial", empleado: "Daniela Ruiz", fecha: "08 jun 2026 · 11:30", estado: "En espera" },
          { id: 3, cliente: "Andrea Pinto", servicio: "Manicure spa", empleado: "Laura Vega", fecha: "08 jun 2026 · 13:00", estado: "Atendida" },
          { id: 4, cliente: "Lucía Moreno", servicio: "Depilación con cera", empleado: "Sara Méndez", fecha: "08 jun 2026 · 15:30", estado: "Confirmada" },
          { id: 5, cliente: "Mariana Castro", servicio: "Masaje con piedras", empleado: "Daniela Ruiz", fecha: "09 jun 2026 · 09:15", estado: "En espera" },
        ]}
      />
    </div>
  );
}
