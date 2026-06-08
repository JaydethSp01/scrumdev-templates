"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Proveedores" subtitle="Catering, decoración, música y más aliados." />
      <CrudTable
        title="Proveedores"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "servicio", label: "Servicio" },
          { key: "costo", label: "Costo", type: "number", render: (r: any) => <span>${Number(r.costo).toLocaleString()}</span> },
          { key: "contacto", label: "Contacto" },
        ]}
        initial={[
          { id: 1, nombre: "Sabores Gourmet", servicio: "Catering", costo: 9500000, contacto: "300 111 2233" },
          { id: 2, nombre: "Flor & Estilo", servicio: "Decoración", costo: 6200000, contacto: "301 444 5566" },
          { id: 3, nombre: "DJ Sonora", servicio: "Música y sonido", costo: 3800000, contacto: "310 777 8899" },
          { id: 4, nombre: "Lente Mágico", servicio: "Fotografía y video", costo: 5400000, contacto: "320 222 3344" },
          { id: 5, nombre: "Luz Eventos", servicio: "Iluminación", costo: 2900000, contacto: "315 666 1010" },
        ]}
      />
    </div>
  );
}
