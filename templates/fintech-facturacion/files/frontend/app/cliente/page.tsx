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

type Cliente = { nombre: string; email: string; facturado: string; estado: string };

const MOCK: Cliente[] = [
  { nombre: "Acme Corp", email: "pagos@acme.com", facturado: "$84,200", estado: "Al día" },
  { nombre: "Globex S.A.", email: "finanzas@globex.com", facturado: "$31,500", estado: "Pendiente" },
  { nombre: "Initech Ltda.", email: "cuentas@initech.com", facturado: "$15,750", estado: "Moroso" },
  { nombre: "Soylent Co.", email: "admin@soylent.co", facturado: "$9,400", estado: "Al día" },
  { nombre: "Umbrella Inc.", email: "billing@umbrella.com", facturado: "$52,300", estado: "Al día" },
  { nombre: "Stark Industries", email: "pagos@stark.com", facturado: "$67,800", estado: "Pendiente" },
];

const tone = (e: string) => (e === "Al día" ? "success" : e === "Pendiente" ? "warning" : "danger");

export default function Page() {
  const router = useRouter();
  const [rows, setRows] = useState(MOCK);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Clientes"
        subtitle="Tu cartera de clientes y su comportamiento de pago."
        action={
          <Button variant="primary" className="cursor-pointer" onClick={() => router.push("/cliente/create")}>
            <Plus size={16} /> Nuevo cliente
          </Button>
        }
      />
      <Card className="!p-0">
        <DataTable<Cliente>
          rows={rows}
          columns={[
            {
              key: "nombre", header: "Cliente",
              render: (r) => (
                <div className="flex items-center gap-3">
                  <Avatar name={r.nombre} />
                  <span className="font-medium text-slate-900">{r.nombre}</span>
                </div>
              ),
            },
            { key: "email", header: "Email", render: (r) => <span className="text-slate-500">{r.email}</span> },
            { key: "facturado", header: "Facturado", align: "right", render: (r) => <span className="font-semibold text-slate-900">{r.facturado}</span> },
            { key: "estado", header: "Estado", render: (r) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
            {
              key: "acciones", header: "", align: "right",
              render: (r) => (
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" className="cursor-pointer !px-2" onClick={() => router.push("/cliente/create")}>
                    <Pencil size={15} /> Editar
                  </Button>
                  <Button variant="danger" className="cursor-pointer !px-2" onClick={() => setRows((p) => p.filter((x) => x.nombre !== r.nombre))}>
                    <Trash2 size={15} /> Eliminar
                  </Button>
                </div>
              ),
            },
          ]}
          empty="Aún no tienes clientes registrados."
        />
      </Card>
    </div>
  );
}
