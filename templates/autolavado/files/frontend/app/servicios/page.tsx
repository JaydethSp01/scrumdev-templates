"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

const toneFor = (e: string) => (e === "Listo" ? "success" : e === "Lavando" ? "info" : "warning");

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Servicios" subtitle="Servicios de lavado en curso, su precio y estado." />
      <CrudTable
        title="Servicios"
        fields={[
          { key: "vehiculo", label: "Vehículo" },
          { key: "tipo", label: "Tipo de servicio" },
          { key: "empleado", label: "Empleado" },
          { key: "precio", label: "Precio", type: "number", render: (r: any) => `$${Number(r.precio).toLocaleString("es-CO")}` },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, vehiculo: "Mazda 3 · KJP-21A", tipo: "Lavado básico", empleado: "Andrés Mora", precio: 18000, estado: "Lavando" },
          { id: 2, vehiculo: "Renault Logan · FGT-90C", tipo: "Lavado premium", empleado: "Felipe Díaz", precio: 35000, estado: "En espera" },
          { id: 3, vehiculo: "Toyota Hilux · DRT-55B", tipo: "Encerado", empleado: "Ruth Salas", precio: 50000, estado: "Listo" },
          { id: 4, vehiculo: "Chevrolet Onix · HJK-12D", tipo: "Polichado", empleado: "Andrés Mora", precio: 80000, estado: "Lavando" },
          { id: 5, vehiculo: "Kia Picanto · LMN-77E", tipo: "Lavado básico", empleado: "Diana Ríos", precio: 18000, estado: "En espera" },
        ]}
      />
    </div>
  );
}
