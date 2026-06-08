"use client";
import { FacturacionModule } from "@/components/ui/FacturacionModule";
import { PageHeader } from "@/components/ui/PageHeader";
export default function FacturaPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Facturación electrónica" subtitle="Emite facturas con IVA, retención y CUFE (DIAN) — se guardan de verdad." />
      <FacturacionModule />
    </div>
  );
}
