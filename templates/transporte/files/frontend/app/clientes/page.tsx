"use client";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function Page(){return(<div className="space-y-6"><PageHeader title="Clientes" subtitle="Clientes frecuentes y sus viajes." /><CrudTable title="Clientes" fields={[{key:"nombre",label:"Nombre"},{key:"telefono",label:"Teléfono"},{key:"viajes",label:"Viajes",type:"number"}]} initial={[{id:1,nombre:"Empresa Alfa",telefono:"604 555 0011",viajes:48},{id:2,nombre:"Juan Díaz",telefono:"310 444 5566",viajes:12},{id:3,nombre:"Hotel Plaza",telefono:"604 555 0022",viajes:33}]} /></div>);}
