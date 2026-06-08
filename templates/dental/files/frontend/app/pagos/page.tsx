"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Efectivo: "success", Tarjeta: "info", Transferencia: "brand", PSE: "warning" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pagos" subtitle="Registro de pagos de tratamientos por paciente." />
      <CrudTable
        title="Pagos"
        fields={[
          { key: "paciente", label: "Paciente" },
          { key: "monto", label: "Monto", type: "number", render: (r: any) => <span>${Number(r.monto).toLocaleString("es-CO")}</span> },
          { key: "metodo", label: "Método", render: (r: any) => <Badge tone={toneFor(r.metodo)}>{r.metodo}</Badge> },
          { key: "fecha", label: "Fecha" },
        ]}
        initial={[
          { id: 1, paciente: "Juan Pérez", monto: 120000, metodo: "Efectivo", fecha: "07 jun 2026" },
          { id: 2, paciente: "Ana Gómez", monto: 950000, metodo: "Tarjeta", fecha: "07 jun 2026" },
          { id: 3, paciente: "Carlos Ruiz", monto: 650000, metodo: "Transferencia", fecha: "06 jun 2026" },
          { id: 4, paciente: "Laura Martínez", monto: 480000, metodo: "PSE", fecha: "06 jun 2026" },
          { id: 5, paciente: "Pedro Sánchez", monto: 220000, metodo: "Efectivo", fecha: "05 jun 2026" },
        ]}
      />
    </div>
  );
}
