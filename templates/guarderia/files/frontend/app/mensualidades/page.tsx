"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function MensualidadesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Mensualidades" subtitle="Control de pagos mensuales por niño." />
      <CrudTable title="Mensualidades"
        fields={[
          { key: "nino", label: "Niño" },
          { key: "valor", label: "Valor", type: "number", render: (r: any) => <span>${Number(r.valor).toLocaleString("es-CO")}</span> },
          { key: "mes", label: "Mes" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Pagada" ? "success" : "warning"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nino: "Mariana Torres", valor: 320000, mes: "Junio", estado: "Pagada" },
          { id: 2, nino: "Samuel Rojas", valor: 320000, mes: "Junio", estado: "Pendiente" },
          { id: 3, nino: "Valentina Díaz", valor: 350000, mes: "Junio", estado: "Pagada" },
          { id: 4, nino: "Mateo Gómez", valor: 350000, mes: "Junio", estado: "Pendiente" },
        ]} />
    </div>
  );
}
