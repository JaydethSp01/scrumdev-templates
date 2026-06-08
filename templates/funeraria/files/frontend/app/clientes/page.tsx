"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" subtitle="Familiares y allegados que acompañamos en cada servicio." />
      <CrudTable
        title="Clientes"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "parentesco", label: "Parentesco" },
          { key: "servicio", label: "Servicio" },
        ]}
        initial={[
          { id: 1, nombre: "Marta Díaz", telefono: "300 123 4567", parentesco: "Esposa", servicio: "Sr. Roberto Díaz" },
          { id: 2, nombre: "Andrés Ríos", telefono: "301 765 4321", parentesco: "Hijo", servicio: "Sra. Carmen Ríos" },
          { id: 3, nombre: "Patricia Mejía", telefono: "310 222 1133", parentesco: "Hija", servicio: "Sr. Jorge Mejía" },
          { id: 4, nombre: "Camilo Vargas", telefono: "320 555 9090", parentesco: "Hermano", servicio: "Sra. Lucía Vargas" },
        ]}
      />
    </div>
  );
}
