"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function MiembrosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Miembros" subtitle="Directorio de la congregación, ministerio y bautismo." />
      <CrudTable title="Miembros"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "ministerio", label: "Ministerio" },
          { key: "telefono", label: "Teléfono" },
          { key: "bautizado", label: "Bautizado", render: (r: any) => <Badge tone={r.bautizado === "Sí" ? "success" : "warning"}>{r.bautizado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Pedro Ramírez", ministerio: "Alabanza", telefono: "300 111 2233", bautizado: "Sí" },
          { id: 2, nombre: "María López", ministerio: "Intercesión", telefono: "301 444 5566", bautizado: "Sí" },
          { id: 3, nombre: "Andrés Gómez", ministerio: "Jóvenes", telefono: "310 777 8899", bautizado: "No" },
          { id: 4, nombre: "Ruth Díaz", ministerio: "Niños", telefono: "320 222 3344", bautizado: "Sí" },
        ]} />
    </div>
  );
}
