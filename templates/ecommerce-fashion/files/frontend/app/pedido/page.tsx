"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Pagado: "success", Enviado: "info", Pendiente: "warning", Cancelado: "danger" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pedidos" subtitle="Seguimiento de compras y estados de envío." />
      <CrudTable
        title="Pedidos"
        fields={[
          { key: "codigo", label: "Pedido" },
          { key: "cliente", label: "Cliente" },
          { key: "items", label: "Ítems", type: "number" },
          { key: "total", label: "Total", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, codigo: "#MS-1042", cliente: "Valentina Ríos", items: 2, total: 287800, estado: "Pagado" },
          { id: 2, codigo: "#MS-1041", cliente: "Camila Soto", items: 1, total: 239900, estado: "Enviado" },
          { id: 3, codigo: "#MS-1040", cliente: "Mariana Peña", items: 1, total: 119900, estado: "Pendiente" },
          { id: 4, codigo: "#MS-1039", cliente: "Lucía Fernández", items: 3, total: 419700, estado: "Cancelado" },
          { id: 5, codigo: "#MS-1038", cliente: "Daniela Castro", items: 2, total: 199800, estado: "Pagado" },
        ]}
      />
    </div>
  );
}
