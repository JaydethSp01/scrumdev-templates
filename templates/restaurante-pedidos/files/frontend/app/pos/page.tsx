"use client";
import { POSBoard } from "@/components/ui/POSBoard";
import { PageHeader } from "@/components/ui/PageHeader";
export default function POSPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Punto de venta" subtitle="Toma pedidos en mesa o barra y cobra al instante." />
      <POSBoard />
    </div>
  );
}
