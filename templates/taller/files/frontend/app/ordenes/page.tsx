"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { "En proceso": "warning", Listo: "info", Entregado: "success" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Órdenes" subtitle="Órdenes de servicio del taller con su estado y total." />
      <CrudTable
        title="Órdenes"
        fields={[
          { key: "vehiculo", label: "Vehículo" },
          { key: "cliente", label: "Cliente" },
          { key: "servicio", label: "Servicio" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
          { key: "total", label: "Total", type: "number", render: (r: any) => `$${Number(r.total).toLocaleString("es-CO")}` },
        ]}
        initial={[
          { id: 1, vehiculo: "Mazda 3 · GHK-482", cliente: "Juan Pérez", servicio: "Cambio de frenos", estado: "En proceso", total: 320000 },
          { id: 2, vehiculo: "Chevrolet Sail · KLP-203", cliente: "Ana Gómez", servicio: "Cambio de aceite", estado: "Listo", total: 145000 },
          { id: 3, vehiculo: "Renault Logan · DQR-119", cliente: "Carlos Ruiz", servicio: "Revisión de motor", estado: "En proceso", total: 680000 },
          { id: 4, vehiculo: "Toyota Corolla · TWZ-660", cliente: "Laura Martínez", servicio: "Alineación y balanceo", estado: "Entregado", total: 210000 },
          { id: 5, vehiculo: "Nissan Versa · BNM-755", cliente: "Pedro Sánchez", servicio: "Cambio de llantas", estado: "Entregado", total: 540000 },
        ]}
      />
    </div>
  );
}
