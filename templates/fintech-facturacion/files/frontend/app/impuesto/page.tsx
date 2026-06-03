"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type Impuesto = { descripcion: string; tasa: string; recaudado: string; estado: string };

const MOCK: Impuesto[] = [
  { descripcion: "IVA general", tasa: "19%", recaudado: "$38,400", estado: "Activo" },
  { descripcion: "IVA reducido", tasa: "5%", recaudado: "$6,200", estado: "Activo" },
  { descripcion: "Retención en la fuente", tasa: "2.5%", recaudado: "$4,800", estado: "Activo" },
  { descripcion: "ICA municipal", tasa: "0.7%", recaudado: "$1,350", estado: "Activo" },
  { descripcion: "Impuesto al consumo", tasa: "8%", recaudado: "$0", estado: "Inactivo" },
];

const tone = (e: string) => (e === "Activo" ? "success" : "neutral");

export default function Page() {
  const router = useRouter();
  const [rows, setRows] = useState(MOCK);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Impuestos"
        subtitle="Configura las tasas aplicadas a tus facturas y su recaudo."
        action={
          <Button variant="primary" className="cursor-pointer" onClick={() => router.push("/impuesto/create")}>
            <Plus size={16} /> Nuevo impuesto
          </Button>
        }
      />
      <Card className="!p-0">
        <DataTable<Impuesto>
          rows={rows}
          columns={[
            { key: "descripcion", header: "Descripción", render: (r) => <span className="font-medium text-slate-900">{r.descripcion}</span> },
            { key: "tasa", header: "Tasa", align: "right", render: (r) => <span className="font-semibold text-brand">{r.tasa}</span> },
            { key: "recaudado", header: "Recaudado", align: "right", render: (r) => <span className="font-semibold text-slate-900">{r.recaudado}</span> },
            { key: "estado", header: "Estado", render: (r) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
            {
              key: "acciones", header: "", align: "right",
              render: (r) => (
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" className="cursor-pointer !px-2" onClick={() => router.push("/impuesto/create")}>
                    <Pencil size={15} /> Editar
                  </Button>
                  <Button variant="danger" className="cursor-pointer !px-2" onClick={() => setRows((p) => p.filter((x) => x.descripcion !== r.descripcion))}>
                    <Trash2 size={15} /> Eliminar
                  </Button>
                </div>
              ),
            },
          ]}
          empty="Aún no has configurado impuestos."
        />
      </Card>
    </div>
  );
}
