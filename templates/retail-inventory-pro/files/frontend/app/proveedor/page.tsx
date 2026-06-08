"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";
const tones: Record<string, Tone> = { Activo: "success", Pendiente: "warning", Inactivo: "neutral" };
const toneFor = (s: string): Tone => tones[s] ?? "neutral";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Proveedores" subtitle="Red de surtido y contactos comerciales" />
      <CrudTable
        title="Proveedores"
        fields={[
          { key: "nombre", label: "Proveedor" },
          { key: "contacto", label: "Contacto", type: "email" },
          { key: "skus", label: "SKUs surtidos", type: "number" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={toneFor(r.estado)}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, nombre: "TextilNorte S.A.", contacto: "ventas@textilnorte.com", skus: 92, estado: "Activo" },
          { id: 2, nombre: "CalzaPro Distribuciones", contacto: "pedidos@calzapro.co", skus: 64, estado: "Activo" },
          { id: 3, nombre: "Accesorios Global", contacto: "info@accglobal.com", skus: 38, estado: "Activo" },
          { id: 4, nombre: "DeporteMax Import", contacto: "compras@deportemax.com", skus: 27, estado: "Pendiente" },
          { id: 5, nombre: "Outlet Mayorista", contacto: "contacto@outletmay.com", skus: 11, estado: "Inactivo" },
        ]}
      />
    </div>
  );
}
