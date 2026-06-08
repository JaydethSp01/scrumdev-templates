"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function Page(){return(<div className="space-y-6"><PageHeader title="Conductores" subtitle="Equipo de conductores y disponibilidad." /><CrudTable title="Conductores" fields={[{key:"nombre",label:"Nombre"},{key:"telefono",label:"Teléfono"},{key:"vehiculo",label:"Vehículo"},{key:"estado",label:"Estado",render:(r:any)=><Badge tone={r.estado==="Activo"?"success":"warning"}>{r.estado}</Badge>}]} initial={[{id:1,nombre:"Carlos Pérez",telefono:"300 111 2233",vehiculo:"ABC123",estado:"Activo"},{id:2,nombre:"Ana Gómez",telefono:"301 222 3344",vehiculo:"DEF456",estado:"Activo"},{id:3,nombre:"Luis Mora",telefono:"302 333 4455",vehiculo:"GHI789",estado:"Descanso"}]} /></div>);}
