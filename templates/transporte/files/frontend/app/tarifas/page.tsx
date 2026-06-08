"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function Page(){const money=(n:any)=>"$"+Number(n||0).toLocaleString("es-CO");return(<div className="space-y-6"><PageHeader title="Tarifas" subtitle="Tarifas por zona: base, kilómetro y recargos." /><CrudTable title="Tarifas" fields={[{key:"zona",label:"Zona"},{key:"base",label:"Base",type:"number",render:(r:any)=>money(r.base)},{key:"km",label:"Por km",type:"number",render:(r:any)=>money(r.km)},{key:"recargo",label:"Recargo"}]} initial={[{id:1,zona:"Urbana",base:5000,km:1500,recargo:"Nocturno +20%"},{id:2,zona:"Aeropuerto",base:35000,km:0,recargo:"Fijo"},{id:3,zona:"Intermunicipal",base:20000,km:2500,recargo:"Festivo +25%"}]} /></div>);}
