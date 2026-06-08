"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
const tone = (e: string) => (e === "Confirmada" ? "success" : e === "Pendiente" ? "warning" : e === "Cancelada" ? "danger" : "info");
export default function CitasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Citas" subtitle="Agenda de citas por cliente, servicio y empleado." />
      <CrudTable
        title="Citas"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "servicio", label: "Servicio" },
          { key: "empleado", label: "Empleado" },
          { key: "fecha", label: "Fecha" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, cliente: "Laura Méndez", servicio: "Corte y peinado", empleado: "Sofía Vargas", fecha: "2026-06-08 10:00", estado: "Confirmada" },
          { id: 2, cliente: "Carlos Ríos", servicio: "Barba y perfilado", empleado: "Mateo Ruiz", fecha: "2026-06-08 11:30", estado: "Pendiente" },
          { id: 3, cliente: "Ana Salas", servicio: "Tinte completo", empleado: "Sofía Vargas", fecha: "2026-06-08 13:00", estado: "Confirmada" },
          { id: 4, cliente: "Diego Torres", servicio: "Manicure", empleado: "Valeria Soto", fecha: "2026-06-08 15:30", estado: "En curso" },
        ]}
      />
    </div>
  );
}
