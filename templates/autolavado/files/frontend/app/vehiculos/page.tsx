"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

const toneFor = (e: string) => (e === "Listo" ? "success" : e === "Lavando" ? "info" : "warning");

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Vehículos" subtitle="Vehículos registrados y su estado en el autolavado." />
      <CrudTable
        title="Vehículos"
        fields={[
          { key: "placa", label: "Placa" },
          { key: "tipo", label: "Tipo" },
          { key: "cliente", label: "Cliente" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, placa: "KJP-21A", tipo: "Automóvil", cliente: "Juan Pérez", estado: "Lavando" },
          { id: 2, placa: "FGT-90C", tipo: "Automóvil", cliente: "Ana Gómez", estado: "En espera" },
          { id: 3, placa: "DRT-55B", tipo: "Camioneta", cliente: "Carlos Ruiz", estado: "Listo" },
          { id: 4, placa: "HJK-12D", tipo: "Automóvil", cliente: "Laura Martínez", estado: "Lavando" },
          { id: 5, placa: "LMN-77E", tipo: "Motocicleta", cliente: "Pedro Sánchez", estado: "En espera" },
        ]}
      />
    </div>
  );
}
