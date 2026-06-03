"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = [
  { id: 1, nombre: "TextilNorte S.A.", contacto: "ventas@textilnorte.com", skus: 92, estado: "Activo" },
  { id: 2, nombre: "CalzaPro Distribuciones", contacto: "pedidos@calzapro.co", skus: 64, estado: "Activo" },
  { id: 3, nombre: "Accesorios Global", contacto: "info@accglobal.com", skus: 38, estado: "Activo" },
  { id: 4, nombre: "DeporteMax Import", contacto: "compras@deportemax.com", skus: 27, estado: "Pendiente" },
  { id: 5, nombre: "Outlet Mayorista", contacto: "contacto@outletmay.com", skus: 11, estado: "Inactivo" },
];

const tone = (e: string) => (e === "Activo" ? "success" : e === "Pendiente" ? "warning" : "neutral");

export default function Page() {
  const router = useRouter();
  const [rows] = useState(MOCK);

  const columns = [
    {
      key: "nombre",
      header: "Proveedor",
      render: (r: any) => (
        <div className="flex items-center gap-3">
          <Avatar name={r.nombre} />
          <div>
            <p className="font-medium text-slate-900">{r.nombre}</p>
            <p className="text-sm text-slate-500">{r.contacto}</p>
          </div>
        </div>
      ),
    },
    { key: "skus", header: "SKUs surtidos", align: "right" as const, render: (r: any) => <span className="text-slate-600">{r.skus}</span> },
    { key: "estado", header: "Estado", render: (r: any) => <Badge tone={tone(r.estado)}>{r.estado}</Badge> },
    {
      key: "acciones",
      header: "",
      align: "right" as const,
      render: () => (
        <div className="flex justify-end gap-2">
          <Button variant="ghost" className="cursor-pointer">Editar</Button>
          <Button variant="danger" className="cursor-pointer">Eliminar</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Proveedores"
        subtitle="Red de surtido y contactos comerciales"
        action={<Button variant="primary" className="cursor-pointer" onClick={() => router.push("/proveedor/create")}><Plus size={16} /> Nuevo proveedor</Button>}
      />
      <Card className="!p-0">
        <DataTable columns={columns} rows={rows} />
      </Card>
    </div>
  );
}
