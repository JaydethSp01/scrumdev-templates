"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = {
  "Odontología general": "brand", Ortodoncia: "info", Endodoncia: "warning",
  Periodoncia: "success", "Cirugía maxilofacial": "danger", Odontopediatría: "info",
};
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Odontólogos" subtitle="Equipo de odontólogos, su especialidad y carga de citas." />
      <CrudTable
        title="Odontólogos"
        fields={[
          { key: "nombre", label: "Odontólogo" },
          { key: "especialidad", label: "Especialidad", render: (r: any) => <Badge tone={toneFor(r.especialidad)}>{r.especialidad}</Badge> },
          { key: "citas", label: "Citas", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Dra. Rodríguez", especialidad: "Odontología general", citas: 142 },
          { id: 2, nombre: "Dr. Fernández", especialidad: "Ortodoncia", citas: 98 },
          { id: 3, nombre: "Dra. López", especialidad: "Endodoncia", citas: 76 },
          { id: 4, nombre: "Dr. Gómez", especialidad: "Odontopediatría", citas: 165 },
          { id: 5, nombre: "Dra. Torres", especialidad: "Cirugía maxilofacial", citas: 54 },
        ]}
      />
    </div>
  );
}
