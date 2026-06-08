"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { VIP: "brand", Recurrente: "info", Nuevo: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Tu base de compradoras y su actividad." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Cliente" },
          { key: "email", label: "Email", type: "email" },
          { key: "pedidos", label: "Pedidos", type: "number" },
          { key: "gastado", label: "Total gastado", type: "number" },
          { key: "segmento", label: "Segmento", render: (r: any) => <Badge tone={toneFor(r.segmento)}>{r.segmento}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Valentina Ríos", email: "valentina.rios@email.com", pedidos: 14, gastado: 1820000, segmento: "VIP" },
          { id: 2, nombre: "Camila Soto", email: "camila.soto@email.com", pedidos: 6, gastado: 540500, segmento: "Recurrente" },
          { id: 3, nombre: "Mariana Peña", email: "mariana.pena@email.com", pedidos: 2, gastado: 144000, segmento: "Nuevo" },
          { id: 4, nombre: "Lucía Fernández", email: "lucia.fernandez@email.com", pedidos: 9, gastado: 1130000, segmento: "VIP" },
          { id: 5, nombre: "Daniela Castro", email: "daniela.castro@email.com", pedidos: 4, gastado: 318000, segmento: "Recurrente" },
        ]}
      />
    </div>
  );
}
