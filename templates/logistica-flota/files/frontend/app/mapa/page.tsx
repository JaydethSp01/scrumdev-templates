"use client";
import { LiveMap } from "@/components/ui/LiveMap";
import { PageHeader } from "@/components/ui/PageHeader";
export default function MapaPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Mapa en vivo" subtitle="Rastrea tu flota y entregas en tiempo real." />
      <LiveMap />
    </div>
  );
}
