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

type Pago = { factura: string; cliente: string; monto: string; metodo: string; fecha: string; estado: string };

const MOCK: Pago[] = [
  { factura: "FAC-1042", cliente: "Acme Corp", monto: "$12,400", metodo: "Transferencia", fecha: "01 Jun 2026", estado: "Conciliado" },
  { factura: "FAC-1038", cliente: "Umbrella Inc.", monto: "$22,100", metodo: "Tarjeta", fecha: "30 May 2026", estado: "Conciliado" },
  { factura: "FAC-1041", cliente: "Globex S.A.", monto: "$8,900", metodo: "Transferencia", fecha: "29 May 2026", estado: "Procesando" },
  { factura: "FAC-1036", cliente: "Wayne Enterprises", monto: "$6,750", metodo: "Efectivo", fecha: "24 May 2026", estado: "Conciliado" },
  { factura: "FAC-1035", cliente: "Hooli", monto: "$3,200", metodo: "Tarjeta", fecha: "21 May 2026", estado: "Rechazado" },
];

const tone = (e: string) => (e === "Conciliado" ? "success" : e === "Procesando" ? "warning" : "danger");

export default function Page() {
  const router = useRouter();
  const [rows, setRows] = useState(MOCK);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pagos"
        subtitle="Pagos recibidos y su estado de conciliación."
        action={
          <Button variant="primary" className="cursor-pointer" onClick={() => router.push("/pago/create")}>
            <Plus size={16} /> Registrar pago
          </Button>
        }
      />
      <Card className="!p-0">
        <DataTable<Pago>
          rows={rows}
          columns={[
            { key: "factura", header: "Factura", render: (r) => <span className="font-medium text-slate-900">{r.factura}</span> },
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
            { key: "metodo", header: "Método", render: (r) => <span className="text-slate-500">{r.metodo}</span> },
            { key: "fecha", header: "Fecha", render: (r) => <span className="text-slate-500">{r.fecha}</span> },
            { key: "estado", header: "Estado", render: (r) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
            {
              key: "acciones", header: "", align: "right",
              render: (r) => (
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" className="cursor-pointer !px-2" onClick={() => router.push("/pago/create")}>
                    <Pencil size={15} /> Editar
                  </Button>
                  <Button variant="danger" className="cursor-pointer !px-2" onClick={() => setRows((p) => p.filter((x) => x.factura !== r.factura))}>
                    <Trash2 size={15} /> Eliminar
                  </Button>
                </div>
              ),
            },
          ]}
          empty="Aún no se han registrado pagos."
        />
      </Card>
    </div>
  );
}
