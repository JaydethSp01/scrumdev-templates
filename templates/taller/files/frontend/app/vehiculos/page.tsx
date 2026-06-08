"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Vehículos" subtitle="Vehículos registrados de los clientes del taller." />
      <CrudTable
        title="Vehículos"
        fields={[
          { key: "placa", label: "Placa" },
          { key: "marca", label: "Marca" },
          { key: "modelo", label: "Modelo" },
          { key: "anio", label: "Año", type: "number" },
          { key: "cliente", label: "Cliente" },
        ]}
        initial={[
          { id: 1, placa: "GHK-482", marca: "Mazda", modelo: "Mazda 3", anio: 2019, cliente: "Juan Pérez" },
          { id: 2, placa: "KLP-203", marca: "Chevrolet", modelo: "Sail", anio: 2017, cliente: "Ana Gómez" },
          { id: 3, placa: "DQR-119", marca: "Renault", modelo: "Logan", anio: 2020, cliente: "Carlos Ruiz" },
          { id: 4, placa: "TWZ-660", marca: "Toyota", modelo: "Corolla", anio: 2021, cliente: "Laura Martínez" },
          { id: 5, placa: "BNM-755", marca: "Nissan", modelo: "Versa", anio: 2018, cliente: "Pedro Sánchez" },
        ]}
      />
    </div>
  );
}
