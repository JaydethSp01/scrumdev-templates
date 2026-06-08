"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function Page(){return(<div className="space-y-6"><PageHeader title="Vehículos" subtitle="Flota registrada y su estado." /><CrudTable title="Vehículos" fields={[{key:"placa",label:"Placa"},{key:"modelo",label:"Modelo"},{key:"tipo",label:"Tipo"},{key:"estado",label:"Estado",render:(r:any)=><Badge tone={r.estado==="Disponible"?"success":r.estado==="En ruta"?"info":"warning"}>{r.estado}</Badge>}]} initial={[{id:1,placa:"ABC123",modelo:"Logan 2022",tipo:"Sedán",estado:"En ruta"},{id:2,placa:"DEF456",modelo:"Spark 2021",tipo:"Hatchback",estado:"Disponible"},{id:3,placa:"GHI789",modelo:"Hilux 2023",tipo:"Camioneta",estado:"Taller"}]} /></div>);}
