"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

type Factura = { numero: string; cliente: string; monto: string; fecha: string; estado: string };

const MOCK: Factura[] = [
  { numero: "FAC-1042", cliente: "Acme Corp", monto: "$12,400", fecha: "01 Jun 2026", estado: "Pagada" },
  { numero: "FAC-1041", cliente: "Globex S.A.", monto: "$8,900", fecha: "29 May 2026", estado: "Pendiente" },
  { numero: "FAC-1040", cliente: "Initech Ltda.", monto: "$15,750", fecha: "20 May 2026", estado: "Vencida" },
  { numero: "FAC-1039", cliente: "Soylent Co.", monto: "$4,200", fecha: "18 May 2026", estado: "Enviada" },
  { numero: "FAC-1038", cliente: "Umbrella Inc.", monto: "$22,100", fecha: "12 May 2026", estado: "Pagada" },
  { numero: "FAC-1037", cliente: "Stark Industries", monto: "$31,500", fecha: "05 May 2026", estado: "Pendiente" },
];

const tone = (e: string) =>
  e === "Pagada" ? "success" : e === "Pendiente" ? "warning" : e === "Vencida" ? "danger" : "info";

export default function Page() {
  const router = useRouter();
  const [rows, setRows] = useState(MOCK);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Facturas"
        subtitle="Gestiona la emisión y el estado de cobro de tus facturas."
        action={
          <Button variant="primary" className="cursor-pointer" onClick={() => router.push("/factura/create")}>
            <Plus size={16} /> Nueva factura
          </Button>
        }
      />
      <Card className="!p-0">
        <DataTable<Factura>
          rows={rows}
          columns={[
            { key: "numero", header: "Número", render: (r) => <span className="font-medium text-slate-900">{r.numero}</span> },
            {
              key: "cliente", header: "Cliente",
              render: (r) => (
                <div className="flex items-center gap-3">
                  <Avatar name={r.cliente} />
                  <span className="text-slate-700">{r.cliente}</span>
                </div>
              ),
            },
            { key: "monto", header: "Monto", align: "right", render: (r) => <span className="font-semibold text-slate-900">{r.monto}</span> },
            { key: "fecha", header: "Fecha", render: (r) => <span className="text-slate-500">{r.fecha}</span> },
            { key: "estado", header: "Estado", render: (r) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
            {
              key: "acciones", header: "", align: "right",
              render: (r) => (
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" className="cursor-pointer !px-2" onClick={() => router.push("/factura/create")}>
                    <Pencil size={15} /> Editar
                  </Button>
                  <Button variant="danger" className="cursor-pointer !px-2" onClick={() => setRows((p) => p.filter((x) => x.numero !== r.numero))}>
                    <Trash2 size={15} /> Eliminar
                  </Button>
                </div>
              ),
            },
          ]}
          empty="Aún no has emitido facturas."
        />
      </Card>
    </div>
  );
}
