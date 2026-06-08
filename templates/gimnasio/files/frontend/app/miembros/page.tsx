"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function MiembrosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Miembros" subtitle="Directorio de miembros, su plan y estado de membresía." />
      <CrudTable title="Miembros"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "plan", label: "Plan" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Activo" ? "success" : "danger"}>{r.estado}</Badge> },
          { key: "vencimiento", label: "Vencimiento" },
        ]}
        initial={[
          { id: 1, nombre: "Pedro Ramírez", plan: "Premium", estado: "Activo", vencimiento: "2026-08-15" },
          { id: 2, nombre: "María López", plan: "Básico", estado: "Activo", vencimiento: "2026-07-02" },
          { id: 3, nombre: "Andrés Gómez", plan: "Trimestral", estado: "Vencido", vencimiento: "2026-05-20" },
          { id: 4, nombre: "Ruth Díaz", plan: "Anual", estado: "Activo", vencimiento: "2027-01-10" },
        ]} />
    </div>
  );
}
