"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Cliente: "success", Prospecto: "info" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Contactos" subtitle="Personas con las que mantienes relación comercial." />
      <CrudTable
        title="Contactos"
        fields={[
          { key: "nombre", label: "Contacto" },
          { key: "cargo", label: "Cargo" },
          { key: "empresa", label: "Empresa" },
          { key: "telefono", label: "Teléfono" },
          { key: "tipo", label: "Tipo", render: (r: any) => <Badge tone={toneFor(r.tipo)}>{r.tipo}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "Carlos Ruiz", cargo: "CTO", empresa: "TechCorp", telefono: "+57 300 111 2233", tipo: "Cliente" },
          { id: 2, nombre: "Elena Ríos", cargo: "Gerente de TI", empresa: "SoftSolutions", telefono: "+57 311 444 5566", tipo: "Cliente" },
          { id: 3, nombre: "Juan Pérez", cargo: "Fundador", empresa: "Innova Labs", telefono: "+57 320 777 8899", tipo: "Prospecto" },
          { id: 4, nombre: "Ana Gómez", cargo: "Directora", empresa: "DataBridge", telefono: "+57 301 222 3344", tipo: "Prospecto" },
          { id: 5, nombre: "Sofía Vargas", cargo: "COO", empresa: "Orbit", telefono: "+57 315 555 6677", tipo: "Cliente" },
        ]}
      />
    </div>
  );
}
