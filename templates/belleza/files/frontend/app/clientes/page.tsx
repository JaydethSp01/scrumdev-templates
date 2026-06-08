"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Directorio de clientes, preferencias y última visita." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "ultima_visita", label: "Última visita" },
          { key: "preferencia", label: "Preferencia", render: (r: any) => <Badge tone="info">{r.preferencia}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Laura Méndez", telefono: "300 111 2233", ultima_visita: "2026-05-28", preferencia: "Corte y peinado" },
          { id: 2, nombre: "Carlos Ríos", telefono: "301 444 5566", ultima_visita: "2026-06-01", preferencia: "Barba" },
          { id: 3, nombre: "Ana Salas", telefono: "310 777 8899", ultima_visita: "2026-05-20", preferencia: "Tinte" },
          { id: 4, nombre: "Diego Torres", telefono: "320 222 3344", ultima_visita: "2026-06-04", preferencia: "Manicure" },
        ]}
      />
    </div>
  );
}
